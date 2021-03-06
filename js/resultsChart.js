/* eslint-disable */
/** Chart.js **/

import html from '/js/html.js';

let template = function() {
    return html`
        
        <h2> Chart </h2>
        <div class="chart-container">
            <canvas width="400"></canvas>
        </div>
   `;
};

export default class ResultsChart {
    constructor(props) {
        this.results = props.results;
       
       
    }

    render() {
        let dom = template();
        let canvas = dom.querySelector('canvas');
        let ctx = canvas.getContext('2d');

        let labels = [];
        let data = [];

        for(let i = 0; i < this.results.length; i++) {
            let productChart = this.results[i];
            labels.push(productChart.name);
            data.push(productChart.votes);
        }

        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Views',
                    data: data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
        return dom;
    }
}