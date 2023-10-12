import { useState } from 'react'
import CenterDiv from '../CenterDiv/CenterDiv'
import InputTag from '../InputTag/InputTag'

const OntherLogin = () => {

    let [values, setValues] = useState({
        name: "",
        email: "",
        password: ""
    } )

    // let [ error, setError ] = useState( {
    //     name: "",
    //     email: "",
    //     password: ""
    // })

    let  [nameErr, setNameErr ] = useState( "" )
    let [ emailErr, setEmailErr ] = useState( "" )  
    let [ passwordErr, setPasswordErr ] = useState( "" )

    let handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    let reset = () => {
        setValues ({
            name: "",
            email: "", 
            password: ""
        })
    }
    
    let handleSubmit = (e) => {
        e.preventDefault()
        if ( !values.name ) {
            setNameErr( "Name is required" )
        }
        if( !values.email ) {
            setEmailErr( "Email is required" )
        }
        if( !values.password ) {
            setPasswordErr( "Password is required" )
        }
        
    }

  return (
    <CenterDiv className="w-[400px]  bg-amber-400 text-blue-500 p-3 rounded-lg">
        <form onSubmit={handleSubmit}>
            <InputTag onChange={handleChange} type='text' placeholder="Enter your name" name="name" value={values.name}/>
            {
                nameErr ? <p className='text-red-100 bg-red-500 px-3 rounded pb-[3px]'>{nameErr}</p> : null
            }
            <InputTag onChange={handleChange} type='email' placeholder="Enter your email" name="email" value={values.email}/>
            {
                emailErr ? <p className='text-red-100 bg-red-500 px-3 rounded pb-[3px]'>{emailErr}</p> : null
            }
            <InputTag onChange={handleChange} type='password' placeholder="Enter your password" name="password" value={values.password} />
            {
                passwordErr ? <p className='text-red-100 bg-red-500 px-3 rounded pb-[3px]'>{passwordErr}</p> : null
            }
            
            
            <button className='bg-blue-500 text-white px-5 py-1 rounded mt-2' type="submit">Login</button>
        </form>
        
    </CenterDiv>
  )
}

export default OntherLogin