import React from 'react';


class Counter extends React.Component {
    constructor (props) {
        super(props);
         this.state = {

         }
    }
    render() {  
      return (
        <form>
            <div id='box'>
                <label for="btn1">
            　　　　<input type="radio" name="aa" id="btn1"/>
            　　　　我是单选按钮1
            　　</label>
            　　<label for="btn2">
            　　　　<input type="radio" name="aa" id="btn2"/>
            　　　　我是单选按钮2
            　　</label>
            </div>
            <div>
                <label for="b1">
            　　　　<input type="checkbox" name="aa" id="b1"/>
            　　　　多选按钮1
            　　</label>
            　　<label for="b2">
            　　　　<input type="checkbox" name="aa" id="b2"/>
            　　　　多选按钮2
            　　</label>
            </div>
           
        </form>
      )
    }
}


export default Counter;