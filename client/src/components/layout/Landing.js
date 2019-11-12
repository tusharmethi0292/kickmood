import React, { Component } from "react";
import { Link } from "react-router-dom";
// import logo from ;
class Moodhappy extends React.Component {
  render() {
    return <div className="happy">

      <Link
        to="/happy"

      >
        <img src={require('../../assets/happy.png')} alt="be happy" height="50px" width="50px"/>
      </Link>

    </div>
  }
};

class Moodcool extends React.Component {
  render() {
    return <div className="cool">

      <Link
        to="/cool"

      >
        <img src={require('../../assets/cool.png')} alt="be happy" height="50px" width="50px"/>
      </Link>

    </div>
  }
};

class Moodhelping extends React.Component {
  render() {
    return <div className="helping">

      <Link
        to="/helping"

      >
        <img src={require('../../assets/helping.png')} alt="be happy" height="50px" width="50px"/>
      </Link>

    </div>
  }
};


class Moodhopeful extends React.Component {
  render() {
    return <div className="cool">

      <Link
        to="/cool"

      >
        <img src={require('../../assets/hopeful.png')} alt="be happy" height="50px" width="50px"/>
      </Link>

    </div>
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
        <Moodhappy></Moodhappy>
        <Moodcool></Moodcool>
      </React.Fragment>
    );



  }
}


export default Landing;