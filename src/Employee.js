import React from 'react';
import './employee.css'

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
//Temporarily store data here
const employees = [
    {
      //"category": "News",
      "name": "Juan Duran",
      "lastLogged": date
      //"image": "https://source.unsplash.com/user/erondu/600x400"
    },
    {
        //"category": "News",
        "name": "Tyler Driver",
        "lastLogged": date,
        //"image": "https://source.unsplash.com/user/erondu/600x400"
    },
    {
      //"category": "Travel",
      "name": "CJ Ellis",
      "lastLogged": date,
      //"image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    },
    {
      //"category": "Development",
      "name": "Scotty Fulton",
      "lastLogged": date,
      //"image": "https://source.unsplash.com/user/ilyapavlov/600x400"
    },
    {
      //"category": "Travel",
      "name": "Don Newman",
      "lastLogged": date,
      //"image": "https://source.unsplash.com/user/_vickyreyes/600x400"
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
      const { image, category } = this.props;
      var style = { 
          backgroundImage: 'url(' + image + ')',
      };
      return (
        <header style={style} className="card-header">
          <h4 className="card-header--title">{category}</h4>
        </header>
      )
    }
  }
  
  
  class CardBody extends React.Component {
    render() {
      return (
        <div className="card-body">
          <p className="date">March 20 2015</p>
          
          <h2>{this.props.name}</h2>
          
          <p className="body-content">{this.props.lastLogged}</p>
          
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
          <CardBody name={this.props.details.name} lastLogged={this.props.details.lastLogged}/>
        </article>
      )
    }
  }












export {Employee, Main};