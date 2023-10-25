import CenterDiv from "../CenterDiv/CenterDiv"
import qr from '../../assets/image-qr-code.png'


const QrCodeDesign = () => {
  return (
    <CenterDiv classNameMain="bg-[#D5E1EF]" className="w-[320px] bg-white text-[#212A3E] p-4 rounded-2xl text-center"> 
        <img src={qr} className="rounded-2xl" />
        <h2 className="text-xl font-extrabold my-4">Improve your front-end skills by building projects</h2>
        <p className="text-sm text-gray-400">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </CenterDiv>
  )
}

export default QrCodeDesign