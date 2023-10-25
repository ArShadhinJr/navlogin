import { useRef, useState } from 'react'
import CenterDiv from '../CenterDiv/CenterDiv'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../Slices/counterSlice'

const Enter = () => {

    const count = useSelector(state=> state.counter.value)
    const dispatch = useDispatch()

    const [ value, setValue ] = useState( null )
    const input = useRef( null )
    
    const handleKeyDown = ( e ) => {
        if ( e.key === 'Enter' ) {
            setValue( e.target.value )
            e.target.value = ""
        }
    }

  return (
    <CenterDiv className="w-[400px] h-96 bg-amber-400 text-blue-500 p-3 rounded-lg">
        <input ref={input} type="text" className='px-3 w-full' onKeyDown={handleKeyDown}/>
        <p>{value}</p>
        
      <h2 className='text-4xl mt-6 text-center'>Count: {count}</h2>
      <div className='flex gap-x-4'>
        <button onClick={()=>{dispatch(decrement())}} className='w-full bg-blue-400 text-amber-300 text-4xl rounded-lg mt-2'>-</button>
        <button onClick={()=>{dispatch(increment())}} className='w-full bg-blue-400 text-amber-300 text-4xl rounded-lg mt-2'>+</button>
      </div>
    </CenterDiv>
  )
}

export default Enter