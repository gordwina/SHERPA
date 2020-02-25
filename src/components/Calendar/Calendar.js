import React from "react";
import "./Calendar.scss";
import next_mouth from '../../asset/mois--change.svg'
import previous_mouth from '../../asset/mois-previous.svg'
import axios from 'axios';
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

  componentDidMount() {
    axios.get('/user?ID=12345')
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
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
                <li><div>26 <span className="round-affulence"></span></div></li>
                <li><div>27</div></li>
                <li><div>28</div></li>
                <li><div>29</div></li>
                <li><div>30</div></li>
                <li><div>31</div></li>
                <li><div className={"special"}>1</div></li>
                <li><div className={"special"}>2</div></li>
                <li><div className={"special"}>3</div></li>
                <li><div className={"special"}>4</div></li>
                <li><div className={"special"}>5</div></li>
                <li><div className={"special"}>6</div></li>
                <li><div className={"special"}>7</div></li>
                <li><div className={"special"}>8</div></li>
                <li><div className={"special"}>9</div></li>
                <li><div className={"special"}>10</div></li>
                <li><div className={"special"}>11</div></li>
              </ul>

            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Calendar;
