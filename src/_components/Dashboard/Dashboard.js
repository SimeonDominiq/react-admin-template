import React, { Component } from "react"
import { MainLayout } from "../Layout/MainLayout"

import {LineChart} from "../Charts"
import {SeriesChart} from "../Charts"

import searchIcon from "../../_assets/icons/search.svg"

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

	        	<div className="row mt-5 payments">
	        		<div className="col-lg-12">
	        			<h3>Payments</h3>
	        			<div className="row align-items-center">
	        				<div className="col-lg-4">
	        					<form className="form-inline pagination">
	        						<label className="mr-2">Showing</label>
	        						<select name="" className="form-control mr-2">
	        							<option value="10">10</option>
	        						</select>
	        						<label>out of 500 payments</label>
	        					</form>
	        				</div>

	        				<div className="col-lg-4 pl-md-0">
	        					<div className="inner-addon left-addon">
	        						<img src={searchIcon} className="mr-3" />
	        						<input type="text" name="search" className="form-control" placeholder="Search payments" />
	        					</div>
	        				</div>

	        				<div className="col-lg-4">
	        					<div className="d-flex justify-content-end">
	        						<form className="form-inline">
	        							<label className="mr-3">Show</label>
	        							<select name="filter" className="form-control">
	        								<option value="all">All</option>
	        								<option value="reconciled">Reconcilled</option>
	        								<option value="un-reconciled">Un-reconcilled</option>
	        							</select>
	        						</form>
	        					</div>
	        				</div>
	        			</div>
	        		</div>

	        		<div className="col-lg-12 mt-3">
						<div className="table-responsive dashboard-table">
							<table className="table">
								<thead>
									<tr>
										<th>Item Type</th>
										<th>Price</th>
										<th>Transaction No</th>
										<th>Time</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<div className="media align-self-center">
												<div className="icon mr-4">VW</div>
												<div className="media-body align-self-center">
													Apple Mac Book 15" 250 SSD 12GB
												</div>
											</div>
										</td>
										<td>
											<span>$73430</span>
										</td>
										<td>
											<span>1234567890</span>
										</td>
										<td>
											<span>12:30</span>
										</td>
										<td>
											<div className="d-flex justify-content-between align-items-center">
												<div className="list-status">
													<div>
														<span className="indicator success-bg"></span>
														<span className="text-success">Success</span>
													</div>
												</div>

												<div className="btn-group">
												<a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
													<i className="fas fa-angle-down"></i>
												</a>
													<div className="dropdown-menu dropdown-menu-right">
													<button className="dropdown-item" type="button">Action</button>
													<button className="dropdown-item" type="button">Action</button>
													<button className="dropdown-item" type="button">Action</button>
													</div>
												</div>													
											</div>
										</td>
									</tr>										
									<tr>
										<td>
											<div className="media align-self-center">
												<div className="icon mr-4">VW</div>
												<div className="media-body align-self-center">
													Apple Mac Book 15" 250 SSD 12GB
												</div>
											</div>
										</td>
										<td>
											<span>$73430</span>
										</td>
										<td>
											<span>1234567890</span>
										</td>
										<td>
											<span>12:30</span>
										</td>
										<td>
											<div className="d-flex justify-content-between align-items-center">
												<div className="list-status">
													<div>
														<span className="indicator pending-bg"></span>
														<span className="text-pending">Pending</span>
													</div>
												</div>

												<div className="btn-group">
												<a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
													<i className="fas fa-angle-down"></i>
												</a>
													<div className="dropdown-menu dropdown-menu-right">
													<button className="dropdown-item" type="button">Action</button>
													<button className="dropdown-item" type="button">Action</button>
													<button className="dropdown-item" type="button">Action</button>
													</div>
												</div>													
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
	        		</div>

	        		<div className="col-lg-12 mt-3 bottom-pagination pb-5">
	        			<div className="row align-items-center">
		        			<div className="col-md-4">
		        				<span>Showing 1 to 10 of 500 entries</span>
		        			</div>

		        			<div className="col-md-8">
								<div className="d-flex justify-content-end">
									<nav aria-label="...">
										<ul className="pagination">
											<li className="page-item disabled">
											<a className="page-link" href="#" tabindex="-1">Previous</a>
											</li>
											<li className="page-item"><a className="page-link" href="#">1</a></li>
											<li className="page-item active">
											<a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
											</li>
											<li className="page-item">
											<a className="page-link" href="#">Next</a>
											</li>
										</ul>
									</nav>										
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