import {ReactNode} from 'react'
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';


export interface HeadingProps {
    size?: 'lg' | 'xl' | '2xl';
    children: ReactNode;
    asChild?: boolean;
}
export function Heading({size = 'xl',children,asChild}: HeadingProps) {
const Comp = asChild ? Slot : 'h2';
    return (
        <Comp className={clsx(
        'text-white font-bold', 
        {
            'text-lg': size === 'lg',
            'text-xl': size === 'xl',
            'text-2xl': size === '2xl',
        }
        )} >{children}</Comp>
    )
}