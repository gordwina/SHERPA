import React from 'react';

//css
import '../../style/colors.scss';
import '../../style/font.scss';
import './search.scss';

import SearchLeft from "../searchLeft/searchLeft";
import Deepsearch from "../Deepsearch/Deepsearch";
import Gmap from "../gmap/gmap";
import {ResponsiveStream} from "@nivo/stream";
import specData from "../../data/specData";
import specConfig from "../../data/config/specConfig";

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="search">
                <SearchLeft></SearchLeft>
                <div className="search__left">
                    <h1>Recherche </h1>
                    <Deepsearch>
                    </Deepsearch>
                </div>
                <div className="search__right">
                    <div className="right right--top">
                        <Gmap usingClass={"googleSmall"}> </Gmap>
                    </div>

                    <div className="right right--bottom">
                        <ResponsiveStream
                            data={specData}
                            keys={specConfig.keys}
                            margin={specConfig.margin}
                            axisTop={null}
                            axisRight={null}
                            axisBottom={specConfig.axisBottom}
                            axisLeft={specConfig.axisLeft}
                            offsetType={specConfig.offsetType}
                            colors={specConfig.colors}
                            fillOpacity={specConfig.fillOpacity}
                            borderColor={specConfig.borderColor}
                            defs={specConfig.defs}

                            dotSize={specConfig.dotSize}
                            dotColor={specConfig.dotColor}
                            dotBorderWidth={specConfig.botBorderWidth}
                            dotBorderColor={specConfig.dotBorderColor}
                            animate={specConfig.animate}
                            motionStiffness={specConfig.motionStiffness}
                            motionDamping={specConfig.motionDamping}
                            legends={specConfig.legends}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
export default Search;
