import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from '../../../lib/mongodb';

// A comprehensive resource for next-auth configuration: https://www.hamedbahram.io/notes/next-auth-v4

const authOptions = {
    //Configure JWT
    pages: {
        signIn: '/login',
    },
    session: {
        strategy: 'jwt',
    },
    //Specify Provider
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    adapter: MongoDBAdapter(clientPromise, {databaseName: "giftLister"}),
    callbacks: {
        async signIn({ account, profile }) {
            return true // Do different verification for other providers that don't have `email_verified`
        },
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        },

        async jwt({ user, token }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (user) {
                token.uid = user.id;
            }

            return token;
        },
        async session({ session, token }) {
            // Send properties to the client, like an access_token and user id from a provider.
            if (session?.user) {
                session.user.id = token.uid;
            }
            return Promise.resolve(session);
        },
    }
};

export default NextAuth(authOptions);