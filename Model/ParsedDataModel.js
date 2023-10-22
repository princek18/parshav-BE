const Mongoose = require("mongoose");

const ParsedDataModel = new Mongoose.Schema({
  "Record Type": {
    type: String,
  },
  "PO Number": {
    type: String,
    required: true,
  },
  Chg: {
    type: String,
  },
  Com: {
    type: String,
  },
  Type: {
    type: String,
  },
  Conf: {
    type: String,
  },
  "Order Date": {
    type: String,
  },
  Buyer: {
    type: String,
  },
  "Account Number": {
    type: String,
  },
  Supplier: {
    type: String,
    required: true,
  },
  Curr: {
    type: String,
  },
  Item: {
    type: String,
  },
  "Commodity Code": {
    type: String,
  },
  Description: {
    type: String,
  },
  Qty: {
    type: String,
  },
  Un: {
    type: String,
  },
  "Order Value": {
    type: String,
  },
  "Amount Invoiced": {
    type: String,
  },
  "WBS Code": {
    type: String,
  },
  Contract: {
    type: String,
  },
  Remarks: {
    type: String,
  },
});

module.exports = Mongoose.model("parsedData", ParsedDataModel);
