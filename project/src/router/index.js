import React from 'react'
import {Router,Route,hashHistory,IndexRoute,Link,Redirect,browserHistory} from 'react-router';
import Form from '../components/form'
import pageA from '../components/pages/pageA'
import pageB from '../components/pages/pageB'
export default () => (
    <Router >
      {/* <IndexRoute component={Form} /> */}
      <Route path="/pageB" component={pageB} />
      <Route path="/pageA" component={pageA} />
      <Route path="*" component={Form} />
    </Router>
  )


