
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Icon } from 'semantic-ui-react';

class ComponentMobileNavigation extends Component {
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
        this.openNav()
    }

    openNav =()=> {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
    }
	render() {
        return(
			<div class="topnav">
                <a href="#home" class="active">Tushar Kale</a>
                <div id="myLinks">
                    <Link id="home-link" onClick={()=>this.selectTab('/')} className={ this.state.currentPage !=='/' && 'link-color'} to="/">HOME</Link>
                    <Link id="portfolio-link" onClick={()=>this.selectTab('/portfolio')} className={ this.state.currentPage !=='/portfolio' && 'link-color'} to="/portfolio">PORTFOLIO</Link>
                    <Link id="contact-link" onClick={()=>this.selectTab('/contact')} className={ this.state.currentPage !=='/contact' && 'link-color'} to="/contact">CONTACT</Link>
                </div>
                <a href="javascript:void(0);" className="icon" onClick={this.openNav}>
                    <Icon disabled name='unordered list' />
                </a>
            </div>
        )
    }
}

export default ComponentMobileNavigation
