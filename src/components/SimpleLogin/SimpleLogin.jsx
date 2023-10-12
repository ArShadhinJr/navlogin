import { useState } from 'react';
import CenterDiv from '../CenterDiv/CenterDiv'
import InputTag from './../InputTag/InputTag';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const SimpleLogin = () => {

    const auth = getAuth()
    const navigate = useNavigate()

    const [ values, setValues ] = useState( {
        name: "", 
        email: "", 
        password: ""
    } )

    const [ error, setError ] = useState( {
        name: "", 
        email: "", 
        password: ""
    })
    
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
        if ( e.target.name === "name" ) {
            if ( e.target.value === "" ) {
                setError( {...error, name: "Please enter your name" })
            } else {
                setValues( {...values, name: e.target.value})
                setError( {...error, name: ""})
            }
        }

        if ( e.target.name === "email" ) {
            if ( e.target.value === "" ) {
                setError( {...error, email: "Please enter your email" })
            } else if ( !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test( e.target.value ) ) {
                setError( { ...error, email: "Please enter a valid email" } )
                setValues({...values, email: e.target.value})
            } else {
                setValues( {...values, email: e.target.value})
                setError( {...error, email: ""})
            }
        }

        if ( e.target.name === "password" ) {
            if ( e.target.value === "" ) {
                setError( {...error, password: "Please enter your password" })
            } else {
                setValues( {...values, password: e.target.value})
                setError( {...error, password: ""})
            }
        }
    }

    const reset = () => {
        setValues(
            {name: "", 
            email: "", 
            password: ""}
        )
    }

    

    const handleSubmit = ( e ) => {
        e.preventDefault()
        if( values.name &&  values.email && values.password ) {
            signInWithEmailAndPassword(auth, values.email, values.password)
            .then(() => {
                reset()
                navigate("/home")
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode)
            });
        } else {
            setError( { ...error, name: "Please enter your name" , email: "Please enter your email", password: "Please enter your password" } )
        }
    }

  return (
    <CenterDiv className="w-[400px] bg-[#497fdd] rounded-lg text-amber-900 font-mono p-2">
        <h1 className='text-2xl text-center pt-1'>Simple Login</h1>
        <form onSubmit={handleSubmit}>
            {
                  inputOps.map( ( value, index ) => {
                      return <>
                          <InputTag key={index} {...value} onChange={handleValues} />
                          <p className='text-white bg-red-700 px-3 rounded'>{error[value.name]}</p>
                      </>
                      
                })
            }
            
            <button className='px-5 py-1 bg-slate-800 text-white rounded-lg font-bold mt-3 mr-3'  type="submit">Login</button>
            <Link to="/simplereg">Registration</Link>
        </form>
    </CenterDiv>
  )
}

export default SimpleLogin