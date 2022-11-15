var chartObject = document.getElementById('chart');

var chart = new Chart(chartObject, {
    type: 'bar',
    data: {
        labels: ["TF-TE", "IS", "A-POO-AT","Schule", "AU-SE", "TR-COM"],
        datasets: [{
            backgroundColor: [
                "#e60049", "#0bb4ff", "#50e991", "#e6d800", "#9b19f5", "#ffa300"
            ],
            data: [4, 7, 12,40, 16+17+12,42+26+27]
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontColor: "white",
                    fontSize: 16
                }
            }],
            yAxes: [{
                ticks: {
                    fontColor: "white",
                    fontSize: 15,
                }
            }]
        }
    }
});