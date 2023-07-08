'use client' // Error components must be Client Components
 
import { useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
 
export default function Error({
  error,
}: {
  error: Error
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  const router = useRouter()
 
  return (
    <div className='error-container fade-in'>
      <p className='something-wrong'>error</p>
      <p>Looks like something<br />didn't go as planned.<br />you can:</p>
{/*       <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => router.refresh()
        }
      >
        Try again
      </button> */}
      <br/>
      <Link  className='btn' href={'/'}>
            Or go back
      </Link>
    </div>
  )
}