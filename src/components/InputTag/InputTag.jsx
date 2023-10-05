

const InputTag = (props) => {
  return (
    <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} name={props.name} className={`border-[1px] border-[#d7d7d7] focus:border-[#b86c79] focus:outline-0 focus:bg-[#e8f0fe] valid:bg-[#e8f0fe] rounded text-sm px-[12px] py-[8px] w-full mb-3 ${props.className}`}/>
  )
}

export default InputTag