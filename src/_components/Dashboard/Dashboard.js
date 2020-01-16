import React, { Component } from "react"
import { MainLayout } from "../Layout/MainLayout"

class Dashboard extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<MainLayout>
	        	Dashboard
			</MainLayout>
		)
	}
}

export { Dashboard }