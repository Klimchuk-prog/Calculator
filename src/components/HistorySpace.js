// import React from 'react';

// function HistorySpace (props){
//   const {history} = this.props;
//   return (
//     <div className="history">
//         <p>{history}</p>
//     </div>
// )
// }


import React, {Component} from 'react';

class HistorySpace extends Component {

    render() {
        let {history} = this.props;
        return (
            <div className="history">
                <p>{history}</p>
            </div>
    )
        ;
    }
}


export default HistorySpace;
  
