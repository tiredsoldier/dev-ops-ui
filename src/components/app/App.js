import React, { Component } from "react";
import axios from "axios";
import config from "src/config";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      homes: []
    };
  }
  clickMe = event => {
    axios
      .get(config.apiUrl + "/api/homes")
      .then(data => {
        this.setState({ homes: data.data });
        console.log(data.data);
      })
      .catch(err => {
        console.log("ERROR:", err);
      });
  };
  render() {
    const { homes } = this.state;

    return (
      <div className="App">
        <header className="App-header" />
        <body>
          <input
            type="button"
            className="myButton"
            value="Click Me"
            onClick={this.clickMe}
          />
          {homes.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {homes.map(home => (
                  <tr key={home.id}>
                    <td> {home.id}</td>
                    <td> {home.name}</td>
                    <td> {home.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div style={{textAlign: 'left'}}>no records to show yet</div>
          )}
        </body>
      </div>
    );
  }
}

export default App;
