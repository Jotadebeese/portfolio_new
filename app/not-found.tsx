import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='not-found'>
        <h1 className='box-404'>404</h1>
        <p><mark>This page does not exist</mark></p>
        <br/>
        <Link  className='btn' href={'/'}>
            Go back...
        </Link>
    </div>
  )
}