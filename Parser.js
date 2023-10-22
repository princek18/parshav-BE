const xlsx = require("xlsx");
const ParsedDataModel = require("./Model/ParsedDataModel");
require("./db");

const data = xlsx.readFile("./data.xlsx");
let workbook_sheet = data.SheetNames;
let res = xlsx.utils.sheet_to_json(data.Sheets[workbook_sheet[0]]);
let preSupplier = "";
for (let i = 0; i < res.length; i++) {
  delete res[i]["PO Number_1"];
  delete res[i]["PO Number_2"];
  if (res[i].Supplier === "") {
    res[i].Supplier = preSupplier;
  } else {
    preSupplier = res[i].Supplier;
  }
  new ParsedDataModel(res[i]).save().then(() => {});
}
