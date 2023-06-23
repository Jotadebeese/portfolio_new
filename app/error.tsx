'use client' // Error components must be Client Components
 
import { useEffect } from 'react';
import Link from 'next/link'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='error-container fade-in'>
      <h2><mark>Something went wrong...</mark></h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      <br/>
      <Link  className='btn' href={'/'}>
            Or go back
      </Link>
    </div>
  )
}