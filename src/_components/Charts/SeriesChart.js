import React, { Component, Fragment } from "react"
import Chart from "react-apexcharts";


class SeriesChart extends Component {
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
	                type: 'area',
	            },
	            dataLabels: {
	                enabled: false
	            },
	            plotOptions: {
	              area: {
	                isRange: true
	              }
	            },
	            stroke: {
	                curve: 'straight',
	                width: 0
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
			  xaxis: {
			  	type: 'datetime',
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
			series: [{
	                name: 'range',
	                data: [
	                {
	                  x: new Date(1538780400000),
	                  y: [6632.01, 6643.59]
	                },
	                {
	                  x: new Date(1538782200000),
	                  y: [6630.71, 6648.95]
	                },
	                {
	                  x: new Date(1538784000000),
	                  y: [6635.65, 6651]
	                },
	                {
	                  x: new Date(1538785800000),
	                  y: [6638.24, 6640]
	                },
	                {
	                  x: new Date(1538787600000),
	                  y: [6624.53, 6636.03]
	                },
	                {
	                  x: new Date(1538789400000),
	                  y: [6624.61, 6632.2]
	                },
	                {
	                  x: new Date(1538791200000),
	                  y: [6617, 6627.62]
	                },
	                {
	                  x: new Date(1538793000000),
	                  y: [6605, 6608.03]
	                },
	                {
	                  x: new Date(1538794800000),
	                  y: [6604.5, 6614.4]
	                },
	                {
	                  x: new Date(1538796600000),
	                  y: [6608.02, 6610.68]
	                },
	                {
	                  x: new Date(1538798400000),
	                  y: [6608.91, 6618.99]
	                },
	                {
	                  x: new Date(1538800200000),
	                  y: [6612, 6615.13]
	                },
	                {
	                  x: new Date(1538802000000),
	                  y: [6612, 6624.12]
	                },
	                {
	                  x: new Date(1538803800000),
	                  y: [6603.91, 6623.91]
	                },
	                {
	                  x: new Date(1538805600000),
	                  y: [6611.69, 6618.74]
	                },
	                {
	                  x: new Date(1538807400000),
	                  y: [6611, 6622.78]
	                },
	                {
	                  x: new Date(1538809200000),
	                  y: [6614.9, 6626.2]
	                }
	                ]
	            }]	        			
		}
	}

	render() {
		return (
			<Fragment>
	            <Chart
	              options={this.state.options}
	              series={this.state.series}
	              type="area"
	              height="302"
	            />			
			</Fragment>
		)
	}
}


export {SeriesChart}

