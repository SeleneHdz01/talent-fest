import React, { Component } from "react";
import Chart from "chart.js";
import randomColor from "randomcolor";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabla: []
    };
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
        let tableData = [];
        data.map(customer => {
          if (labels.indexOf(customer.bussinesActivity) == -1) {
            labels.push(customer.bussinesActivity);
          }
          tableData.push(
            <tr>
              <td>{customer.companyName}</td>
              <td>{customer.first_name}</td>
              <td>{customer.lastLogin}</td>
            </tr>
          );
        });
        this.setState({
          tabla: tableData
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
              display: true,
              text: "Actividad Empresarial"
            }
          }
        });
      });
  }
  render() {
    return (
      <div>
        <h1>Número de Clientes: 100</h1>
        <canvas
          style={{ width: 800, height: 300 }}
          ref={node => (this.node = node)}
        />
        <div>
          <div className="row">
            <div className="col-md-12">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Compañia</th>
                    <th>Nombre del Cliente</th>
                    <th>Ultima Conexion</th>
                  </tr>
                </thead>
                <tbody id="tabla">
                  {this.state.tabla.map(tr => {
                    return tr;
                  })}
                  ​
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Layout;
