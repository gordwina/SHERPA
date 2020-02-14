import React from 'react';
import './Calendar.scss';

class Calendar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            openFav : false
        }
        this.onSearching = this.onSearching.bind(this)
    }

    onSearching(){
        this.setState({ 
         openFav : true
     
        })
    }

    render(){
        return (
            <div className="CalendarContainer">
                {/*  @todo:alice calenddrier va devenir une modale */}
                <button className="btn calendar" onClick={this.onSearching}>
                    calendrier <i className="icon-calendar"></i>
                </button>
                {this.state.openFav === true ? 
                    <div className="dateWrapper">
                        <div className="day">
                            <p> Ven - Sam - Dim - Lun - Mar - Mer - Jeu </p>  
                            <p>  26  -  27 - 28 -  29 -  30 -  31 -  1 </p>  
                            <p>  2     - 3 -  4    -5 -   6 -   7 -  8  </p> 
                            <p>  9 - 10 - 11   </p> 
                        </div>

                    </div>
                : null}

            </div>
        );
    }
}

export default Calendar;