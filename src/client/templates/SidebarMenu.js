import React, { Component } from 'react';
import { Menu, Card, Sidebar } from 'semantic-ui-react'

class ComponentSidebarMenu extends Component {
	 render() {

        return(
	  		<Sidebar as={Menu} animation='uncover' direction='left'  vertical visible>
		  		<Menu.Item>
		  			<Card
					    image='/portfolio/img/Profile-white-bg.png'
					    header='Tushar Kale'
					    meta='Software Engineer'
					    description=''
					  />
		  		</Menu.Item>
		        <Menu.Item as='a'>PORTFOLIO</Menu.Item>
		        <Menu.Item as='a'>CONTACT</Menu.Item>
		        <Menu.Item as='a'>MY CV</Menu.Item>
		        <Menu.Item as='a'>
		        		GET IN TOUCH
		        </Menu.Item>
		    </Sidebar>
        )
    }
}

export default ComponentSidebarMenu