import React, { Component } from 'react';
import { connect } from 'react-redux';

// class Input extends Component {
  
//   state = {currentInputContent: '', usersList: []};

//   handleInputChange = (e) => {
//     e.preventDefault();
//     const preprocessedInput = e.target.value.replace("  ", " ");
//     const splittedUsers = preprocessedInput.split(" ");
//     this.setState({currentInputContent: preprocessedInput, usersList: splittedUsers});
//   }

//   render() {
//     console.log(this.state.usersList);
//     return (
//       <span>
//         <input className="GH-users-input" type="text" value={this.state.currentInputContent} placeholder="Put GitHub Users..."
//         onChange={this.handleInputChange} />
//         <button className="GH-users-button">OK</button>
//       </span>
//     );
//   }
// }

// let Input = ({ dispatch, props }) => {
//   let input
//   console.log(props);
//   console.log();
//   return (
//     <div>
//       <form>
//         <input type="text" onChange={e => {
//         e.preventDefault();
//         if (!e.target.value.trim()) {
//           return
//         }
//         dispatch(props.handleInputChange(e.target.value));
//       }} />
//         <button type="submit">
//           OK
//         </button>
//       </form>
//     </div>
//   )
// }

class Input extends Component {
  
  render() {
    console.log(this.props);
    return (
      <span>
        <input className="GH-users-input" type="text" value={this.props.currentInput}
        onChange={this.props.inputChanged} placeholder="Put GitHub Users..." />
        {/* <h1>{this.props.text.content || 'Hello World!'}</h1> */}
        <button className="GH-users-button">OK</button>
      </span>
    );
  }
}

const mapStateToProps = (state) => {  
  return {
    currentInput: state.currentInput,
  }
};

const mapDispatchToProps = (dispatch) => {  
  return {
    inputChanged: (e) => {
      const preprocessedInput = e.target.value.replace("  ", " ");
      const splittedUsers = preprocessedInput.split(" ");
      const action = {type: 'HANDLE_INPUT_CHANGE', currentInput: preprocessedInput, users: splittedUsers};
      dispatch(action);
    }
  }
};

Input = connect(mapStateToProps, mapDispatchToProps)(Input)


{/* <input className="GH-users-input" type="text" value={this.state.currentInputContent} placeholder="Put GitHub Users..."
        onChange={this.handleInputChange} /> */}

export default Input;
