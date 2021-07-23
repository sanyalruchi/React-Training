import React, {Component} from 'react';

class DisplaySelectedUser extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: {
              name: props.user  
            }
        }
        console.log(props, "inside constructor display Selected User");
        console.log( this.state.user.name, "inside constructor display Selected User  this.state");
    }

    // static getDerivedStateFromProps(props, state){
    //     console.log("getDerivedStateFromProps of display Selected User");
    //     console.log(props, "props");
    //     console.log(state, "state");
    //     return props;
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log(nextProps, "nextProps", this.props);
    //     console.log(nextState, "nextState", this.state);
    //     if(this.props.user === nextProps.user) return false;
    // }

    componentWillUnmount(){                   
       console.log("inside componentWillUnmount");
    }

    componentDidMount(){
        console.log("inside display Selected User mount");
    }

    render() {
        console.log(this.state,"refreshed display Selected User")
        return(
            <div>Hello {this.state.user.name}</div>
        )
    }
}

export default DisplaySelectedUser;