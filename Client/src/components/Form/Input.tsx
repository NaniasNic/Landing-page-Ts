import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export function Input(props: InputProps) {
    return (
        <input
            {...props}
            className='bg-white py-3 px-4 rounded text-lg font-normal placeholder:text-zinc-500 placeholder:font-semibold placeholder:uppercase'
        />
    )
}