
    import React from "react";
    import '../molecules/Opheader.css'
    import logo from './images/logo.png';

    class Opheader extends React.Component{
      
      constructor(props) {
        super(props);
       
      }
      render() {
        
       
        return (
          <div className="navbar-container">
            <div className="navbar">
            {/*
              <div className="logo-section hoverable"> </div>
            */}
              <div className="searchbar-section" >
              
              <img src={logo} alt="logo" title="logo" class="navigation__logo"/>
              </div>
            {/*  <div className="actions-section">
                <Opbutton label="Login In" primary={true} />
                <Opbutton label="Sign Up" />
              </div>
            */}
            </div>
          </div>
        );
        }   
    }
    export default Opheader;