import { useState } from 'react';
import CenterDiv from '../CenterDiv/CenterDiv'
import InputTag from './../InputTag/InputTag';
import { Link } from 'react-router-dom';

const SimpleLogin = () => {

    const [ values, setValues ] = useState( {
        name: "", 
        email: "", 
        password: ""
    } )
    
    const inputOps = [
        {
            type: "text", 
            placeholder: "Enter Your Name", 
            name: "name", 
            value: values.name,
        }, 
        {
            type: "email", 
            placeholder: "Enter Your Email", 
            name: "email", 
            value: values.email,
        }, 
        {
            type: "password", 
            placeholder: "Enter Your Password", 
            name: "password", 
            value: values.password,
        }
    ]
    
    const handleValues = (e) => {
        setValues( {
            ...values,
            [ e.target.name ]: e.target.value
        } )
    }

    const reset = () => {
        setValues(
            {name: "", 
        email: "", 
        password: ""}
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log( values )
        reset ()
    }

  return (
    <CenterDiv className="w-[400px] bg-[#497fdd] rounded-lg text-amber-900 font-mono p-2">
        <h1 className='text-2xl text-center pt-1'>Simple Login</h1>
        <form onSubmit={handleSubmit}>
            {
                  inputOps.map( ( value, index ) => {
                    return <InputTag key={index} {...value} onChange={handleValues}/>
                })
            }
            
            <button className='px-5 py-1 bg-slate-800 text-white rounded-lg font-bold'  type="submit">Login</button>
            <Link to="/simplereg">Registration</Link>
        </form>
    </CenterDiv>
  )
}

export default SimpleLogin