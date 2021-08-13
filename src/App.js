import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import React from 'react';
import MenuBar from './components/MenuBar'
import Footer from './components/Footer';
 
import './App.css';
import 'antd/dist/antd.css'
 
const { Content } = Layout
 
const App = () => {
 return (
   <Router>
       <Layout>
         <MenuBar />
         <Content className='site-layout' style={{ padding: '0 50px', marginTop: 64, minHeight: '100vh' }}>
           <h1 className="App-Header">Welcome to Chris's Garage</h1>
           </Content>
       </Layout>
   </Router>
 );
}
 
export default App