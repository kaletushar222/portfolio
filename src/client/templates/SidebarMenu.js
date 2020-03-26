import React, { Component } from 'react';
import { Menu, Card, Sidebar } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-solid-svg-icons'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DashboardLayoutHome from "../dashboard/layouts/home"
import DashboardLayoutSample from "../dashboard/layouts/Sample"

class ComponentSidebarMenu extends Component {
	 render() {
	 	const routes = [
		  {
		    path: '/',
		    exact: true,
		    sidebar: () => <div>home!</div>,
		    main: () => <div>mmmmm</div>
		  },
		  {
		    path: '/bubblegum',
		    sidebar: () => <div>bubblegum!</div>,
		    main: () => <h2>Bubblegum</h2>
		  },
		  {
		    path: '/shoelaces',
		    sidebar: () => <div>shoelaces!</div>,
		    main: () => <h2>Shoelaces</h2>
		  }
		]

        return(
        	<Router>

        		<Sidebar as={Menu} animation='uncover' direction='left'  vertical visible>
		  			<Menu.Item>
			  			<Card
						    image='/portfolio/img/Profile-white-bg.png'
						    header='Tushar Kale'
						    meta='Software Engineer'
						    description=''
						  />
			  		</Menu.Item>
		        <Menu.Item >
		        	<Link to="/">PORTFOLIO</Link>
		        </Menu.Item>
		        <Menu.Item >
		        	<Link to="/contact">CONTACT</Link>
		        </Menu.Item>
		        <Menu.Item >
		        	<Link to="/mycv">MY CV</Link>
		        </Menu.Item>
		        <Menu.Item>
		        	<Link to="/getintouch">GET IN TOUCH</Link>
		        </Menu.Item>
		    </Sidebar>



			    <div style={{ display: 'flex' }}>
			      <div style={{ flex: 1, padding: '10px' }}>
			        {routes.map((route, index) => (
			          <Route
			            key={index}
			            path={route.path}
			            exact={route.exact}
			            component={route.main}
			          />
			        ))}
			      </div>
			    </div>
			</Router>
		    
        )
    }
}

export default ComponentSidebarMenu