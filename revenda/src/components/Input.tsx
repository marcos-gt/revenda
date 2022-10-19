import { Text } from './Text';

export interface InputProps {
    placeholder: string;
    children?: string;
}
export function Input({ placeholder, children, }: InputProps) {
    return (
        <>
            <label className="w-80 py-3 ">
                <Text>{children}</Text>
                <input className="bg-gray-800 text-gray-200 w-64 px-2 rounded" placeholder={placeholder}>
                </input>
            </label>
        </>
    )
}