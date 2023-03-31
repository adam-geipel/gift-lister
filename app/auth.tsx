'use client'

import authOptions from "../pages/api/auth/[...nextauth]";
import {getServerSession} from 'next-auth/next';
import {SessionProvider} from 'next-auth/react';

const Auth = async ({children} : {children: React.ReactNode}) => {

    
  const session = await getServerSession(authOptions);

    return (<SessionProvider>
        {children}
    </SessionProvider>)
}

export default Auth;