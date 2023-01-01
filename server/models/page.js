const mongoose = require("mongoose");

const Page = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    form: {
      type: String,
      required: true,
    },
    link: {
      type: Array,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("page", Page);
