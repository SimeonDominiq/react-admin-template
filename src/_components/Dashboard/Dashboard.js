import React, { Component } from "react"
import { MainLayout } from "../Layout/MainLayout"

import {LineChart} from "../Charts"
import {SeriesChart} from "../Charts"

class Dashboard extends Component {
	constructor(props) {
		super(props)

		this.state = {

		};
	}

	render() {
		return (
			<MainLayout>
	        	<div className="row card-stats">
	        		<div className="col-lg-3">
	        			<div className="card">
	        				<div className="card-body p-3">
	        					<div className="row align-items-center">
	        						<div className="col-lg-7 col-md-7 col-7 pr-1">
	        							<span>Daily Transaction Volume</span>
	        							<div>2,342</div>
	        						</div>

	        						<div className="col-lg-5 col-md-5 col-5">
	        							<LineChart />
	        						</div>
	        					</div>
	        				</div>
	        			</div>
	        		</div>

	        		<div className="col-lg-3">
	        			<div className="card">
	        				<div className="card-body p-3">
	        					<div className="row align-items-center">
	        						<div className="col-lg-7 col-md-7 col-7 pr-1">
	        							<span>Daily Transaction Value</span>
	        							<div>
											{ new Intl.NumberFormat("en-NG", {
                                              style: "currency",
                                              currency: "NGN",
                                              minimumFractionDigits: 2,
                                              maximumFractionDigits: 2
                                            }).format("4000000") }
                                        </div>
	        						</div>

	        						<div className="col-lg-5 col-md-5 col-5">
	        							<LineChart />
	        						</div>
	        					</div>	        					
	        				</div>
	        			</div>
	        		</div>

	        		<div className="col-lg-3">
	        			<div className="card">
	        				<div className="card-body p-3">
	        					<div className="row align-items-center">
	        						<div className="col-lg-7 col-md-7 col-7 pr-1">
	        							<span>Total Transaction Volume</span>
	        							<div>452, 000</div>
	        						</div>

	        						<div className="col-lg-5 col-md-5 col-5">
	        							<LineChart />
	        						</div>
	        					</div>	        					
	        				</div>
	        			</div>
	        		</div>

	        		<div className="col-lg-3">
	        			<div className="card">
	        				<div className="card-body p-3">
	        					<div className="row align-items-center">
	        						<div className="col-lg-7 col-md-7 col-7 pr-1">
	        							<span>Daily Transaction Value</span>
	        							<div>
	        								{ new Intl.NumberFormat("en-NG", {
                                              style: "currency",
                                              currency: "NGN",
                                              minimumFractionDigits: 2,
                                              maximumFractionDigits: 2
                                            }).format("4000000") }
	        							</div>
	        						</div>

	        						<div className="col-lg-5 col-md-5 col-5">
	        							<LineChart />
	        						</div>
	        					</div>	        					
	        				</div>
	        			</div>
	        		</div>		        				        				        		
	        	</div>

	        	<div className="row mt-5 yearly-chart">
	        		<div className="col-lg-8 pr-md-1">
	        			<div className="card">
	        				<div className="card-body pb-0 px-0 main-chart">
	        					<div className="row px-3">
	        						<div className="col-lg-5">
	        							<h4>Today: 5 Aug, 2018</h4>
	        						</div>
	        						<div className="col-lg-7">
	        							<div className="d-flex justify-content-end">
	        								<div className="mr-5">
		        								<form>
		        									<select name="dateFilter" className="form-control">
		        										<option value="">1 Jan - 1 Jun</option>
		        									</select>
		        								</form>
		        							</div>

		        							<div>
		        								<button type="button" className="btn btn-default btn-sm mr-1"><i className="fas fa-angle-left"></i></button>

		        								<button type="button" className="btn btn-default btn-sm"><i className="fas fa-angle-right"></i></button>
		        							</div>
	        							</div>
	        						</div>
	        					</div>
	        					<SeriesChart />
	        				</div>
	        			</div>
	        		</div>

	        		<div className="col-lg-4 pl-md-0 progress-card">
	        			<div className="card mb-1">
	        				<div className="card-body">
	        					<div>
	        						<h6>Orders</h6>
									<div className="progress mt-11px" style={{height: "4px"}}>
										<div className="progress-bar bg-success" role="progressbar" style={{width: "80%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
									</div>

									<div className="mt-11px">
										<span>Pending orders: <font className="font-weight-bold text-gold">20</font></span>
									</div>

									<div className="mt-10px">
										<span>Reconcilled orders: <font className="font-weight-bold text-dark-green">80</font></span>
									</div>

									<div className="mt-11px">
										<span>Total orders: <font className="font-weight-bold text-dark-blue">100</font></span>
									</div>												        						
	        					</div>
	        				</div>
	        			</div>

	        			<div className="card">
	        				<div className="card-body">
	        					<div>
	        						<h6>Payments</h6>
									<div className="progress mt-11px" style={{height: "4px"}}>
										<div className="progress-bar bg-success" role="progressbar" style={{width: "80%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
									</div>

									<div className="mt-11px">
										<span>Pending payments: <font className="font-weight-bold text-gold">20</font></span>
									</div>

									<div className="mt-10px">
										<span>Reconcilled payments: <font className="font-weight-bold text-dark-green">80</font></span>
									</div>

									<div className="mt-11px">
										<span>Total payments: <font className="font-weight-bold text-dark-blue">100</font></span>
									</div>												        						
	        					</div>
	        				</div>
	        			</div>
	        		</div>
	        	</div>	        	
			</MainLayout>
		)
	}
}

export { Dashboard }