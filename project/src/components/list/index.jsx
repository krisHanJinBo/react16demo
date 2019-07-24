import React from 'react';
import Item from './item'

class List extends React.Component {
    constructor (props) {
        super(props);
         this.state = {
            items : [
                {barcode: 'ITEM000000', name: '可口可乐', unit: '瓶', price: 3.00},
                {barcode: 'ITEM000001', name: '雪碧', unit: '瓶', price: 3.00},
                {barcode: 'ITEM000002', name: '苹果', unit: '斤', price: 5.50},
                {barcode: 'ITEM000003', name: '荔枝', unit: '斤', price: 15.00},
                {barcode: 'ITEM000004', name: '电池', unit: '个', price: 2.00},
                {barcode: 'ITEM000005', name: '方便面', unit: '袋', price: 4.50}
            ]
         }
    }
    componentWillMount() {
        console.log(this.props)
        var items = this.state.items.map((item) => {
           item.count = 0;
           return item
        })
        this.setState({
            items: items
        })
    }
    clickButton (ind, usestate) {
        // console.log(ind, usestate);
    }
    handleChange(item,i,type) {
        // console.log(type,item,i);
        var items = this.state.items;
        if(type) {
            items[i].count = items[i].count+1
        } else {
            items[i].count = items[i].count-1
        }
        if(items[i].count <=0 ) {
            items[i].count = 0;
        }
        this.setState({
            items: items
        })
    }
    render() {
        // var { isSayGoodBye } = this.props;
       
      return (
          <section>
              <p>{this.props.isSayGoodBye?'欢迎光临':'谢谢惠顾'}</p>
              <ul className="list-wrap">
                  {
                      this.state.items.map((item,i) => {
                        //  item.count = 0
                         return (
                         <li 
                            key={i} 
                            onClick={this.clickButton.bind(this,i,item.unit)}>   
                            <Item info={item} onChange={this.handleChange.bind(this,item,i)}></Item>
                         </li>)
                      })
                  }
              </ul>
              
          </section>
      )
    }
}


export default List;