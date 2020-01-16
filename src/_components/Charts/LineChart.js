import React, { Component, Fragment } from "react"
import Chart from "react-apexcharts";


class LineChart extends Component {
	constructor(props) {
		super(props)

		this.state = {
			options : {
			  chart: {
			      toolbar: {
			        show: false
			      },
			      sparkline: {
				    enabled: true
				  },		  	
			    height: 50,
			    type: "area"
			  },
			  dataLabels: {
			    enabled: false
			  },
		      legend: {
			    show: false,
			  },
			  stroke: {
				curve: 'straight',
				width: 1
			  },
			  grid: {
				show: true,
			    xaxis: {
			        lines: {
			            show: false
			        }
			    },
			    yaxis: {
			        lines: {
			            show: false
			        }
			    } 		    			
			  },
			  fill: {
			    type: "gradient",
			    gradient: {
			      shadeIntensity: 1,
			      opacityFrom: 0.7,
			      opacityTo: 0.9,
			      stops: [0, 90, 100]
			    }
			  },
			  xaxis: {
			    show: false,
			    labels: {
			    	show: false
			    },
			    axisTicks: {
			    	show: false
			    },
			    axisBorder: {
			    	show: false
			    },
			    tooltip: {
			    	enabled: false
			    }
			  },
			  yaxis: {
			    show: false
			  }	  
			},
			series: [
			    {
			      data: [45, 40, 38, 40, 42, 40, 38, 44, 48]
			    }
			]			
		}
	}

	render() {
		return (
			<Fragment>
	            <Chart
	              options={this.state.options}
	              series={this.state.series}
	              type="area"
	            />			
			</Fragment>
		)
	}
}


export {LineChart}

