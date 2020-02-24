import React from "react";
import "./Deepsearch.scss";
import "../../style/colors.scss";
import "../../style/font.scss";
import "../../style/icon/style.scss";
import FileLink from "../file-link/File-link";

class Deepsearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasSearched: false,
      searching: false,
      searchValue: "",
      searchList: "",
      values: [
        {
          name: "stade de france",
          capacity: 300,
          date: "jeudi",
          chroni :"soirée",
          crowd : "affluence"
        },
        {
          name: "palais royal",
          capacity: 300,
          date: "mardi",
          chroni :"matinée",
          crowd : "affluence"
        },
        {
          name: "teddy",
          capacity: 300,
          date: "jeudi",
          chroni :"soirée",
          crowd : "affluence"

        },
        {
          name: "alice",
          capacity: 300,
          date: "jeudi",
          chroni :"matinée",
          crowd : "1affluence"
        },
        {
          name: "youpla",
          capacity: 300,
          date: "vendredi ",
          chroni :"après-midi",
          crowd : "affluence"
        },
        {
          name: "yuoupla",
          capacity: 300,
          date: "vendredi ",
          chroni :"après-midi",
          crowd : "affluence"
        },
        {
          name: "yaapoupla",
          capacity: 300,
          date: "vendredi ",
          chroni :"après-midi",
          crowd : "affluence"
        }
      ]
    };

    this.onSearching = this.onSearching.bind(this);
    this.onRemoving = this.onRemoving.bind(this);
  }

  handleClick = e => {
    this.setState({ searchList: e.target.value.toLowerCase() });
    console.log(this.state.searchList);
  };

  onSearching() {
    this.setState({
      hasSearched: true
    });
  }

  onRemoving() {
    this.setState({
      hasSearched: false
    });
  }

  pushInput(e) {
    let value = e.target.value.toLowerCase();
    this.setState({ searching: true });
    this.setState({ searchValue: value });
  }

  render() {
    return (
      <div className="DeepSearch">
        <button className="SearchButton" onClick={this.onSearching}>
          {/* <button className="SearchButton" onClick={() => this.setState({ hasSearched: true })} >  */}
          <i className="icon-magn"></i>
          Rechercher un lieu
        </button>
        {this.state.hasSearched === true ? (
          <div className="DeepSearchContainer">
            <div className="SearchHelp">
              <i className="icon-magn"></i>
              <input
                id="search"
                placeholder="Rechercher"
                type="text"
                maxLength="30"
                onKeyUp={e => this.pushInput(e)}
              ></input>
              <button onClick={this.onRemoving}>
                <i className="icon-remove"></i>
              </button>
            </div>

            <div className="SearchBar">
              <div className="DateSearch">
                <p>
                  20/25/2024 <i className="icon-arrow"></i>
                </p>
              </div>

              <div className="DeploydSearch">
                <i className="icon-magn"></i>
              </div>
            </div>
            <hr />
            <div className="FileLinkWrapper" onClick={this.fileGenerator}>
              {this.state.values.map(val => {
                if (val.name.indexOf(this.state.searchValue) === 0) {
                  return (
                    <FileLink
                      location={val.name}
                      capacity={val.capacity}
                      date={val.date}
                      chroni={val.chroni}
                      crowd = {val.crowd}
                    />
                  );
                }
              })}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
export default Deepsearch;
