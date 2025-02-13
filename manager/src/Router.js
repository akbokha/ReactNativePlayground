import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'
import { Actions } from 'react-native-router-flux'

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 50 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" initial/>
      </Scene>
      <Scene key="main">
        <Scene
          key="employeeList"
          component={EmployeeList}
          title="Employees"
          rightTitle="Add"
          onRight={() => Actions.employeeCreate()}
          initial
        />
        <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee"/>
      </Scene>
    </Router>
  )
}

export default RouterComponent