import React from 'react';
import List from '../list/index'
import { HashRouter, Route, Link, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import PageA from '../pages/pageA'
import PageB from '../pages/pageB'
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            counter: 0,
            name: '杨超越',
            toggleStatus: true
        };    //state 用来记录状态
        this.changeStatus = this.changeStatus.bind(this)
      }
      componentDidMount(){
        // this.timerID = setInterval(
        //   () => this.tick(),
        //   1000
        // );
      }
      componentWillUnmount(){
        // clearInterval(this.timerID);
      }
      tick() {
        //  this.setState({
        //      date: new Date(),
        //  });
         this.setState((prevState, props) => ({ //这里 prevState 更新前的 state 对象，props 为新值构成的对象
            date: new Date(),
            counter: prevState.counter + 1
        }));
      }
      handleLick(num,event) {
        //  console.log('handleClick' + this.state.name)
        var path = '/list/999'
        this.props.history.push(path) 
      }
      changeStatus() {
        this.setState((prevState, props) => ({
            toggleStatus: !prevState.toggleStatus
        }));
      }
      render(){
        return (
          <div>
            
            <h1>Hello, world!</h1>
            {/* <h2>It is {this.state.date.getMinutes() + '-' + this.state.date.getSeconds()}.</h2>
            <h3>{this.state.counter}</h3> */}
            <button onClick={this.handleLick.bind(this,'998')}>我是一个孤独的按钮</button>
            <button onClick={this.changeStatus}>{this.state.toggleStatus?'开': '关'}</button>
            <List isSayGoodBye={this.state.toggleStatus}></List>
            <BrowserRouter>
               <div>
               <Link to="/home/a" style={{ color: 'black' }}>
                  <div>点击跳转到PageA</div>
                </Link>
                <Link to="/home/b" style={{ color: 'black' }}>
                  <div>点击跳转到PageB</div>
                </Link>
               </div>
               <div>
                  <Route path="/home/" exact component={PageA} /> 
                  <Route path="/home/a" component={PageA} />
                  <Route path="/home/b" component={PageB} />
               </div>
            </BrowserRouter>
          </div>
        );
      }
}


export default Home;