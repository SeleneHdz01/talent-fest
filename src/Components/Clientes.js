import React, { Component } from "react";
import Chart from "chart.js";
import randomColor from "randomcolor";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const node = this.node;
    fetch(`https://guarded-harbor-23202.herokuapp.com/customer`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("customer", data);
        let labels = [];
        let count_data = [];
        let count_id = [];
        data.map(customer => {
          if (labels.indexOf(customer.bussinesActivity) == -1) {
            labels.push(customer.bussinesActivity);
          }
        });
        labels.map(value => {
          var count = 0;
          data.map(customer => {
            if (value == customer.bussinesActivity) {
              count++;
            }
          });
          count_data.push(count);
        });

        new Chart(node, {
          type: "bar",
          data: {
            labels: labels,
            datasets: [
              {
                label: "Sin actividad",
                data: count_data,
                backgroundColor: randomColor({
                  luminosity: "light",
                  count: labels.length
                })
              }
            ]
          },
          options: {
            title: {
              fontSize: 14,
              display: true,
              text: "GIRO EMPRESARIAL"
            }
          }
        });
      });
  }
  render() {
    return (
      <div>
        <h1>Número de muestra de Clientes: 100</h1>
        <canvas
          style={{ width: 800, height: 350 }}
          ref={node => (this.node = node)}
        />
        <div />
      </div>
    );
  }
}
export default Layout;
