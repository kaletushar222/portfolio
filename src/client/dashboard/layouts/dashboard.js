
import { render } from 'react-dom';

import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';


import ComponentDashboardContact from '../components/home/Contact';
import ComponentDashboardIntro from '../components/home/Intro';
import ComponentDashboardPortfolio from '../components/home/Portfolio';
import ComponentSidebar from '../../templates/Sidebar';
import ComponentMobileNavigation from '../../templates/MobileNavigation'

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>HOME</div>,
    main: () => <ComponentDashboardIntro />
  },
  {
    path: '/portfolio',
    sidebar: () => <div>PORTFOLIO</div>,
    main: () => <ComponentDashboardPortfolio />
  },
  {
    path: '/contact',
    sidebar: () => <div>CONTACT</div>,
    main: () => <ComponentDashboardContact />
  },
  {
    path: '/getintouch',
    sidebar: () => <div>GET IN TOUCH</div>,
    main: () => <h2> GET IN TOUCH !!</h2>
  }
]

const current_route = window.location.pathname

const SidebarNavigation = () => (
    <Router>
		<ComponentSidebar/>
    <ComponentMobileNavigation/>
		<div className='main-container'>
			{routes.map((route, index) => (
				<Route
					key={index}
					path={route.path}
					exact={route.exact}
					component={route.main}
				/>
			))}
		</div>
  	</Router>
)

export default SidebarNavigation

render(<SidebarNavigation />, document.getElementById('root'));
