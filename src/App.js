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
            history: [],
            mathSign:false,
            haveOperation: false
        };
    }

    onClick = button => {
        
        if(button === "/" || button === "*" || button === "+" || button === "-"){
            this.setState({
                result: this.state.result + button,
                mathSign:true,
                haveOperation: true
                
        });
    }

      else if(button === "=" && !this.state.mathSign && this.state.haveOperation){
          
          this.calculate()
      }

      else if(button === "C"){
          this.reset()
      }

      else if (button !== "="){

          this.setState({
              result: this.state.result + button,
              mathSign:false
          })
      }
  };
    

    calculate = () => {
      try {
          this.setState({
              // eslint-disable-next-line
              result: (eval(this.state.result) || "" ) + "" ,
              mathSign:false,
            haveOperation: false,
              // eslint-disable-next-line
              history:[...this.state.history ,this.state.result + "=" + eval(this.state.result)] //this.state.history.push(this.state.result)
                     })
      } catch (e) {
          this.setState({
              result: "error"
          })

      }
  };

  reset = () => {
      this.setState({
          result: "",
          mathSign:false,
        haveOperation: false
      });
  };


    render() {
        return (
            <div>
                <div className="calculator-body">
                    <div className = "result-button">
                        <ResultComponent result={this.state.result}/>
                        <KeyPadComponent onClick={this.onClick}/>
                    </div>
                    <HistorySpace history={this.state.history}/>
                </div>
            </div>
        );
    }
}

export default App;