import Image from 'next/image'
import { FaGithubAlt,FaLinkedinIn } from "react-icons/fa";
import Page from '@/components/page';


export default function Home() {
	return (
		<Page>
			<div className='flex justify-between'>

				<div className='m-20'>
					<p className='text-4xl text-zinc-900 uppercase'>Hey,</p>
					<p className='text-6xl text-zinc-900 uppercase'>My name is Carlos Gomes.</p> 
					<p className='text-zinc-900'>Software Engineering @ UMinho</p>
					<div className='flex'>
						<a href='https://github.com/cgomes-pt' target='blank' rel="noopener noreferrer"><FaGithubAlt className='mr-5 text-zinc-900 h-5 w-5 drop-shadow'/></a>
						<a href='https://www.linkedin.com/in/cgpt/' target='blank' rel="noopener noreferrer"><FaLinkedinIn className='mr-5 text-zinc-900 h-5 w-5'/></a>
					</div>
				</div>
				<div>
					<Image src="/panda.png" alt="Panda" width={300} height={200} className='me-20' />
				</div>

			</div>


		</Page>
	)
}
