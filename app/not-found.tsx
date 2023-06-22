import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='not-found'>
        <p><mark>Are you lost?</mark></p>
        <h2><mark>404 - Not Found</mark></h2>
        <Link  className='btn' href={'/'}>
            Go back...
        </Link>
    </div>
  )
}