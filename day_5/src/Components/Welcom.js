import { Component } from "react";

// class components example
// example to know how to use props 
class Welcom extends Component{
    render(){
        return (
        <h1>Hello {this.props.heroName}</h1>
        );
    }
}
export default Welcom;