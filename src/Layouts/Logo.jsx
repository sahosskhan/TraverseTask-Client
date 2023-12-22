import { Link } from 'react-router-dom'


const Logo = () => {
  return (
    <Link to='/'>
<h1 className='flex gap-x-2 text-fuchsia-500 text-3xl'> <img className='h-10 mt-[6px]' src="https://i.ibb.co/z55XbY4/image.png" alt="" /> <span className='mt-[6px]'>TraverseTask</span></h1>
    </Link>
  )
}

export default Logo