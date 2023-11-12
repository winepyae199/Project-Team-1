const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['First Week', 'Second Week', 'Third Week', 'Fourth Week'],
    datasets: [{
      label: '# of Votes',
      data: [452, 385, 421, 354,],
      borderWidth: 1,
      backgroundColor: '#FFB1C1',
    
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});