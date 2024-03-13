import { forwardRef, useEffect, useImperativeHandle, useRef, InputHTMLAttributes } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props }: InputHTMLAttributes<HTMLInputElement> & { isFocused?: boolean },
    ref
) {
    const localRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, []);

    return (
        <div className='group h-10'>
            <div className='transition-opacity ease-in h-10 w-full opacity-0 group-focus-within:opacity-100 bg-gradient-to-tr from-sky-600 via-purple-500 via-46% to-yellow-400 rounded-lg blur-md'/>
            <div className='text-white bg-none relative -top-11 focus-within:bg-gradient-to-tr from-sky-600 via-purple-500 via-46% to-yellow-400 p-[2px] rounded-lg '>
                                
            <input
                {...props}
                type={type}
                className={
                    'appearance-none bg-zinc-800 rounded-lg p-2 outline-none h-10 focus:outline-none focus:inline-none' + ' ' +  
                    className
                }
                ref={localRef}
            />

            </div>
        </div>
    );
});
