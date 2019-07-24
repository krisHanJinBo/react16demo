import React from 'react';
import Counter from './conter'

class Item extends React.Component {
    constructor (props) {
        super(props);
         this.state = {

         }
    }
    change(type) {
       this.props.onChange(type)
    }
    render() {
      const {barcode,name,unit,price,count} = this.props.info
      return ( 
          <div>
            <span style={{marginRight: '50px'}}>{count}</span>
            {barcode + '-'+ name + '-' + price + '元/' + unit}
            <Counter count={count} price={price} onItemChange={this.change.bind(this)}></Counter>
          </div>
      )
    }
}


export default Item;