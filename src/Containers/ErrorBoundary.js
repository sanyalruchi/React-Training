import React, { Children, Component } from 'react';

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
        console.log(props, "props")
    }

    static getDerivedStateFromError(error){
        return{
            hasError: true
        }
    }

    render(){
        if(this.state.hasError){
            return (<h1>Something Went wrong!!</h1>)
        }
        return  this.props.children;
    }
}

export default ErrorBoundary;