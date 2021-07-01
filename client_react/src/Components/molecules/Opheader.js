
    import React from "react";
    import '../molecules/Opheader.css'
    import Opsearchbar from "../atoms/Opsearchbar";
    import Opbutton from "../atoms/Opbutton";
    class Opheader extends React.Component{
      render() {
        return (
          <div className="navbar-container">
            <div className="navbar">
              
              <div className="logo-section hoverable">Opyeung</div>
              <div className="searchbar-section">
                <Opsearchbar searchValue={''} onSearchValueChange={''} />
              </div>
              <div className="actions-section">
                <Opbutton label="Login In" primary={true} />
                <Opbutton label="Sign Up" />
              </div>
            </div>
          </div>
        );
        }   
    }
    export default Opheader;