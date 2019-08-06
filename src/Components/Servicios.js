import React, { Component } from 'react'

var Chart = require("chart.js");
class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const node = this.node;
    var myChart = new Chart(node, {
      type: "bar",
      data: {
        labels: ["Activos", "No Activos"],
        datasets: [
          {
            label: "# of Likes",
            data: [1200, 999],
            backgroundColor: [
              "rgba(22, 141, 152, 1)",
              
              "rgba(251, 210, 45, 1)"
            ]
          }
        ]
      }
    });
  }
  render() {
    return (
      <div>
        <canvas
          style={{ width: 800, height: 100 }}
          ref={node => (this.node = node)}
        />
      </div>
    );
  }
}
export default Layout;