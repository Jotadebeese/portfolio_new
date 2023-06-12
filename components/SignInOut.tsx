'use client';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function SignInOut() {
    const { data: session, status } = useSession();
    const userName = session?.user?.name
    console.log(session, status);

    if (status === "loading") {
        return (
            <div className="loader-container fade-in">
                <img src="/temp.gif" />
                <div className="loader"></div>
                <p>Loading data  .  .  .</p>
            </div>
        );
    }

    if (status === "authenticated") {
        return (
            <>
                <p>Welcome {userName}</p>
                <button onClick={() => signOut()}>Sign Out</button>
            </>
        )
    }

    return (
        <>
            <p>Not signed in</p>
            <button onClick={() => signIn()}>Sign In</button>
        </>
    )
}