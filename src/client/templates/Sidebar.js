import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Header, Icon, Image } from 'semantic-ui-react';

class ComponentSidebar extends Component {
    constructor(){
        super()
        this.state = {
            currentPage : window.location.pathname
        }
    }

    selectTab = (current_page) =>{
        this.setState({
            currentPage : current_page
        })
    }
	render() {
        return(
			<div className='sidebar' style={{height : "100vh", position: "fixed"}}>
                <div className='sidebar-content'>
                    <br/>
                    <div className="ui grid" style={{ marginLeft: '1%'}}> 
                        <div className="sixteen wide column">
                            <Image style={{width : "80%"}} src={ process.env.PUBLIC_URL+'/portfolio/img/Profile.jpeg' } alt="home" size='medium' circular/>
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
                                <Link id="home-link" onClick={()=>this.selectTab('/')} className={ this.state.currentPage !=='/' && 'link-color'} to="/"><h2>HOME</h2></Link>
                            </div>
                        </div>
                        <div role="listitem" className="item">
                            <i aria-hidden="true" className="angle right large icon middle aligned"></i>
                            <div className="content">
                                <Link id="portfolio-link" onClick={()=>this.selectTab('/portfolio')} className={ this.state.currentPage !=='/portfolio' && 'link-color'} to="/portfolio"><h2>PORTFOLIO</h2></Link>
                            </div>
                        </div>
                        {/* 
                        <div role="listitem" className="item">
                            <i aria-hidden="true" className="angle right large icon middle aligned"></i>
                            <div className="content">
                                <a id="cv-link" onClick={()=>this.selectTab('/cv')} className={ this.state.currentPage !=='/cv' && 'link-color'} href={ process.env.PUBLIC_URL +"/portfolio/pdf/TusharKale.pdf" } target="_blank"> <h2>MY CV</h2></a>
                            </div>
                        </div>
                        */}
                        <div role="listitem" className="item">
                            <i aria-hidden="true" className="angle right large icon middle aligned"></i>
                            <div className="content">
                                <Link id="contact-link" onClick={()=>this.selectTab('/contact')} className={ this.state.currentPage !=='/contact' && 'link-color'} to="/contact"><h2>CONTACT</h2></Link>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
		    
        )
    }
}

export default ComponentSidebar
