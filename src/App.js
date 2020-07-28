import React from 'react';
import dataHandler from './Api'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data : new Array()
    }
    this.getData = this.getData.bind(this)
  }

    getData(){
    let data = dataHandler.getData("https://5f1e90d957e3290016863612.mockapi.io/data")
    
    
    data.then(ob=>{
      console.log(ob)
      this.setState({data:ob})
      
    })
  
  }
  render(){
    let data = this.state.data
    
    let item = data.map(ob =>
       (<div key={ob.id}>
         <label>{ob.createAt}</label>
          <label>{ob.name}</label>
          <img src={ob.avatar} />
       </div>))

    return (
      <div>
        <button onClick={this.getData} >Get data</button>
        <br/>
        {item}
       
      </div>
    )
  }
}

export default App;
