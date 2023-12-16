import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count :0
      }
    }
    incrementCount(){
        this.setState({
            count : this.state.count+1
        },
        ()=>{
           console.log("Callback value",this.state.count)
        })
        //  this.setState(prevState=>({
        //     count : prevState.count+1
        //  })

        //  )
    }
    // incrementFive(){
    //     this.incrementCount()
    //     this.incrementCount()
    //     this.incrementCount()
    //     this.incrementCount()
    //     this.incrementCount()
    // }
  render() {
    return (
      <div>
        <h1>count : {this.state.count}</h1>
        <button onClick={()=>{this.increment()}}>Count</button>
      </div>
    )
  }
}

export default Counter
