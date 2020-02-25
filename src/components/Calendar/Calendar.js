import React from "react";
import "./Calendar.scss";
import next_mouth from '../../asset/mois--change.svg'
import previous_mouth from '../../asset/mois-previous.svg'
class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openFav: false,
      tabDate : [],
      mouth: false,
      date: "Juillet - Aout 2024 "
    };
    this.onSearching = this.onSearching.bind(this);
  }


  onSearching() {
    this.setState({
      openFav: true
    });
  }

  render() {
    return (
      <div className="CalendarContainer">
        {/*  @todo:alice calenddrier va devenir une modale */}
        <button className="btn calendar" id="openCalendar" onClick={this.onSearching}>
          calendrier <i className="icon-calendar"></i>
        </button>
        {this.state.openFav === true ? (
          <div className="dateWrapper">
            <div className="title_jo">
            Jours des Jeux Olympiques
            </div>
            <div className="mouth">
              <span>{this.state.date}</span>
            </div>
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
                <li><span>26</span></li>
                <li><span>27</span></li>
                <li><span>28</span></li>
                <li><span>29</span></li>
                <li><span>30</span></li>
                <li><span>31</span></li>
                <li><span className={"special"}>1</span></li>
                <li><span className={"special"}>2</span></li>
                <li><span className={"special"}>3</span></li>
                <li><span className={"special"}>4</span></li>
                <li><span className={"special"}>5</span></li>
                <li><span className={"special"}>6</span></li>
                <li><span className={"special"}>7</span></li>
                <li><span className={"special"}>8</span></li>
                <li><span className={"special"}>9</span></li>
                <li><span className={"special"}>10</span></li>
                <li><span className={"special"}>11</span></li>
              </ul>

            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Calendar;
