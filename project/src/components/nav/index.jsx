import React from 'react'
import { Link } from 'react-router-dom';


class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <header>
        <Link to="/" style={{ color: 'black' }}>
          <div>点击跳转到首页</div>
        </Link>
        <Link to="/home" style={{ color: 'black' }}>
          <div>点击跳转到home</div>
        </Link>
        <Link to="/list" style={{ color: 'black' }}>
          <div>点击跳转到list</div>
        </Link>
        <Link to="/form" style={{ color: 'black' }}>
          <div>点击跳转到form</div>
        </Link>
      </header>
    )
  }
}


export default Nav;