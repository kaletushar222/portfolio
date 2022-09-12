import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'

class ComponentDashboardIntro extends Component {
	render() {
        return(
        	<div className="full_height">
    		   <div className="home-intro">
                    <div className="home-intro-container">
                        <div className="overlay" />
                        <Image className="home-intro-image" alt="Tushar kale intro image" src={ process.env.PUBLIC_URL+"/portfolio/img/waterfall.jpg" } />
                    </div>
                    <br/><br/>
                    <div className="home-intro-content">
                        <h1><strong className='home-intro-heading'>Hii , I'm Tushar,</strong></h1>
                        <h2 className='home-intro-description'>A software engineer specialized in both </h2>
                        <h2 className='home-intro-description-2'><strong className="custom_yellow">front-end</strong> and <strong className="custom_blue">back-end</strong></h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default ComponentDashboardIntro