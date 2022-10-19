var chartObject = document.getElementById('chart');

var chart = new Chart(chartObject, {
    type: 'horizontalBar',
    data: {
        labels: [ "Schule", "TR-COM", "A-POO-AT", "TF-TE", "IS", "AU-SE", ],
        datasets: [{
            backgroundColor: [
                "#e60049", "#0bb4ff", "#50e991", "#e6d800", "#9b19f5", "#ffa300"
            ],
            color: ["#fff"],
            data: [10, 0, 12, 4, 7, 17]
        }]
    },
    options: {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 80
                    }
                }
            }
        },
        legend: {
            display: false
        }
    }
});