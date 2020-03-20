import React, { Component } from 'react';
import { Menu, Segment, Sidebar, Card } from 'semantic-ui-react'
import ComponentHomeContent from './Content'

class ComponentHomeSideBar extends Component {
	 render() {

        return(
        	<div>
			  	<Sidebar.Pushable as={Segment}>
			  	<Sidebar as={Menu} animation='uncover' direction='left' inverted vertical visible>
			  		<Menu.Item>
			  			<Card
						    image='/portfolio/img/img1.jpeg'
						    header='Elliot Baker'
						    meta='Friend'
						    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
						    extra="{extra}"
						  />
			  		</Menu.Item>
			        <Menu.Item as='a' header>Tushar Kale</Menu.Item>
			        <Menu.Item as='a'>Share on Social</Menu.Item>
			        <Menu.Item as='a'>Share by E-mail</Menu.Item>
			        <Menu.Item as='a'>Edit Permissions</Menu.Item>
			        <Menu.Item as='a'>Delete Permanently</Menu.Item>
			    </Sidebar>

			      <Sidebar.Pusher>
			        <Segment basic style={{height : "100%"}}>
			         	<ComponentHomeContent/>
			        </Segment>
			      </Sidebar.Pusher>
			    </Sidebar.Pushable>
			</div>
        )
    }
}

export default ComponentHomeSideBar