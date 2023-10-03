import { useState } from 'react'
import logo from '../../assets/logo..png'
import './CreativeLoginPage.css'

const CreativeLoginPage = () => {

    
    

  return (
    <div className='bg-cit md:bg-center md:bg-cover h-screen w-full grid place-content-center selection:bg-[#feb1a2] text-nunito'>
        <div className='md:w-[920px] w-[380px] bg-white md:flex'>
            <div className="md:w-[370px] md:h-full bg-[url('https://app.creativeitinstitute.com/img/login-balloon.jpg')] bg-top bg-cover text-white md:px-[40px] px-[30px] md:py-[80px] py-[35px]">
                <h1 className="capitalize md:text-[32px] sm:text-[1.6rem] text-[1.4rem] font-medium mb-[8px]">student login from</h1>
                <p className="md:text-sm text-[.85rem]">Please use your credentials to login.</p>
            </div>
            <div className="md:w-[550px] md:p-[80px] px-[30px] py-[35px]">
                <img src={logo} className='w-[110px] mb-[60px]'/>
                <p className='text-base mb-[24px]'>Login</p>
                <form action="#">
                    <div className='relative group mb-[24px]'>
                        <input type="email" id='email'  className='peer border-[1px] border-[#d7d7d7] focus:border-[#b86c79] focus:outline-0 focus:bg-[#e8f0fe] valid:bg-[#e8f0fe] rounded text-sm px-[12px] py-[8px] w-full' required/>
                        <label className='absolute -top-2.5 left-3 px-1 m-0 p-0 bg-white peer-valid:bg-gradient-to-b peer-focus:bg-gradient-to-b from-slate-50 to-sky-100 text-sm' htmlFor="email">E-mail</label>
                    </div>
                    <div className='relative group mb-[24px]'>
                        <input type="password" id='password'  className='peer border-[1px] border-[#d7d7d7] focus:border-[#b86c79] focus:outline-0 focus:bg-[#e8f0fe] valid:bg-[#e8f0fe] rounded text-sm px-[12px] py-[8px] w-full' required/>
                        <label className='absolute -top-2.5 left-3 px-1 m-0 p-0 bg-white peer-valid:bg-gradient-to-b peer-focus:bg-gradient-to-b from-slate-50 to-sky-100 text-sm' htmlFor="password">Password</label>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p><a href="#" className='hover:text-primary text-sm'>I have no account</a></p>
                        <p><button type='submit' className='uppercase text-sm text-white bg-primary hover:bg-[#620716] font-medium lg:px-[42px] md:px-[38px] sm:px-[32px] px-[28px] lg:py-[12px] md:py-[10px] sm:py-[8px] py-[6px] rounded-full' >login</button></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CreativeLoginPage