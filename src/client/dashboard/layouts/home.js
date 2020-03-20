import React, { Component } from 'react';
import { Segment, Sidebar } from 'semantic-ui-react'

import ComponentSidebarMenu from '../../templates/SidebarMenu'
import ComponentHomeIntro from '../components/home/Intro'

class DashboardLayoutHome extends Component {
	render() {
	    return (
	    	<Sidebar.Pushable as={Segment}>
	    		<ComponentSidebarMenu/>
			    <Sidebar.Pusher>
			        <ComponentHomeIntro/>
			    </Sidebar.Pusher>
			</Sidebar.Pushable>
	    )
	}
}

export default DashboardLayoutHome;