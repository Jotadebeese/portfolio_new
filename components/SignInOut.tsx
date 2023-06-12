'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from "next/link";

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
            <div className='box-container'>
                <p>Welcome {userName}</p>
                <div className='little-box'>
                    <Link className='btn' href={'/admin/new/'}>Add New</Link>
                    <button onClick={() => signOut()}>Sign Out</button>
                </div>
            </div>
        )
    }

    return (
        <div className='box-container'>
            <p>Not signed in</p>
            <button onClick={() => signIn()}>Sign In</button>
        </div>
    )
}