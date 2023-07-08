import { useState } from "react"

const Input = ({ type, placeholder, value, flatIcon, onChange }) => {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <div className={`flex transition-all ${isFocused ? 'outline outline-emerald-300' : 'outline-none'}`}>
            <i className={`${flatIcon} w-[10%] text-slate-400 bg-slate-200 flex items-center justify-center`}></i>
            <input type={type} placeholder={placeholder} value={value} onChange={onChange} onBlur={() => setIsFocused(false)} onFocus={() => setIsFocused(true)} className="w-[90%] p-3 text-sm transition-all outline-none bg-slate-200" />
        </div>
    )
}

export default Input