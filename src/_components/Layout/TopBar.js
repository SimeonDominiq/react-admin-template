import React, { Component, Fragment } from "react"
import { Link } from "react-router-dom"

import searchIcon from "../../_assets/icons/search.svg"
import bellIcon from "../../_assets/icons/bell.svg"

import avatar from "../../_assets/images/avatar.png"

class TopBar extends Component {

	render() {
		return (
			<Fragment>
				<nav className="navbar navbar-expand-md sticky-top navbar-dark">
					<a className="navbar-brand col-sm-2 mr-0" href="#">TransMonitor</a>
					<form class="form-inline">
						<div class="inner-addon left-addon">
							<img src={searchIcon} className="mr-5" />
							<input className="form-control" type="text" name="search" placeholder="Search" aria-label="Search" />
						</div>
					</form>			
					<ul className="navbar-nav ml-auto align-items-center">
						<li className="nav-item">
							<a href="" className="nav-link">Support</a>
						</li>
						<li className="nav-item">
							<a href="" className="nav-link">FAQ</a>
						</li>
						<li className="nav-item">
							<a href="" className="nav-link notify">
								<span>8</span>
								<img src={bellIcon} />
							</a>
						</li>				
						<li className="nav-item">
							<a className="nav-link d-flex user_avi" href="#">
								<div>
									<span>Hello</span>
									<span>Oluwaleke Ojo</span>
								</div>
								<div>
									<img src={avatar} />
								</div>
							</a>
						</li>
					</ul>
				</nav>
			</Fragment>
		)
	}
}

export {TopBar}