import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";
import HistorySpace from "./components/HistorySpace";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: "" ,
            history: ""
        };
    }

    onClick = button => {

      if(button === "="){
          this.calculate()
      }

      else if(button === "C"){
          this.reset()
      }

      else {
          this.setState({
              result: this.state.result + button
          })
      }
  };

    calculate = () => {
      try {
          this.setState({
              // eslint-disable-next-line
              result: (eval(this.state.result) || "" ) + "" ,
            //   history: this.state.history.push(this.state.result)
                     })
      } catch (e) {
          this.setState({
              result: "error"
          })

      }
  };

  reset = () => {
      this.setState({
          result: ""
      })
  };


    render() {
        return (
            <div>
                <div className="calculator-body">
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                    <HistorySpace history={this.state.history}/>
                </div>
            </div>
        );
    }
}

export default App;