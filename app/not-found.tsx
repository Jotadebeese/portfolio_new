import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='not-found fade-in'>
        <span className='box-404'>404</span>
        <p>This page might not exist,<br />or some work<br />might be in progress.</p>
        <br/>
        <Link  className='btn' href={'/'}>
            Go back...
        </Link>
    </div>
  )
}