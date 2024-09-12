interface inputTypes{
    label:string,
    placeholder:string,
    onChange:(e:any)=>void,
    type?:string
}

const InputLabel = ({label,placeholder, onChange,type}:inputTypes) => {
  return (
    <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center w-full">
            <label className="text-xl font-semibold mb-2" htmlFor="">{label}</label>
            <input onChange={onChange} className="px-3 py-2 w-[350px] border border-1px rounded-md focus:ring-blue-400 focus:border-blue-500" type={type} placeholder={placeholder} />

        </div>
    </div>
  )
}

export default InputLabel
