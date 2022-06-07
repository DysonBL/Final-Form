import React, { Component } from "react";
import "./ErrorBountry.css";

export default class ErrorBoudry extends Component<any,any>{
  constructor(props:any) {
    super(props);
     this.state={hasError:true};
    this.state = { error: null, errorInfo: null };
  }
  //  static getDerivedStateFromError(){
  //      return {hasError:true}
  //  }
  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.error){
      return (
        <div>
          <p className="error">Something Error in your app</p>
          <p className="Detail">
            <details style={{ whiteSpace:"pre-line"}}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.error.ReferenceError}
            </details>
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
