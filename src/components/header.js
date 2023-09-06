import Link from "next/link";
import Image from 'next/image'

const Header = () => {
    return (
        <div className='flex justify-between items-center mx-20 my-10'>
            <Image src = "./logo.svg" alt="logo" width={80} height={105}/>
            
            <nav>
                <ul className='flex justify-between'>
                    <li className='m-5'>
                        <Link className="hover:underline font-semibold text-zinc-900" href="/">Home</Link>
                    </li>
                    <li className='m-5'>
                        <Link className="hover:underline font-semibold text-zinc-900" href="/aboutme">About me</Link>
                    </li>
                    <li className='m-5'>
                        <Link className="hover:underline font-semibold text-zinc-900" href="/projects">Projects</Link>
                    </li>

                </ul> 
            </nav>
        </div>
    )
}

export default Header
