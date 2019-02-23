import React, { Component } from 'react';
//import UnderConstructionComponent from '../src/components/UnderConstructionComponent/UnderConstriuctionComponent'
import './App.css';
import {Layout,Drawer,Navigation,Content,Header} from 'react-mdl'
import Main from './components/Main'
import {Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout fixedHeader>
          <Header title="rajakumar.me" className="header"/>
          <Drawer title = "Menu">
            <Navigation>
              <Link to = '/' >🏡 Home</Link>
              <Link to = '/' >⏲ Timeline</Link>
              <Link to = '/' >🚀 Projects</Link>
              <Link to = '/' >📄 Resume</Link>
              <Link to = '/' >📸 ClickZ</Link>
            </Navigation>
          </Drawer>
          <Content>
            <Main/>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
