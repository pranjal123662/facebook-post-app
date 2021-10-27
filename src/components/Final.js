import { Button } from "@mui/material";
import React, { Component } from "react";
export default class Final extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      show: false,
      showFinal: false,
      post: "",
      imagePost: "",
    };
  }
  handleSearch = (event) => {
    this.setState({
      searchText: [event.target.value],
      show: true,
      showFinal: false,
    });
  };
  handleSearch1 = (event) => {
    this.setState({
      post: event.target.value,
      show: false,
    });
  };
  handlePost = (url) => {
    this.setState({
      imagePost: url,
      show: false,
    });
  };
  finalPost = () => {
    this.setState({
      showFinal: true,
      show: false,
    });
  };
  render() {
    // console.log(this.state.showFinal);
    console.log("render");
    return (
      <div className="post">
        <input
          type="text"
          className="input-field"
          placeholder="Write Sonething"
          onChange={this.handleSearch1}
        />
        <Button
          style={{ width: 40, marginLeft: 200 }}
          onClick={this.finalPost}
          variant="contained"
        >
          Post
        </Button>
        <input
          type="text"
          className="input-fieldforSearch"
          placeholder="Search"
          onChange={this.handleSearch}
        />
        {this.props.data
          .filter((filterItem) => {
            if (
              filterItem.title
                .toLowerCase()
                .includes(this.state.searchText.toLowerCase())
            ) {
              return true;
            } else {
              return false;
            }
            // if (filterItem.keywords.includes(this.state.searchText)) {
            //   return true;
            // } else {
            //   return false;
            // }
          })
          .map((item, index) => {
            return (
              <div
                className="dataItem"
                key={item.id}
                onClick={() => {
                  this.handlePost(item.images.downsized.url);
                }}
              >
                {this.state.show && this.state.searchText !== 0 && (
                  <img src={item.images.downsized.url} alt="final" />
                )}
                {index === 0 &&
                  this.state.post.length !== 0 &&
                  this.state.showFinal && (
                    <div>
                      <h3>{this.state.post}</h3>
                      <img src={this.state.imagePost} alt="final" />
                    </div>
                  )}

                {/* {/* <li className="result">{item.symbol}</li> */}
              </div>
            );
          })}
      </div>
    );
  }
}
