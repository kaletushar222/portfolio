import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'

class ComponentDashboardContact extends Component {
  
	render() {
        return(
        	<div className="full_height ">
            <br/><br/>
            <div className="ui grid">
                <div className="one wide column">
                </div>
                <div className="ui segment twelve wide column">
                    <h1><strong>Contact Me</strong></h1>
                    <div className="ui list">
                        <div className="item">
                            <img className="ui avatar image" src="/portfolio/img/google.png" />
                            <div className="content">
                               <b>Gmail</b>
                                <div className="description">
                                    <a>kaletushar222@gmail.com </a>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="item">
                            <img className="ui avatar image" src="/portfolio/img/linkedin.png" />
                            <div className="content">
                                <b>LinkedIn</b>
                                <div className="description">
                                  <a href="https://www.linkedin.com/in/tusharkale22/" target="_blank">https://www.linkedin.com/in/tusharkale22</a>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="item">
                            <img className="ui avatar image" src="/portfolio/img/github.png" />
                            <div className="content">
                                <b>Github</b>
                                <div className="description">
                                  <a href="https://github.com/kaletushar222" target="_blank">https://github.com/kaletushar222</a>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="item">
                            <img className="ui avatar image" src="/portfolio/img/fb.png" />
                            <div className="content">
                                <b>Facebook</b>
                                <div className="description">
                                  <a href="https://www.facebook.com/tushar.kale2" target="_blank">https://www.facebook.com/tushar.kale2</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            </div>
        )
    }
}

export default ComponentDashboardContact