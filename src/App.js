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
              <Link to = '/' ><span role="img">🏡 </span> Home</Link>
              <Link to = '/' ><span role="img">⏲ </span>Timeline</Link>
              <Link to = '/' ><span role="img">🚀 </span>Projects</Link>
              <Link to = '/resume' ><span role="img">📄 </span>Resume</Link>
              <Link to = '/' ><span role="img">📸</span> ClickZ</Link>
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
