
var ctx = document.getElementById('twitterChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#3c84e8', '#a6c5ee', '#cccccc'],
            data: [20, 30, 45],

        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false,

        }
    }
});

var ctx = document.getElementById('googleChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#3c84e8', '#a6c5ee', '#cccccc'],
            data: [20, 10, 60],

        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false,

        }
    }
});

var ctx = document.getElementById('facebookChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#3c84e8', '#a6c5ee', '#cccccc'],
            data: [50, 10, 40],

        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false,

        }
    }
});


