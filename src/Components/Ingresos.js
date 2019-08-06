import React, { Component } from "react";
import Chart from "chart.js";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const node = this.node;
    fetch(`https://guarded-harbor-23202.herokuapp.com/service`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("service", data);
        let active = 0;
        let innactive = 0;
        data.map(service => {
          if (service.license) {
            active++;
          } else {
            innactive++;
          }
        });
        new Chart(node, {
          type: "pie",
          data: {
            labels: ["Activos", "Pasivos"],
            datasets: [
              {
                label: "# of Likes",
                data: [active, innactive],
                backgroundColor: [
                  "rgba(22, 141, 152, 1)",
                  "rgba(251, 210, 45, 1)"
                ]
              }
            ]
          },
          options: {
            title: {
              fontSize: 14,
              display: true,
              text: "INGRESOS"
            }
          }
        });
      });
  }
  render() {
    return (
      <div>
        <canvas
          style={{ width: 800, height: 250 }}
          ref={node => (this.node = node)}
        />
      </div>
    );
  }
}
export default Layout;
