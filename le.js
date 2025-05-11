const labels = ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyn', 'Iyl', 'Avg', 'Sen', 'Okt', 'Noy', 'Dek'];
const incomeData = [5, 7, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
const investmentData = [100, 120, 150, 180, 200, 230, 250, 280, 300, 330, 350, 380];

const ctx = document.getElementById('investmentChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'Daromad (%)',
                data: incomeData,
                borderColor: '#0056b3',
                backgroundColor: 'rgba(0, 86, 179, 0.1)',
                tension: 0.3,
                yAxisID: 'y'
            },
            {
                label: 'Investitsiya (ming ₽)',
                data: investmentData,
                borderColor: '#00a651',
                backgroundColor: 'rgba(0, 166, 81, 0.1)',
                tension: 0.3,
                yAxisID: 'y1'
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Yillik investitsiya ko\'rsatkichlari',
                font: {
                    size: 16
                }
            },
            legend: {
                position: 'top',
            },
            tooltip: {
                mode: 'index',
                intersect: false
            }
        },
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                title: {
                    display: true,
                    text: 'Daromad (%)'
                }
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                title: {
                    display: true,
                    text: 'Investitsiya (ming ₽)'
                },
                grid: {
                    drawOnChartArea: false
                }
            }
        }
    }
});