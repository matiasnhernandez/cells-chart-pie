class CellsChartPie extends Polymer.Element {

  static get is() {
    return 'cells-chart-pie';
  }

  static get properties() {
    return {
      tipo: {
        type: String,
        value: 'doughnut'
      },
      titulo: {
        type: String,
        value: 'Chart'
      },
      titulos: Array,
      colores: Array,
      datos: Array
    };
  }

  cargar() {

    console.log('cargar');
    var ctx = this.$.myChart.getContext('2d');

    var config = {
      type: this.tipo,
      data: {
        datasets: [ {
          data: this.datos,
          backgroundColor: this.colores,
          label: 'Dataset'
        } ],
        labels: this.titulos
      },
      options: {
        responsive: true,
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: this.titulo
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    };

    var chart = new Chart(ctx, config);
    this.$.myChart = chart;
  }

  connectedCallback() {
    console.log('connectedCallback');
    super.connectedCallback();
    this.cargar();
  }
}

customElements.define(CellsChartPie.is, CellsChartPie);