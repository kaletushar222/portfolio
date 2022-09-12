import React, { Component } from 'react';

class ComponentDashboardContact extends Component {
  
	render() {
        return(
        	<div className="full_height contact">
            <br/><br/>
            <div>
                <h1><strong>Contact Me</strong></h1>
                <br/>
                <div className="ui segment">
                    <div className="ui list">
                        <div className="item">
                            <img className="ui avatar image" src={ process.env.PUBLIC_URL+"/portfolio/img/google.png" } alt="google" />
                            <div className="content">
                               <b>Gmail</b>
                                <div className="description">
                                    <a href="#">kaletushar222@gmail.com </a>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="item">
                            <img className="ui avatar image" src={ process.env.PUBLIC_URL+"/portfolio/img/linkedin.png"} alt="linkedin" />
                            <div className="content">
                                <b>LinkedIn</b>
                                <div className="description">
                                  <a href="https://www.linkedin.com/in/tusharkale22/" rel="noopener noreferrer" target="_blank">https://www.linkedin.com/in/tusharkale22</a>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="item">
                            <img className="ui avatar image" src={ process.env.PUBLIC_URL+"/portfolio/img/github.png" } alt="github"/>
                            <div className="content">
                                <b>Github</b>
                                <div className="description">
                                  <a href="https://github.com/kaletushar222" target="_blank" rel="noopener noreferrer">https://github.com/kaletushar222</a>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="item">
                            <img className="ui avatar image" src={ process.env.PUBLIC_URL+"/portfolio/img/fb.png" } alt="facebook" />
                            <div className="content">
                                <b>Facebook</b>
                                <div className="description">
                                  <a href="https://www.facebook.com/tushar.kale2" rel="noopener noreferrer" target="_blank">https://www.facebook.com/tushar.kale2</a>
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