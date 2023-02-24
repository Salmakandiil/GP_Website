import "./App.css"
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/Registeration/Login'
import Register from './components/Registeration/Register'
import CourseHome from "./components/allcourses/CourseHome"
import sql from "./components/modules/SQL/sql"
import Lab_guide from "./components/common/Labs/Lab_guide"
import Contact from "./components/contact/Contact"

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
          <Route path='/lab-guide' exact component={Lab_guide} />
          <Route path='/contact' exact component={Contact} />
        </Switch>

      </Router>


    </></>
      

  )
}

export default App