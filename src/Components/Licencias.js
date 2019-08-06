import React, { Component } from 'react'
import Chart from 'chart.js';

export default class Licencias extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const node = this.node;
        fetch(`https://guarded-harbor-23202.herokuapp.com/license`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log("license", data);
                var licenses = data;
                fetch(`https://guarded-harbor-23202.herokuapp.com/service`)
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        console.log("services", data);
                        var services = data;
                        data.map(service => {

                        });
                        new Chart(node, {
                            type: "doughnut",
                            data: {
                                labels: ["Activos", "No Activos"],
                                datasets: [
                                    {
                                        label: "# of Likes",
                                        data: [],
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
                                    text: "SERVICIOS ACTIVOS E INACTIVOS"
                                }
                            }
                        });
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
            </div >
        );
    }
}
