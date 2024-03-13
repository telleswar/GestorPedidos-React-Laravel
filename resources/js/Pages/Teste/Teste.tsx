import GuestLayout from '@/Layouts/GuestLayout';
import { useEffect, FormEventHandler } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { PageProps } from '@/types';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Teste({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) {

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login')); 
    };

    return (
        <>
            <ToastContainer />
            <Head title="Login" />
            <div className='w-screen h-screen bg-gradient-to-tl from-zinc-950 to-slate-900 flex justify-center items-center'>
                <section className=' bg-slate-950 rounded-3xl flex xl:w-7/12 xl:h-2/3 sm:w-screen'>
                    <section id='form' className=' flex justify-center text-white items-center p-10 sm:basis-auto xl:sm:basis-5/12'>
                        <form onSubmit={submit} className='flex mt-4 flex-col space-y-10 w-full'>
                            <h1 className='text-white font-sans text-4xl text-center font-bold mb-10'>Faça o seu login</h1>

                            <div>
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder='Email'
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>
                                    
                            <div>  
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="w-full"
                                    autoComplete="current-password"
                                    isFocused={true}
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder='Senha'
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </div>
                            

                        

                        <button type='submit' className="transition-opacity ease-in h-10 w-full bg-gradient-to-tr from-sky-600 via-purple-500 via-46% to-purple-400 to-99% hover:opacity-85 rounded-lg" disabled={processing}>
                            Entrar
                        </button>


                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="text-right underline text-sm w-full text-gray-900 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                            >
                                Esqueci minha senha
                            </Link>
                        )}

                        </form>
                        
                    </section>
                    <section 
                        id='foto' 
                        className="xl:w-2/3 sm:w-0 bg-cover rounded-r-3xl shadow-[inset_350px_30px_400px_-15px_theme('colors.slate.950')]
                            bg-[url('https://img.freepik.com/fotos-gratis/paisagem-montanhosa-ao-ar-livre-cena-de-neve-generativa-ai_188544-9110.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1708473600&semt=ais')]">

                    </section>

                    

                </section>
            </div>
   
        </>

        
    );
}
