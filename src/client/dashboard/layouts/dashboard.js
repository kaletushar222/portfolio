
import { render } from 'react-dom';

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Image, Header, Icon } from 'semantic-ui-react'


import ComponentHomeContact from '../components/contact/Contact'
const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>HOME</div>,
    main: () => <h2><ComponentHomeContact /></h2>
  },
  {
    path: '/portfolio',
    sidebar: () => <div>PORTFOLIO</div>,
    main: () => <h2>PORTFOLIO!!</h2>
  },
  {
    path: '/mycv',
    sidebar: () => <div>MY CV</div>,
    main: () => <h2>MY CV !!</h2>
  },
  {
    path: '/contact',
    sidebar: () => <div>CONTACT</div>,
    main: () => <h2>CONTACT !!</h2>
  },
  {
    path: '/getintouch',
    sidebar: () => <div>GET IN TOUCH</div>,
    main: () => <h2> GET IN TOUCH !!</h2>
  }
]

const SidebarExample = () => (
    <Router>
        <div className="ui grid"> 
            <div className="three wide column">
                <br/>
                {/*<Card
                                    image='/portfolio/img/Profile-white-bg.png'
                                    header='Tushar Kale'
                                    meta='Software Engineer'
                                    description=''
                                  />*/}
                <div className="ui grid" style={{ marginLeft: '1%'}}> 
                    <div className="sixteen wide column">
                        <Image src='/portfolio/img/Profile.jpeg' size='medium' circular/>
                    </div>
                    <br/>
                    <div>
                        <Header as='h2'>
                            <Icon name='code' />
                            <Header.Content>
                              Tushar Kale
                              <Header.Subheader>Software Engineer</Header.Subheader>
                            </Header.Content>
                        </Header>
                    </div>
                </div>


                <ul className="ui divided relaxed list">
                    <br/>
                    <div role="listitem" className="item">
                        <i aria-hidden="true" className="github large icon middle aligned"></i>
                        <div className="content">
                            <Link to="/"><h2>HOME</h2></Link>
                        </div>
                    </div>
                    <div role="listitem" className="item">
                        <i aria-hidden="true" className="github large icon middle aligned"></i>
                        <div className="content">
                            <Link to="/portfolio"><h2>PORTFOLIO</h2></Link>
                        </div>
                    </div>
                    <div role="listitem" className="item">
                        <i aria-hidden="true" className="github large icon middle aligned"></i>
                        <div className="content">
                            <Link to="/mycv"><h2>MY CV</h2></Link>
                        </div>
                    </div>
                    <div role="listitem" className="item">
                        <i aria-hidden="true" className="github large icon middle aligned"></i>
                        <div className="content">
                            <Link to="/contact"><h2>CONTACT</h2></Link>
                        </div>
                    </div>
                </ul>
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

export default SidebarExample

render(<SidebarExample />, document.getElementById('root'));
