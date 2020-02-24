import React from "react";
import "./Calendar.scss";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openFav: false,
      tabDate : []
    };
    this.onSearching = this.onSearching.bind(this);
  }


  onSearching() {
    this.setState({
      openFav: true
    });
  }

  generateDay = (number, start) => {
    for (let i = start; i < number + start; i++) {
      this.state.tabDate.push(  <li key={i+"-days"}>{i}</li>)
    }
    for (let i = 1; i < 12; i++) {
      this.state.tabDate.push(  <li key={i+"-days"}>{i}</li>)
    }
    return this.state.tabDate;
  };

  render() {
    return (
      <div className="CalendarContainer">
        {/*  @todo:alice calenddrier va devenir une modale */}
        <button className="btn calendar" onClick={this.onSearching}>
          calendrier <i className="icon-calendar"></i>
        </button>
        {this.state.openFav === true ? (
          <div className="dateWrapper">

            <div className="day--container">
              <ul className="weekdays">
                <li>Ven</li>
                <li>Sam</li>
                <li>Dim</li>
                <li>Lun</li>
                <li>Mar</li>
                <li>Mer</li>
                <li>Jeu</li>
              </ul>
              <ul className="days">
                {this.generateDay(6, 26)}
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Calendar;
