import error from '../../assets/404.gif'

const NotFound = () => {
  return (
    <div className=' w-full h-screen'>
        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[500px] '>
          <img src={error}  />
        </div>
    </div>
  )
}

export default NotFound