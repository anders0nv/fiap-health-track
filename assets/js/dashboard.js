/* globals Chart:false, feather:false */

(function () {
    'use strict'
  
    feather.replace()
  
    // Graphs
    var chart1 = document.getElementById('chart-1')
    var chart2 = document.getElementById('chart-2')
    var chart3 = document.getElementById('chart-3')
    var chart4 = document.getElementById('chart-4')

    // eslint-disable-next-line no-unused-vars
    var chartOne = new Chart(chart1, {
      type: 'line',
      data: {
        labels: [
          'Domingo',
          'Segunda',
          'Terça',
          'Quarta',
          'Quinta',
          'Sexta',
          'Sábado'
        ],
        datasets: [{
          data: [
            5,
            4,
            5,
            6,
            5,
            7,
            7.5
          ],
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })

    var chartTwo = new Chart(chart2, {
      type: 'line',
      data: {
        labels: [
          'Domingo',
          'Segunda',
          'Terça',
          'Quarta',
          'Quinta',
          'Sexta',
          'Sábado'
        ],
        datasets: [{
          data: [
            12.5,
            11.5,
            12.2,
            15.4,
            11.1,
            10.5,
            12.8
          ],
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })

    var chartThree = new Chart(chart3, {
      type: 'line',
      data: {
        labels: [
          'Domingo',
          'Segunda',
          'Terça',
          'Quarta',
          'Quinta',
          'Sexta',
          'Sábado'
        ],
        datasets: [{
          data: [
            75,
            75,
            74,
            73,
            74,
            74,
            70
          ],
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false
        }
      }
    })

    var myPieChart = new Chart(chart4, {
			type: 'pie',
			data: {
				datasets: [{
					data: [
						3,
						3,
						4,
						5,
						7,
					],
					backgroundColor: [
						'#fbc02d',
						'#388e3c',
						'#ffd600',
            '#00b0ff',
						'#0d47a1 '
					],
					label: 'Dataset 1'
				}],
				labels: [
					'Carboidratos',
					'Proteinas',
					'Gorduras',
					'Fibras',
					'Vitaminas'
				]
			},
			options: {
				responsive: true
			}
		});
  }())