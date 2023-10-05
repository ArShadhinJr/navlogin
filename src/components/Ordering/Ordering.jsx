import { useState } from 'react'
const Ordering = () => {
  const [hide, setHide] = useState(true)

  return (
    <div className="w-full h-screen">
      <div className="absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 w-[500px] ">
        <div className={`flex transform duration-300 w-full h-96 bg-slate-600 ${hide ? 'hidden' : ''}`}>
          <div onMouseEnter={()=>setHide(!hide)} className='w-1/2 h-full bg-blue-400'></div>
          <div onMouseEnter={hide? 'order-1' : 'order-2'} className={`w-1/2 h-full bg-green-300 `}></div>
        </div>
        <div className={`flex transform duration-300 w-full h-96 bg-slate-800 ${hide ? '' : 'hidden'}`}>
          <div onMouseEnter={hide? 'order-2' : 'order-1'} className={`w-1/2 h-full bg-amber-300 `}></div>
          <div onMouseEnter={()=>setHide(!hide)} className='w-1/2 h-full bg-red-400'></div>
        </div>
        <button onClick={()=>setHide(!hide)}>Click</button>
      </div>
    </div>
  )
}

export default Ordering