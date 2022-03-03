import * as React from "react";
import "./App.css";
import axios from "./axios.config";

class App extends React.Component{

  
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit2 = this.handleSubmit2.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    const json = JSON.stringify({ phone : this.state.value,locker_id : ["0091394055"]});

    axios.post("api/Registion",JSON.parse(json))
    .then( (response) => {document.getElementById("test").innerHTML=JSON.stringify(response)})
    .catch( (error) => {console.log(error)});
  }
  
  handleSubmit2(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    const json = JSON.stringify({ phone : this.state.value,locker_id : ["0091394055"]});

    axios.post("api/Locker",JSON.parse(json))
    .then( (response) => {document.getElementById("test").innerHTML=JSON.stringify(response) })
    .catch( (error) => {console.log(error)});
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            新增登記:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <form onSubmit={this.handleSubmit2}>
          <label>
            查詢鎖櫃:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p id="test"></p>
      </div>
    );
  }
}
export default App;
