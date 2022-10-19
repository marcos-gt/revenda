import { ReactNode } from 'react'


export interface ButtonProps {
    children: string | ReactNode;
}
export function Button({ children }: ButtonProps) {
    return (
        <button className="text-white font-bold rounded border-slate-200 border-2 bg-black w-16 h-12">
            {children}
        </button>
    )
}