import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Header, Icon, Image } from 'semantic-ui-react';

class ComponentSidebar extends Component {
	 render() {
        return(
			<div className='sidebar' style={{height : "100vh", position: "fixed"}}>
                <br/>
                <div className="ui grid" style={{ marginLeft: '1%'}}> 
                    <div className="sixteen wide column">
                        <Image style={{width : "90%"}} src={ process.env.PUBLIC_URL+'/portfolio/img/Profile.jpeg' } alt="home" size='medium' circular/>
                    </div>
                    <br/>
                    <div>
                        <Header as='h2' className="font-color-white">
                            <Icon name='code' />
                                <Header.Content>
                                    Tushar Kale
                                    <Header.Subheader className="font-color-white">Software Engineer</Header.Subheader>
                                </Header.Content>
                        </Header>
                    </div>
                </div>


                <ul className="ui divided relaxed list">
                    <br/>

                    <div role="listitem" className="item">
                        <i aria-hidden="true" className="angle right large icon middle aligned"></i>
                        <div className="content">
                            <Link id="home-link" className='link-color' to="/"><h2>HOME</h2></Link>
                        </div>
                    </div>
                    <div role="listitem" className="item">
                        <i aria-hidden="true" className="angle right large icon middle aligned"></i>
                        <div className="content">
                            <Link id="portfolio-link" className='link-color' to="/portfolio"><h2>PORTFOLIO</h2></Link>
                        </div>
                    </div>
                    <div role="listitem" className="item">
                        <i aria-hidden="true" className="angle right large icon middle aligned"></i>
                        <div className="content">
                            <a id="cv-link" className='link-color' href={ process.env.PUBLIC_URL +"/portfolio/pdf/TusharKale.pdf" } target="_blank"> <h2>MY CV</h2></a>
                        </div>
                    </div>
                    <div role="listitem" className="item">
                        <i aria-hidden="true" className="angle right large icon middle aligned"></i>
                        <div className="content">
                            <Link id="contact-link" className='link-color' to="/contact"><h2>CONTACT</h2></Link>
                        </div>
                    </div>
                </ul>
            </div>
		    
        )
    }
}

export default ComponentSidebar
