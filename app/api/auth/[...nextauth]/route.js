import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';

import connectDB from '@/utils/connectDB';
import User from '@/models/User';
import { verifyPassword } from '@/utils/auth';

export const authOptions={
    session:{strategy:"jwt"},
    providers:[
        CredentialsProvider({
            async authorize(credentials,req){
                
                const {email , password}= credentials;
                
                try {
                    await connectDB()
                } catch (error) {
                    throw new Error("Failed to connect to DB")
                }
                
                if(!email || !password) throw new Error("Invalid Data!")

                const user= await User.findOne({email})

                if(!user) throw new Error("No user exists")

                const isValid= await verifyPassword(password, user.password)
                console.log(isValid);
                
                if(!isValid) throw new Error("wrong email or password")
                
                return {email}
            }

            
        })
    ]
}


// ! version app ro bayad injori benevisi.
const handler= NextAuth(authOptions);
export {handler as GET, handler as POST};