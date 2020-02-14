import React from 'react';
import './Calendar.scss';

class Calendar extends React.Component {
    constructor(props){
        super(props);
      
    }



    render(){
        return (
            <div className="CalendarContainer">
                {/*  @todo:alice calenddrier va devenir une modale */}
                <button className="btn calendar">
                    calendrier <i className="icon-calendar"></i>
                </button>
            </div>
        );
    }
}

export default Calendar;