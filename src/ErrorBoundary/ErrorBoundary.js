import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    errorMessaage: ""
  };

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessaage: error });
  };

  render() {
    if (this.state.hasError) {
      return <h1>Something Went Wrong</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
