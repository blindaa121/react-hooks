import React, { useState, useEffect } from 'react';
import './App.css';
import {useForm} from './useForm'

const App = () => {
  // const [{count, count2}, setCount] = useState({count: 10, count2: 20});
  const [values, handleChange] = useForm({email: '', password: ''})
  // const [password, setPassword] = useState('');

  useEffect(() => { // function will get called everytime the component renders
    console.log('render')
  }, [values.password])

  return (
    <div className="App">
        <input
          name='email'
          value={values.email}
          onChange={handleChange}/>
        <input
          name='password'
          type='password'
          value={values.password}
          onChange={handleChange}/>
     </div>
  )
    

}

export default App;
