export default {
  keys: [
      "Jour 1",
      "Jour 2",
      "Jour 3",
      "Jour 4",
      "Jour 5",
      "Jour 6",
      "Jour 7",
      "Jour 8",
      "Jour 9",
      "Jour 10",
      "Jour 11",
      "Jour 12",
      "Jour 13",
      "Jour 14",
      "Jour 15",
      "Jour 16",
      "Jour 17",


  ],
  margin: {
      "top": 50,
      "right": 130,
      "bottom": 50,
      "left": 60
  },
  defs: [
      {
          "id": "dots",
          "type": "patternDots",
          "background": "inherit",
          "color": "#38bcb2",
          "size": 4,
          "padding": 1,
          "stagger": true
      },
      {
          "id": "lines",
          "type": "patternLines",
          "background": "inherit",
          "color": "#eed312",
          "rotation": -45,
          "lineWidth": 6,
          "spacing": 10
      }
  ],

  axisBottom: {
      "tickSize": 5,
      "tickPadding": 5,
      "tickRotation": 0,
      "legend": "Jour n°",
      "legendPosition": "middle",
      "legendOffset": 32
  },
  axisLeft: {
      "tickSize": 5,
      "tickPadding": 5,
      "tickRotation": 0,
      "legend": "Personnes",
      "legendPosition": "middle",
      "legendOffset": -40
  },

}