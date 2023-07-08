'use client' // Error components must be Client Components

import Link from 'next/link'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
 
  return (
    <div className='error-container fade-in'>
      <p className='something-wrong'>error</p>
      <p>Looks like something<br />didn't go as planned.<br />you can:</p>
      <button onClick={() => reset()}>Try again</button>
      <br/>
      <Link  className='btn' href={'/'}>
            Or go back
      </Link>
    </div>
  )
}