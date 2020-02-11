import React, { Component } from 'react';
import Header from './Header';
import Body from './body';
import Input from './input';



class App extends Component {

state ={

input: ''

}

eventChangeHandler = (e) => {

this.setState({
  input : e.target.value
 
})

}

  render() {


    return (

      <div>
      <Header/>
     
      <Body name={this.state.input}/>
      <Input onChange={this.eventChangeHandler} />     
    
   
</div>

    )


  }


}

export default App;