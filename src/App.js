import React from 'react'
import './App.less';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'

class App extends React.Component {
	render(){
		return (
			<Router>
				<Switch>{/*只匹配其中一个*/}
					<Route path='/login' component={Login}></Route>
					<Route path='/' component={Admin}></Route>
				</Switch>
			</Router>	
		)
	}
}

export default App;
