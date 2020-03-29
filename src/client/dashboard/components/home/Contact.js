import React, { Component } from 'react';
/*import { Image } from 'semantic-ui-react'*/

class ComponentDashboardContact extends Component {
  
	render() {
        return(
        	<div className="full_height">
    		    <h2> Contact me -ANANYA </h2>
                <br/><br/><br/><br/><br/><br/><br/><br/>

                <a className="icon facebook" href="#" target="_blank"></a>
                <div className="home-intro-content">
                    <div className="social-icons">
                        <a className="icon facebook" href="#" target="_blank"><i aria-hidden="true" className="facebook square large icon middle aligned"></i></a>
                        <a className="icon twitter" href="#" target="_blank"><i className="fa fa-twitter"></i></a>
                        <a className="icon youtube" href="#" target="_blank"><i className="fa fa-youtube"></i></a>
                        <a className="icon linkedin" href="#" target="_blank"><i className="fa fa-linkedin"></i></a>
                    </div>
                </div>

                <i aria-hidden="true" className="facebook square large icon middle aligned"></i>
            </div>
        )
    }
}

export default ComponentDashboardContact