import "./App.css"
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom'
import Home from './components/home/hero/Home'
import Login from './components/Registeration/Login'
import Register from './components/Registeration/Register'
import CourseHome from "./components/allcourses/CourseHome"
import sql from "./components/modules/SQL/sql"


function App() {
  
  return (
    <><>
      <Router>
      
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/modules' exact component={CourseHome} />
          <Route path='/SQL' exact component={sql} />
        </Switch>

      </Router>


    </></>
      

  )
}

export default App