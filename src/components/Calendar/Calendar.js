import React from "react";
import "./Calendar.scss";
import axios from 'axios';
class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openFav: false,
      tabDate : [],
      mouth: false,
      date: "Juillet - Aout 2024 ",
      listDates : [],
        clicked: null // item clicked for save value from calendar
    };
    this.onSearching = this.onSearching.bind(this);
  }


  onSearching() {
    this.setState(prevState =>({
      openFav: !prevState.openFav
    }));
  }


  getAffluence = (id) => {

    axios.get('http://vps791823.ovh.net/api/dates/' + (id - 25))
        .then((response) => {
          let affluence = response.data.totalAffluenceJournalier;
          if(affluence > 350000) {
            document.getElementById(id).classList.add('icon-level-red');
            document.getElementById(id).addEventListener('click', () => {
                this.setState({clicked: response.data.id + 25})
            })
          } else if (affluence > 260000) {
            document.getElementById(id).classList.add('icon-level-yellow')
              document.getElementById(id).addEventListener('click', () => {
                  this.setState({clicked: response.data.id + 25})
              })
          } else {
            document.getElementById(id).classList.add('icon-level-green-2')
              document.getElementById(id).addEventListener('click', () => {
                  this.setState({clicked: response.data.id + 25})
              })
          }
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
  };

  getAffluenceSecond = (id) => {
    axios.get('http://vps791823.ovh.net/api/dates/' + (id))
    .then((response) => {
      let affluence = response.data.totalAffluenceJournalier;
      if(affluence > 350000) {
        document.getElementById(id).classList.add('icon-level-red');
        document.getElementById(id).addEventListener('click', () => {
          this.setState({clicked: response.data.id + 25})
          
        })
      } else if (affluence > 260000) {
        document.getElementById(id).classList.add('icon-level-yellow')
        document.getElementById(id).addEventListener('click', () => {
          this.setState({clicked: response.data.id + 25})
          
        })
      } else {
        document.getElementById(id).classList.add('icon-level-green-2')
        document.getElementById(id).addEventListener('click', () => {
          this.setState({clicked: response.data.id + 25})
          
        })
      }
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
  };
    
  generateDays = () => {
    for (let i = 26; i <= 31; i++) {
      this.state.listDates.push(<li><div>{i}<i id={i} className="round-affulence" >{this.getAffluence(i)}</i></div></li>)
    }
      for (let i = 1; i <= 11; i++) {
          this.state.listDates.push(<li><div>{i}<i id={i} className="round-affulence">{this.getAffluenceSecond(i)}</i></div></li>)
      }
    return this.state.listDates
  };



  
  render() {
    return (
      <div className="CalendarContainer">
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
              <ul className="days" id="days">
                {this.generateDays()}
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
export default Calendar;