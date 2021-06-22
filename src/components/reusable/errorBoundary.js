import React, { Component } from "react";
// This is great fro production builds
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info){
      this.setState({hasError: true})
  }

  render() {
    const { hasError } = this.state;
    return hasError ? <h1>Oops something went wrong</h1> : this.props.children;
  }
}

export default ErrorBoundary