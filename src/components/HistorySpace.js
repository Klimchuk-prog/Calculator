import React, {Component} from 'react';

class HistorySpace extends Component {
  
    render() {
      let {history} = this.props;
      const arrayHistory = history.map((el,index) =>
    <p key = {index}>{el}</p>)
        
        return (
            <div className="history">
                <div>{arrayHistory}</div>
            </div>
    )
        ;
    }
}

export default HistorySpace;
  
