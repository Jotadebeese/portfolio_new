import Link from 'next/link'
 
export default function ComingSoon() {
  return (
    <div className='not-found fade-in'>
        <p className='something-wrong'>Work in progress</p>
        <p>This section is being<br/>developed,<br/>come back later.</p>
        <br/>
        <Link  className='btn' href={'/'}>
            Go back...
        </Link>
    </div>
  )
}