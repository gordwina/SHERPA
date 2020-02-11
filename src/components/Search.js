import React from 'react';

//css

import '../style/colors.scss';
import '../style/font.scss';
import './search.scss';

import SearchLeft from "./searchLeft";
import Deepsearch from "./Deepsearch";
import Gmap from "./gmap";

class Search extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="search">
                <SearchLeft></SearchLeft>
                <div className="search__left">
                    <h1>Recherche  test : </h1>
                    <Deepsearch>
                    </Deepsearch>
                </div>
                <div className="search__right">
                    <div className="right right--top">
                        <Gmap usingClass={"googleSmall"}> </Gmap>

                    </div>

                    <div className="right right--bottom">

                    </div>
                </div>
            </div>
        )
    }
}
export default Search;
