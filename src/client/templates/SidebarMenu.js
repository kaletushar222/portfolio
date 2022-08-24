import React, { Component } from 'react';
import {
	BrowserRouter as Router, Link, Route
} from "react-router-dom";
import { Card, Menu, Sidebar } from 'semantic-ui-react';

class ComponentSidebarMenu extends Component {
	 render() {
        return(
			<Sidebar as={Menu} animation='uncover' direction='left'  vertical visible>
				<Menu.Item>
					<Card
						image={ process.env.PUBLIC_URL+'/portfolio/img/Profile-white-bg.png'}
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
		    
        )
    }
}

export default ComponentSidebarMenu