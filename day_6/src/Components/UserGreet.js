import React, { Component } from 'react'

export class UserGreet extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn : true
    }
  }
  
    render() {
      return this.state.isLoggedIn?(<div>
         Welcome Bhargavi
      </div>):(<div>
         Welcome Guest
      </div>)
      // let message 
      // if(this.state.isLoggedIn){
      //   message=<div>
      //     Welcome Bhargavi
      //   </div>
      // }else{
      //   message=<div>
      //     Welcome Guest
      //   </div>
      // }

      // return <div>
      //   {message}
      // </div>
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //           Welcome Bhargavi
        //         </div>
        //       )
        // }else{
        //     return (
        //         <div>
        //           Welcome Guest
        //         </div>
        //       )
        // }
    
  }
}

export default UserGreet
