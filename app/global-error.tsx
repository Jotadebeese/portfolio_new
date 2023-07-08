'use client'
import Link from 'next/link'
export default function GlobalError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <html>
      <body className='error-container fade-in'>
        <p className='something-wrong'>error</p>
        <p>Looks like something<br />didn't go as planned.<br />you can:</p>
        <button onClick={() => reset()}>Try again</button>
        <br/>
        <Link  className='btn' href={'/'}>
                Or go back
        </Link>
    </body>
    </html>
  )
}