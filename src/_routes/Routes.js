import {Dashboard} from "../_components/Dashboard"

const Routes = [
  {
    path: "/",
    exact: true,
    auth: false,
    component: Dashboard
  },
  {
    path: "/dashboard",
    exact: true,
    auth: false,
    component: Dashboard
  }  
];

export default Routes;