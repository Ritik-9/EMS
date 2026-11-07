    import React, { useContext, useEffect, useState } from 'react'
    import Login from './components/Auth/Login'
    import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
    import AdminDashBoard from './components/Dashboard/AdminDashBoard'
    import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
    import { AuthContext } from './context/Context'

    const App = () => {
      const admin={firstName:"Admin"}
      const [Authdata,setUserData]=useContext(AuthContext)
      const[user,setUser]=useState(null)
      const[logInData,setlogInData]=useState(null)


      const handleLogin=(email,pass)=>{
        if(email=='admin@me.com' && pass=='123'){
          setUser('admin')
          setlogInData(admin)
          localStorage.setItem('logInData',JSON.stringify({role:"admin",data:admin}))
        }else if(Authdata){
          const employee=Authdata.employees.find((e)=>e.email==email && e.password==pass)
          if(employee){
            setlogInData(employee)
            setUser('employee')
            localStorage.setItem('logInData',JSON.stringify({role:"employee",data:employee}))
          }else{
            alert('Invalid Credentials')
          }
        }else{
          alert('Invalid Credentials')
        }
      }
      // setLocalStorage()
      useEffect(()=>{
        const logInUser=localStorage.getItem('logInData')
        if(logInUser){
          const userData=JSON.parse(logInUser)
          setUser(userData.role)
          setlogInData(userData.data)
        }
      },[])
      return (
        <div>
          {!user ? <Login handleLogin={handleLogin} />: user=='admin'?<AdminDashBoard changeUser={setUser} data={logInData} /> :user === 'employee'? <EmployeeDashboard changeUser={setUser}  data={logInData}/> :null}
        </div>
      )
    }

    export default App
