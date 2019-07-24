import React from 'react';


class Counter extends React.Component {
    constructor (props) {
        super(props);
         this.state = {

         }
    }
    changeCount(type) {
        this.props.onItemChange(type)
    }
    render() {  
      return (
         <span style={{ marginLeft:'50px' }}>
           <button onClick={this.changeCount.bind(this,true)}>+</button>
           <input type='text' value={this.props.count} readOnly style={{width: '40px',textAlign:'center'}}/>
           <button onClick={this.changeCount.bind(this,false)}>-</button>
           共{this.props.count*this.props.price}元
         </span>
      )
    }
}


export default Counter;