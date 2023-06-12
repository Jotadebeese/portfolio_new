import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';

export const auth = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
    ],
}

const handler = NextAuth(auth);
export { handler as GET, handler as POST };