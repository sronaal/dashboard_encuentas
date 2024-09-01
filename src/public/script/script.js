// Si estás utilizando Chart.js 3.x o superior, la configuración global se hace de la siguiente manera:
Chart.defaults.maintainAspectRatio = false;

// Total Calls Chart
const totalCallsCtx = document.getElementById('totalCallsChart').getContext('2d');
const totalCallsChart = new Chart(totalCallsCtx, {
    type: 'doughnut',
    data: {
        labels: ['Contestada', 'No contestada'],
        datasets: [{
            label: 'Total Calls',
            data: [50, 100],
            backgroundColor: ['#10B981', '#F59E0B', '#EF4444'],
            hoverBackgroundColor: ['#34D399', '#FBBF24', '#F87171'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
        },
    }
});

// Call Duration Chart
const callDurationCtx = document.getElementById('callDurationChart').getContext('2d');
const callDurationChart = new Chart(callDurationCtx, {
    type: 'bar',
    data: {
        labels: ['Agosto', 'Septiembre','Octubre','Noviembre'],
        datasets: [{
            label: 'Call Duration',
            data: [100, 200, 150, 80, 50],
            backgroundColor: '#3B82F6',
            hoverBackgroundColor: '#60A5FA',
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            }
        },
        plugins: {
            legend: {
                position: 'bottom',
            },
        },
    }
});

// Calls Per Day Chart
const callsPerDayCtx = document.getElementById('callsPerDayChart').getContext('2d');
const callsPerDayChart = new Chart(callsPerDayCtx, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Calls Per Day',
            data: [50, 60, 70, 80, 60, 30, 20],
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            borderColor: '#3B82F6',
            fill: true,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
        },
    }
});
