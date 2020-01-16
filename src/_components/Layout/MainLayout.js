import React, { Fragment, Component } from "react";
import { withRouter } from 'react-router-dom'
import {SideBar} from "./SideBar";
import {TopBar} from "./TopBar";
import { history } from "../../_helpers"


class MainLayout extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Fragment>
				<div id="page">
					<TopBar />
					<div className="container-fluid">
						<div className="row">
							<SideBar />
							<main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-5">
								{this.props.children}
							</main>				
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}

export {MainLayout}

