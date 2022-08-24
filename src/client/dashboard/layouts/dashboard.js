
import { render } from 'react-dom';

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Image, Header, Icon } from 'semantic-ui-react'


import ComponentDashboardIntro from '../components/home/Intro'
import ComponentDashboardContact from '../components/home/Contact'
import ComponentDashboardPortfolio from '../components/home/Portfolio'

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>HOME</div>,
    main: () => <ComponentDashboardIntro />
  },
  {
    path: '/portfolio',
    sidebar: () => <div>PORTFOLIO</div>,
    main: () => <ComponentDashboardPortfolio />
  },
  {
    path: '/contact',
    sidebar: () => <div>CONTACT</div>,
    main: () => <ComponentDashboardContact />
  },
  {
    path: '/getintouch',
    sidebar: () => <div>GET IN TOUCH</div>,
    main: () => <h2> GET IN TOUCH !!</h2>
  }
]

const current_route = window.location.pathname

const SidebarNavigation = () => (
    <Router>
        <div className="ui grid"> 
            <div className="three wide column"> 
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
                                <Link to="/"><h2>HOME</h2></Link>
                            </div>
                        </div>
                        <div role="listitem" className="item">
                            <i aria-hidden="true" className="angle right large icon middle aligned"></i>
                            <div className="content">
                                <Link to="/portfolio"><h2>PORTFOLIO</h2></Link>
                            </div>
                        </div>
                        <div role="listitem" className="item">
                            <i aria-hidden="true" className="angle right large icon middle aligned"></i>
                            <div className="content">
                                <a href={ process.env.PUBLIC_URL +"/portfolio/pdf/TusharKale.pdf" } target="_blank"> <h2>MY CV</h2></a>
                            </div>
                        </div>
                        <div role="listitem" className="item">
                            <i aria-hidden="true" className="angle right large icon middle aligned"></i>
                            <div className="content">
                                <Link to="/contact"><h2>CONTACT</h2></Link>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="thirteen wide column">
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                ))}
            </div>
        </div>
  </Router>
)

export default SidebarNavigation

render(<SidebarNavigation />, document.getElementById('root'));
