import React, {Component} from 'react';
import GlobalStyles from "Components/GlobalStyles";
import Router from "Components/Router";
import Footer from "Components/Footer";

class App extends Component{
  render(){
    return(
      <>
      <GlobalStyles/>
      <Router/>
      <Footer/>
      </>
    );
  }
}
export default App;
