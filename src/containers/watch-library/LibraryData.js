import React from "react";

class LibraryData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      libraryData: [],
    };
  }

  addToLib = () => {
    this.setState({ libraryData: this.props.data });
  };

  render() {
    this.addToLib();
    console.log(this.state.libraryData);

    return <div></div>;
  }
}

export default LibraryData;
