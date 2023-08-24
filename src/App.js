// import logo from './logo.svg';
import './App.css';


import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";



 const App =(props)=>{
   const pageSize = 5;
   const apikey = process.env.REACT_APP_NEWS_API
  // const apikey = "d468ecf5b2e943949ff3ccabd1376f36"
   const [progress,setProgress] = useState(0)
  
  // state={
  //   progress:0
  // }
  // setProgress=(progress)=>{
  //    this.setState({progress:this.progress})
  // }
   

 
    return (
      <Router>
      <div>
      
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946' 
        progress={progress}
        
      />
        <Routes>
        
          <Route exact path="/"    element={<News       setProgress={setProgress}   apikey = {apikey} key="science" pageSize={pageSize} country="in" category='science'/>}/>
          <Route exact path="business"  element={<News   setProgress={setProgress}  apikey = {apikey} key="business" pageSize={pageSize} country="in" category='business'/>}/>
          <Route exact path="entertainment"element={<News setProgress={setProgress} apikey = {apikey} key="entertainment" pageSize={pageSize} country="in" category='entertainment'/>}/>
          <Route exact path="general"     element={<News   setProgress={setProgress}apikey = {apikey} key="general"pageSize={5} country="in" category='general'/>}/>
          <Route exact path="health"     element={<News   setProgress={setProgress} apikey = {apikey} key="health"pageSize={5} country="in" category='health'/>  }/>
          <Route exact path="science"     element={<News   setProgress={setProgress}apikey = {apikey} key="science" country="in" category='science'/>}/>
          <Route exact path="sports"      element={<News   setProgress={setProgress}apikey = {apikey} key="sports" country="in" category='sports'/> }/>
          <Route exact path="technology"  element={<News   setProgress={setProgress}apikey = {apikey} key="technology" country="in" category='technology'/>   }/>
          
            
          
        </Routes>
       
        
       
        
      </div>
      </Router>
    )
    
}
export default App




