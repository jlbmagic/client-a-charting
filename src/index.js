import c3 from "c3";

const options = {
  bindto: "#chart",
  axis: {
    x: {
      show: false,
    },
    y: {
      show: false,
    },
  },
  data: {
    columns: [
      ["data1", 85, 200, 100, 400, 150, 250],
      ["data2", 50, 20, 10, 40, 15, 25],
    ],
  },
};

const chart = c3.generate(options);
