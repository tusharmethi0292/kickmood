import React, { Component } from "react";
import { Link } from "react-router-dom";
// import logo from ;

class Mood extends React.Component {
  
  render() {
     
    return (

       <div className = "Mood" style= {{display :"inline-block"}}>  
    
    <div className="happy">

      <Link
        to="/happy"

      >
        <img src={require('../../assets/happy.png')} alt="be happy always" height="100px" width="100px"/>
      </Link>

    </div>
  

 <div className="cool">

      <Link
        to="/cool"

      >
        <img src={require('../../assets/cool.png')} alt="be cool" height="50px" width="50px"/>
      </Link>

    </div>


     <div className="helping">

      <Link
        to="/helping"

      >
        <img src={require('../../assets/helping.png')} alt="get ready to help" height="50px" width="50px"/>
      </Link>

    </div>
  


    <div className="hopeful">

      <Link
        to="/hopeful"

      >
        <img src={require('../../assets/hopeful.png')} alt="Let's hope" height="50px" width="50px"/>
      </Link>

    </div>
  


    <div className="love">

      <Link
        to="/love"

      >
        <img src={require('../../assets/love.png')} alt="the best thing" height="50px" width="50px"/>
      </Link>

    </div>
  
    <div className="motivation">

      <Link
        to="/motivation"

      >
        <img src={require('../../assets/motivated.png')} alt="I can" height="50px" width="50px"/>
      </Link>

    </div>
  
    <div className="surprised">

      <Link
        to="/surprised"

      >
        <img src={require('../../assets/surprised.png')} alt="Awwww...." height="50px" width="50px"/>
      </Link>

    </div>

    <div className="thinking">

      <Link
        to="/thinking"

      >
        <img src={require('../../assets/thinking.png')} alt="Hmmmmm" height="50px" width="50px"/>
      </Link>

    </div>
   
     <div className="sporty">

      <Link
        to="/sporty"

      >
        <img src={require('../../assets/sporty.png')} alt="feel the heat" height="50px" width="50px"/>
      </Link>

    </div>

    <div className="spiritual">

      <Link
        to="/spiritual"

      >
        <img src={require('../../assets/spiritual.png')} alt="the highest level" height="50px" width="50px"/>
      </Link>

    </div>

    </div>

    );
  }
};




class Login extends React.Component {
  render() {
    return (
      <div style={{ height: "25vh" }
      } className="container valign-wrapper" >
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              What do you feel now !
            </h4>

            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div >
    )
  }

};
class Landing extends Component {
  render() {
    return (
      <React.Fragment>
        <Login></Login>
        <Mood></Mood>
      </React.Fragment>
    );



  }
}


export default Landing;