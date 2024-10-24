import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import type { Session, User } from 'next-auth';
import type { JWT } from 'next-auth/jwt';

interface ExtendedUser extends User {
  id: string;
  role?: string;
}

interface ExtendedJWT extends JWT {
  id?: string;
  role?: string;
}

interface ExtendedSession extends Session {
  user: ExtendedUser;
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'your username' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const res = await fetch('placeholder/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: credentials?.username,
              password: credentials?.password,
            }),
          });

          const user: ExtendedUser = await res.json();

          if (res.ok && user) {
            return user; 
          } else {
            return null;
          }
        } catch (error) {
          console.error('Authorize error:', error);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],

  session: {
    strategy: 'jwt',
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = (user as ExtendedUser).id;
        token.role = (user as ExtendedUser).role || 'user';
      }
      return token as ExtendedJWT;
    },

    async session({ session, token }) {
      if (session.user) {
        (session.user as ExtendedUser).id = token.id as string;
        (session.user as ExtendedUser).role = token.role as string;
      }
      return session as ExtendedSession;
    },
  },

  pages: {
    signIn: '/login',
  },

  debug: process.env.NODE_ENV === 'development',
});
