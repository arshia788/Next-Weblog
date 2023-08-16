import CredentialsProvider from 'next-auth/providers/credentials';
import {NextAuth} from 'next-auth/react';
import { verifyPassword } from '@/utils/auth';
import connectDB from '@/utils/connectDB';
import User from '@/models/User';

const authOptions={
    session:{strategy:"jwt"},
    providers:[
        CredentialsProvider({
            async authorize(credentials,req){
                
                try {
                    await connectDB()
                } catch (error) {
                    throw new Error("Failed to connect to DB")
                }

                const {email , password}= credentials;

                if(!email || !password) throw new Error("Invalid Data!")

                const user= await User.findOne({email})

                if(!user) throw new Error("No user exists")

                const isValid= await verifyPassword(password, user.password)

                if(!isValid) throw new Error("wrong email or password")
                
                return {email}
            }

            
        })
    ]
}

export default NextAuth(authOptions)
