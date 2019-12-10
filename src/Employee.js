import React from 'react';
import './employee.css'
import e1 from "./images/tylerdriver.jpg";
import e2 from "./images/juanduran.jpg";
import e3 from "./images/cjellis.jpg";
import e4 from "./images/scottyfulton.jpg";
import e5 from "./images/donnewman.jpg";


class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isSafe: true};
        this.state = {isDeclared: false};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
        this.setState(state => ({
            isSafe: !state.isSafe
        }));
        readFile();
    }
  
    render() {
        return (
            <>  
                <p className="name">
                    {this.props.name}
                </p>
                <button className="safetybutton" onClick={this.handleClick}>
                    {this.state.isSafe ? 'Safe' : 'Unsafe'}
                </button>
                <p className="timeStamp">
                    Last logged time: {this.props.date}
                </p>
            </>
        );
    }
}
  
function readFile() {

    let date = (new Date()).toUTCString()+'-6';
    console.log(date);

return 
}

const date = (new Date()).toUTCString()+'-6';
const location = "Classroom 1";
//Temporarily store data here
const employees = [
    {
        "name": "Tyler Driver",
        "location": location,
        "lastLogged": date,
        "image": e1
    },
    {
      "name": "Juan Duran",
      "location": location,
      "lastLogged": date,
      "image": e2
    },
    {
      "name": "CJ Ellis",
      "location": location,
      "lastLogged": date,
      "image": e3
    },
    {
      "name": "Scotty Fulton",
      "location": location,
      "lastLogged": date,
      "image": e4
    },
    {
      "name": "Don Newman",
      "location": location,
      "lastLogged": date,
      "image": e5
    }
]
  
  
  // Start App
  
class Main extends React.Component { 
    constructor() {
      super();
      
      this.state = {
        posts: {}
      }
    }
    componentWillMount() {
      this.setState({
        posts: employees
      });
    }
   
  
    render() {
        return ( 
            <div className="app-card-list" id="app-card-list">
                {
                    Object
                    .keys(this.state.posts)
                    .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
                }
            </div>
        )
    }
}
  
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isSafe: true};
        this.state = {isDeclared: false};
        this.state = {status: "Undeclared"}
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
        if (this.state.isDeclared){
            this.setState(state => ({
                isDeclared: true
            }));
            
        }
        this.setState(state => ({
            isSafe: !state.isSafe,
            status: state.isSafe ? 'Safe' : 'At Risk'
        }));
    }
  
    render() {
        return (
            <button className="safetyButton" onClick={this.handleClick}>
                    {this.state.status}
            </button>
        );
    }
}
  
  
  class CardHeader extends React.Component {
    render() {
      const { image} = this.props;
      return (
        <img src={image} className="headshot" />
      )
    }
  }
  
  
  class CardBody extends React.Component {
    render() {
      return (
        <div className="card-body">
          
        <h2>{this.props.name}</h2>
          
        <p className="body-content">
            Last Recorded Location: {this.props.location}
            <br/>
            {this.props.lastLogged}
        </p>
          
          <Button />
        </div>
      )
    }
  }
  
  
  class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader category={this.props.details.category} image={this.props.details.image}/>
          <CardBody name={this.props.details.name} lastLogged={this.props.details.lastLogged} location={this.props.details.location}/>
        </article>
      )
    }
  }












export {Employee, Main};