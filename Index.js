const express = require("express");
const ParsedDataModel = require("./Model/ParsedDataModel");
const DocketModel = require("./Model/DocketModel");
const cors = require("cors");
require("./db");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/getDockets", async (req, res) => {
  try {
    let data = await DocketModel.find({});
    if (data.length === 0 || !data) {
      throw new Error("No data found!");
    }
    res.send({ data });
  } catch (e) {
    res.status(404).send({ error: e.message });
  }
});

app.post("/addDocket", async (req, res) => {
  try {
    let data = new DocketModel({ ...req.body });
    if (!data) {
      throw new Error("Invalid Body!");
    }
    await data.save();
    res.send({ message: "Docket Updated" });
  } catch (e) {
    res.status(404).send({ error: e.message });
  }
});

app.get("/getEnum", async (req, res) => {
  try {
    if (req.query?.supplier) {
      let data = await ParsedDataModel.distinct("PO Number", {
        Supplier: req.query?.supplier,
      });
      if (!data) {
        throw new Error("No Data!");
      }
      let responseData = data.map((one) => {
        return {
          value: one,
          label: one,
        };
      });
      res.send({ data: responseData });
    } else {
      let data = await ParsedDataModel.distinct("Supplier");
      if (!data) {
        throw new Error("No Data!");
      }
      let responseData = data.map((one) => {
        return {
          value: one,
          label: one,
        };
      });
      res.send({ data: responseData });
    }
  } catch (e) {
    res.status(404).send({ error: e.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});
