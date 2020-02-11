import React from 'react'

//CSS
import './searchLeft.scss';
import retour from "../../asset/return.svg";
import affluenceLeft from "../../asset/affluence-left.svg";
import search from "../../asset/search.svg";

class SearchLeft extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="search-bar-left">
                <div className="search-bar-item">
                    <img src={retour} alt="retour"/>
                </div>
                <div className="search-bar-item search-bar-item-active">
                    <img src={affluenceLeft} alt="affluence-left"/>
                </div>
                <div className="search-bar-item">
                    <img src={search} alt="search"/>
                </div>

            </div>
        )
    }
}

export default SearchLeft;