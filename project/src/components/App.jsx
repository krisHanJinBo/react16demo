import React from 'react';
import { HashRouter, Route, Link, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Nav from './nav'
import '../App.css';
import Home from './home';
import List from './list';
import Form from './form';
import PageA from './pages/pageA';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      counter: 0,
      name: '杨超越',
      toggleStatus: true
    };    //state 用来记录状态
    this.changeStatus = this.changeStatus.bind(this)
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
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
  handleLick(num, event) {
    //  console.log('handleClick' + this.state.name)
    console.log(num, event.target)
  }
  changeStatus() {
    this.setState((prevState, props) => ({
      toggleStatus: !prevState.toggleStatus
    }));
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Nav></Nav>
          <main>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/list" exact component={PageA} />
            <Route path="/list/:id" component={List} />
            <Route path="/form" component={Form} />
          </main>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;