import React, { Component, Fragment } from "react"
import { Link } from "react-router-dom"

import overviewIcon from "../../_assets/icons/overview.svg"
import walletIcon from "../../_assets/icons/wallet.svg"
import reconcilledIcon from "../../_assets/icons/reconcilled.svg"
import unreconcilledIcon from "../../_assets/icons/unreconcilled.svg"
import manualIcon from "../../_assets/icons/manual_icon.svg"

import allOrdersIcon from "../../_assets/icons/all_order.svg"
import pendingOrdersIcon from "../../_assets/icons/pending_order.svg"
import reconcilledOrdersIcon from "../../_assets/icons/reconcilled_orders.svg"
import merchantProfileIcon from "../../_assets/icons/merchant_profile.svg"


class SideBar extends Component {

	render() {
		return (
			<Fragment>
				<nav className="col-md-2 d-none d-md-block bg-light sidebar px-0">
		          <div className="sidebar-sticky pt-5 pb-5">

		          	<div className="text-center">
		          		<Link to="" className="btn btn-primary btn-rounded text-uppercase d-inline-block mb-5">Generate Invoice</Link>
		          	</div>

		            <h6 className="sidebar-heading pl-3 mb-3 text-muted">
		              <span>Main</span>
		            </h6>

		            <ul className="nav flex-column">
		              <li className="nav-item">
		                <Link to="" className="nav-link active">
		                	<img src={overviewIcon} />
		                  	Overview
		                </Link>
		              </li>
		             </ul>

		            <h6 class="sidebar-heading pl-3 mt-5 text-muted">
		              <span>Payments</span>
		            </h6>

		             <ul class="nav flex-column">
		              <li class="nav-item">
		                <Link class="nav-link" to="">
							<img src={walletIcon} />
		                  	All Payments
		                </Link>
		              </li>
		              <li className="nav-item">
		                <Link className="nav-link" to="">
		                	<img src={reconcilledIcon} />
		                  	Reconciled Payments
		                </Link>
		              </li>
		              <li className="nav-item">
		                <Link className="nav-link" to="">
		                	<img src={unreconcilledIcon} />
		                  	Un - Reconciled Payments
		                </Link>
		              </li>
		              <li className="nav-item">
		                <Link className="nav-link" to="">
		                	<img src={manualIcon} />
		                  	Manual Settlement
		                </Link>
		              </li>		              		              
		            </ul>

		            <h6 class="sidebar-heading pl-3 mt-4 text-muted">
		              <span>Orders</span>
		            </h6>
		             <ul class="nav flex-column">
		              <li class="nav-item">
		                <Link class="nav-link" to="">
							<img src={allOrdersIcon} />
		                  	All Orders
		                </Link>
		              </li>
		              <li className="nav-item">
		                <Link className="nav-link" to="">
		                	<img src={pendingOrdersIcon} />
		                  	Pending Orders
		                </Link>
		              </li>
		              <li className="nav-item">
		                <Link className="nav-link" to="">
		                	<img src={reconcilledOrdersIcon} />
		                  	Reconciled Orders
		                </Link>
		              </li>
		              <li className="nav-item">
		                <Link className="nav-link" to="">
		                	<img src={merchantProfileIcon} />
		                  	Merchant Profile
		                </Link>
		              </li>		              		              
		            </ul>		            
		          </div>
		        </nav>				
			</Fragment>
		)
	}
}

export {SideBar}
