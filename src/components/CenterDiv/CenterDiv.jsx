
const CenterDiv = (props) => {
  return (
    <div className="w-full h-screen ">
        <div className={`absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 ${props.className}`}>
            {props.children}
        </div>
    </div>
  )
}

export default CenterDiv