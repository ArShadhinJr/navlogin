import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div className='grid place-content-center w-full h-screen'>
         <div className='lg:w-[920px] h-96 bg-primary text-white'>
            <div className="lg:w-2/6 h-96">
                <ul>
                    <li className="p-2"><Link to={"/"}>Creative IT Institute Login Page</Link></li>
                    <li className="p-2"><Link to={"/qrcode"}>QrCode</Link></li>
                </ul>
            </div>
         </div>
    </div>
  )
}

export default Home