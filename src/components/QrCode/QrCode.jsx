
const QrCode = () => {

    // let input = useRef( "" );
    const input = document.querySelector( "input" );
    const imgQr = document.querySelector( "img" );


    const generateQrCode = () => {
        imgQr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
    }

  return (
    <div className="bg-gradient-to-bl from-orange-400 via-orange-600 to-orange-700 h-screen ">
        <div className="w-7/12 absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]">
            <div className="flex relative overflow-hidden">
                <div className="w-2/5 z-10 bg-slate-600 rounded-xl rounded-r-none before:absolute before:contents-[''] before:right-[53%] before:top-[50%] before:transform before:duration-300 before:translate-y-[-50%] before:rotate-[10deg] hover:before:rotate-[5deg] before:w-[20%] before:h-[130%] before:bg-slate-600 before:z-[-1]">
                      <h1 className="text-white text-5xl font-mono font-black uppercase mx-16 mt-16 ">Qr-Code Scanner</h1>
                      <p className='text-white text-2xl font-mono mx-16'>Use any where</p>
                </div>
                <div className="w-3/5 h-[28rem] bg-white rounded-xl rounded-l-none relative">
                      <div className="absolute top-[50%] right-[40%] translate-x-[50%] translate-y-[-50%]  w-80 h-96">
                          <h3 className="text-md font-mono mb-2">Type your text or URL here</h3>
                          <input type="text" placeholder="Enter your text or URL" className="px-5 w-full py-1 border-[1px] border-[#d7d7d7] focus:outline-0 focus:bg-[#e8f0fe] rounded" />
                          <button className='generate w-full py-1 border-slate-600 rounded-full bg-slate-600 text-white font-mono px-8 hover:bg-slate-800  transform duration-300 mt-1' onClick={generateQrCode}>Genarate Qr-Code</button>
                          <h3 className="text-md font-mono my-2">Your Qr-Code here</h3>
                          <div className='  text-center'>
                              <img src="" className='inline-block h-[200px] w-[200px]'/>
                          </div>
                          <div className='mt-4 flex'>
                              <button className='w-1/2 py-1 border-2 border-slate-600 rounded-full bg-slate-600 text-white font-mono px-8 hover:bg-slate-800  transform duration-300 mr-2' type='submit' onClick={generateQrCode}>Download</button>
                              <button className='w-1/2 py-1 border-2 rounded-full bg-white border-slate-600 text-slate-600  font-mono px-8 hover:bg-slate-600 hover:text-white transform duration-500' type='button' onClick={() => input.value = ''}>Reset</button>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QrCode