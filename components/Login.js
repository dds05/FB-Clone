/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from "next/image"
import {signIn} from 'next-auth/client';

function Login() {
    return (
        <div className='grid place-content-center'>
            <Image
            src="https://links.papareact.com/t4i"
            height={400}
            width={400}
            objectFit="contain"
            />
            <h1 onClick={signIn} className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer'>Login with Facebook</h1>
        </div>
    )
}

export default Login
