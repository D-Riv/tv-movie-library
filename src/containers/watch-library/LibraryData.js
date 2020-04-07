import React from "react";

class LibraryData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      libraryData: [],
    };
  }

  addToLib = () => {
    this.setState({ libraryData: this.state.props.data });
  };

  render() {
    console.log(this.state.libraryData);
    return <div></div>;
  }
}

export default LibraryData;
