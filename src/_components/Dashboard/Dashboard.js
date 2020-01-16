import React, { Component } from "react"
import { MainLayout } from "../Layout/MainLayout"

import {LineChart} from "../Charts"

class Dashboard extends Component {
	constructor(props) {
		super(props)

		this.state = {

		};
	}

	render() {
		return (
			<MainLayout>
	        	<div class="row card-stats">
	        		<div class="col-lg-3">
	        			<div class="card">
	        				<div class="card-body p-3">
	        					<div class="row align-items-center">
	        						<div class="col-lg-7 col-md-7 col-7 pr-1">
	        							<span>Daily Transaction Volume</span>
	        							<div>2,342</div>
	        						</div>

	        						<div class="col-lg-5 col-md-5 col-5">
	        							<LineChart />
	        						</div>
	        					</div>
	        				</div>
	        			</div>
	        		</div>

	        		<div class="col-lg-3">
	        			<div class="card">
	        				<div class="card-body p-3">
	        					<div class="row align-items-center">
	        						<div class="col-lg-7 col-md-7 col-7 pr-1">
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

	        						<div class="col-lg-5 col-md-5 col-5">
	        							<LineChart />
	        						</div>
	        					</div>	        					
	        				</div>
	        			</div>
	        		</div>

	        		<div class="col-lg-3">
	        			<div class="card">
	        				<div class="card-body p-3">
	        					<div class="row align-items-center">
	        						<div class="col-lg-7 col-md-7 col-7 pr-1">
	        							<span>Total Transaction Volume</span>
	        							<div>452, 000</div>
	        						</div>

	        						<div class="col-lg-5 col-md-5 col-5">
	        							<LineChart />
	        						</div>
	        					</div>	        					
	        				</div>
	        			</div>
	        		</div>

	        		<div class="col-lg-3">
	        			<div class="card">
	        				<div class="card-body p-3">
	        					<div class="row align-items-center">
	        						<div class="col-lg-7 col-md-7 col-7 pr-1">
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

	        						<div class="col-lg-5 col-md-5 col-5">
	        							<LineChart />
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