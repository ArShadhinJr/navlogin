import {AiFillHome} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const HomeButton = () => {
  return (
    <div className='absolute top-0 left-0 text-white  hover:text-primary opacity-25 hover:opacity-100 p-2 text-2xl bg-primary hover:bg-white transform duration-500 border-2 rounded-lg'><Link to="/home" ><AiFillHome/></Link></div>
  )
}

export default HomeButton