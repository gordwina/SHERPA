import React from "react";
import "./Calendar.scss";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openFav: false
    };
  }

/*   componentWillMount(){
    document.addEventListener('mousedown', this.handleClick,false);
  };
  componentWinlUbMount(){
    document.removeEventListener('mousedown', this.handleClick,false);
  
  }
handleClick =(e) => { 
  if (this.componentDidUpdate.contains(e.target)){
    return 
  }
} */

  render() {
    return (
      <div className="CalendarContainer">
        <button className="btn calendar" >
          calendrier <i className="icon-calendar"></i>
        </button>
     
          {/*  <div ref={node => this.node} className="dateWrapper" >
            <div className="day"> 
            
            </div>
          </div>
    */}
      </div>
    );
  }
}

export default Calendar;
