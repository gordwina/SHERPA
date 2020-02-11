export default {
  keys: [
      "Jour 1",
      "Jour 2",
      "Jour 3",
      "Jour 4",
      "Jour 5",
      "Jour 6", 
      "Jours 7",
      "Jour 8",
      "Jour 9",
      "Jour 10",
      "Jour 11",
      "Jour 12",
      "Jour 13",
      "Jour 14", 
      "Jours 15",
      "Jour 16",
      "Jour 17",
      "Jour 18",
      "Jour 19",
      "Jour 20",
      "Jour 21",
      "Jour 22", 
      "Jours 23",
      "Jour 24",
      "Jour 25",
      "Jour 26",
      "Jour 27",
      "Jour 28",
      "Jour 29",
      "Jour 30", 
      "Jours 31"

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
  fill: [
      {
          "match": {
              "id": "fries"
          },
          "id": "dots"
      },
      {
          "match": {
              "id": "sandwich"
          },
          "id": "lines"
      }
  ],
  axisBottom: {
      "tickSize": 5,
      "tickPadding": 5,
      "tickRotation": 0,
      "legend": "jours",
      "legendPosition": "middle",
      "legendOffset": 32
  },
  axisLeft: {
      "tickSize": 5,
      "tickPadding": 5,
      "tickRotation": 0,
      "legend": "personnes",
      "legendPosition": "middle",
      "legendOffset": -40
  },
  legends: [
      {

          "anchor": "bottom-right",
          "direction": "column",
          "justify": false,
          "translateX": 120,
          "translateY": 0,
          "itemsSpacing": 2,
          "itemWidth": 100,
          "itemHeight": 20,
          "itemDirection": "left-to-right",
          "itemOpacity": 0.85,
          "symbolSize": 20,
          "effects": [
              {
                  "on": "hover",
                  "style": {
                      "itemOpacity": 1
                  }
              }
          ]
      }
  ]
}