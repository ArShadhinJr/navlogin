import { useState } from 'react'
import CenterDiv from '../CenterDiv/CenterDiv'
import InputTag from '../InputTag/InputTag'

const SimpleReg = () => {

    let [values, setValues] = useState({
        name: "",
        password: "",
        email: ""
    } )
    
    let handleChange = (e) => {
        setValues( {
            ...values,
            [ e.target.name ]: e.target.value 
        } )
    }

    let reset = () => {
        setValues( {
            name: "",
            password: "",
            email: ""
        } )
    }

    let handleSumbit = (e) => {
        e.preventDefault()
        console.log( values )
        reset()
    }

    // const inputOps = [{  
    //     type: 'text',
    //     placeholder: 'Enter your name',
    //     value: values.name
    // },
    // {
    //     type: 'password',
    //     placeholder: 'Enter your password', 
    //     value: values.password
    // }, 
    //     {
    //         type: 'email',
    //         placeholder: 'Enter your email', 
    //         value: values.email
    //     }
    
    // ]

  return (
    <CenterDiv className="w-[400px]  h-96">
        <form onSubmit={handleSumbit}>
            <InputTag onChange={handleChange} type="text" name="name" placeholder="Enter your name" value={values.name}/>
            
            <InputTag onChange={handleChange} type="email" name="email" placeholder="Enter your email" value={values.email}/>
            
            <InputTag onChange={handleChange} type="password" name="password" placeholder="Enter your password" value={values.password}/>
            
            
            <button className='px-5 py-1 bg-slate-800 text-white rounded-lg font-bold'  type="submit">Sing Up</button>
        </form>
    </CenterDiv>
  )
}

export default SimpleReg