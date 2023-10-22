const Mongoose = require("mongoose");

const DocketModel = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  start_time: {
    type: String,
    required: true,
  },
  end_time: {
    type: String,
    required: true,
  },
  hours_worked: {
    type: String,
    required: true,
  },
  rate_per_hour: {
    type: String,
    required: true,
  },
  Supplier: {
    type: String,
    required: true,
  },
  "PO Number": {
    type: String,
    required: true,
  },
});

module.exports = Mongoose.model("docket", DocketModel);
