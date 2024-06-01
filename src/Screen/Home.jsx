import React, { Component } from "react";
import Contain from "../Components/Model/Contain";
import BtnGroup from "../Components/Store/BtnGroup";
import Store from "../Components/Store/Store";


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null
    };
  }
  getSelectedItemApp(selectedItem) {
    this.setState({
      selectedItem
    });
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
         
          </div>
          <hr className="style13" />
          <div className="row">
            <div className="col-lg-8 col-sm-8">
              <BtnGroup />
              <Store getSelectedItemApp={this.getSelectedItemApp.bind(this)} />
            </div>
            <div className="col-lg-4 col-sm-4">
              <Contain selectedItem={this.state.selectedItem} />
            </div>
          </div>
        </div>
     
      </div>
    );
  }
}
