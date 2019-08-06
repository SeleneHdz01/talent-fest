import React, { Component } from "react";
import Chart from "chart.js";
import randomColor from "randomcolor";

export default class Transacciones extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const node = this.node;
    fetch(`https://guarded-harbor-23202.herokuapp.com/transaction`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log("transction", data);
        let enero = 0;
        let febrero = 0;
        let marzo = 0;
        let abril = 0;
        let mayo = 0;
        let junio = 0;
        let julio = 0;
        let agosto = 0;
        let septiembre = 0;
        let octubre = 0;
        let noviembre = 0;
        let diciembre = 0;

        data.map(transaction => {
          let dateTransaction = new Date(transaction.dateTransaction);
          console.log(dateTransaction.getMonth());

          if (dateTransaction.getMonth() == 0) {
            enero++;
          } else if (dateTransaction.getMonth() == 1) {
            febrero++;
          } else if (dateTransaction.getMonth() == 2) {
            marzo++;
          } else if (dateTransaction.getMonth() == 3) {
            abril++;
          } else if (dateTransaction.getMonth() == 4) {
            mayo++;
          } else if (dateTransaction.getMonth() == 5) {
            junio++;
          } else if (dateTransaction.getMonth() == 6) {
            julio++;
          } else if (dateTransaction.getMonth() == 7) {
            agosto++;
          } else if (dateTransaction.getMonth() == 8) {
            septiembre++;
          } else if (dateTransaction.getMonth() == 9) {
            octubre++;
          } else if (dateTransaction.getMonth() == 10) {
            noviembre++;
          } else if (dateTransaction.getMonth() == 11) {
            diciembre++;
          }
        });
        new Chart(node, {
          type: "bar",
          data: {
            labels: [
              "Enero",
              "Febrero",
              "Marzo",
              "Abril",
              "Mayo",
              "Junio",
              "Julio",
              "Agosto",
              "Septiembre",
              "Octubre",
              "Noviembre",
              "Diciembre"
            ],
            datasets: [
              {
                label: "Número de transacciones",
                data: [
                  enero,
                  febrero,
                  marzo,
                  abril,
                  mayo,
                  junio,
                  julio,
                  agosto,
                  septiembre,
                  octubre,
                  noviembre,
                  diciembre
                ],
                backgroundColor: randomColor({
                  count: 12,
                  format: "rgba",
                  hue: "#00FFFF"
                })
              }
            ]
          },
          options: {
            title: {
              display: true,
              text: "TRANSACCIONES EFECTUADAS POR MES "
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
