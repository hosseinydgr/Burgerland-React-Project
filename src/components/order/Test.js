import React from "react";

// 1. Dynamic inline style 📌
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "", isInvalid: false };
  }

  handleClick() {
    if (this.state.inputValue.trim() === "") {
      this.setState({ isInvalid: true });
    } else {
      alert(this.state.inputValue);
    }
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
    this.setState({ isInvalid: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Click</button>
        <input
          style={{
            backgroundColor: this.state.isInvalid ? "red" : "yellow",
          }}
          onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
}

// 2. Dynamic CSS classes 📌
// import "./Test.css";

// class Test extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { inputValue: "", isInvalid: false };
//   }

//   handleClick() {
//     if (this.state.inputValue.trim() === "") {
//       this.setState({ isInvalid: true });
//     } else {
//       alert(this.state.inputValue);
//     }
//   }

//   handleChange(e) {
//     this.setState({ inputValue: e.target.value });
//     this.setState({ isInvalid: false });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick.bind(this)}>Click</button>
//         <input
//           className={`yellow ${this.state.isInvalid ? "invalid" : ""}`}
//           onChange={this.handleChange.bind(this)}
//         />
//       </div>
//     );
//   }
// }

// 3. Styled Components, dynamic classes 📌
// import styled from "styled-components";

// const Input = styled.input`
//   background-color: yellow;

//   &.invalid {
//     background-color: red;
//   }
// `;

// class Test extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { inputValue: "", isInvalid: false };
//   }

//   handleClick() {
//     if (this.state.inputValue.trim() === "") {
//       this.setState({ isInvalid: true });
//     } else {
//       alert(this.state.inputValue);
//     }
//   }

//   handleChange(e) {
//     this.setState({ inputValue: e.target.value });
//     this.setState({ isInvalid: false });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick.bind(this)}>Click</button>
//         <Input
//           className={`${this.state.isInvalid ? "invalid" : ""}`}
//           onChange={this.handleChange.bind(this)}
//         />
//       </div>
//     );
//   }
// }

// 4. Styled Components, using dynamic props 📌
// import styled from "styled-components";

// const Input = styled.input`
//   background-color: ${function (props) {
//     return props.isInvalid ? "red" : "yellow";
//   }};
// `;

// class Test extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { inputValue: "", isInvalid: false };
//   }

//   handleClick() {
//     if (this.state.inputValue.trim() === "") {
//       this.setState({ isInvalid: true });
//     } else {
//       alert(this.state.inputValue);
//     }
//   }

//   handleChange(e) {
//     this.setState({ inputValue: e.target.value });
//     this.setState({ isInvalid: false });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick.bind(this)}>Click</button>
//         <Input
//           onChange={this.handleChange.bind(this)}
//           isInvalid={this.state.isInvalid}
//         />
//       </div>
//     );
//   }
// }

export default Test;
