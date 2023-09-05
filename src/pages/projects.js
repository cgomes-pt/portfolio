import Page from '@/components/page'
import { FaGithubAlt} from "react-icons/fa";

export default function Projects({Component, pageProps}) {
    return (
		<Page>
            <div className='ml-20 mr-20 border-2  border-b-zinc-900'> 
                <div className='mb-5'>
                    <h1 className='font-serif font-semibold text-xl'>Portfolio</h1>
						<a href='https://github.com/cgomes-pt/portfolio' target='blank' rel="noopener noreferrer" className='flex items-center'>
                            <FaGithubAlt className='mr-2 text-zinc-900 h-5 w-5 drop-shadow'/>
                            <span>View Github</span>    
                        </a>
                </div>
                <p className='italic font-semibold'> Tools used: Next.js, Tailwind, Framer Motion</p> 
            </div>

            <div className='ml-20 mr-20 border-2 border-b-zinc-900'> 
                <div>
                    <h1 className='font-serif font-semibold text-xl'>GAN-Anime-Face</h1>
						<a href='https://github.com/cgomes-pt/GAN-Anime-Face' target='blank' rel="noopener noreferrer" className='flex items-center'>
                            <FaGithubAlt className='mr-2 text-zinc-900 h-5 w-5 drop-shadow'/>
                            <span>View Github</span>    
                        </a>
                </div>
                <p className='mb-5'>The objective of this work was to explore GANs and/or Autoencoders in a problem of our choice. Since I love watching anime, I decided to try using GANs to generate random anime faces.</p>
                <p className='italic font-semibold'> Tools used: Python, GAN, WGAN, Pandas, Numpy, OpenCV, Matplotlib, Keras, Tensorflow, PIL</p> 
            </div>

            <div className='ml-20 mr-20 border-2 border-b-zinc-900'> 
                <div>
                    <h1 className='font-serif font-semibold text-xl'>Perfil-CG</h1>
						<a href='https://github.com/cgomes-pt/perfil-cg' target='blank' rel="noopener noreferrer" className='flex items-center'>
                            <FaGithubAlt className='mr-2 text-zinc-900 h-5 w-5 drop-shadow'/>
                            <span>View Github</span>    
                        </a>
                </div>
                <p className='mb-5'>Set of projects and notes carried out during my major in computer graphics.</p>
                <p className='italic font-semibold'> Tools used: Java</p> 
            </div>

            <div className='ml-20 mr-20 border-2 border-b-zinc-900'> 
                <div>
                    <h1 className='font-serif font-semibold text-xl'>Stack Overflow - Queries</h1>
						<a href='https://github.com/cgomes-pt/Stack-Overflow--LI3--Java' target='blank' rel="noopener noreferrer" className='flex items-center'>
                            <FaGithubAlt className='mr-2 text-zinc-900 h-5 w-5 drop-shadow'/>
                            <span>View Github</span>    
                        </a>
                </div>
                <p className='mb-5'>Parse XML data from Stack Overflow into hash maps to answer queries </p>
                <p className='italic font-semibold'> Tools used: Java</p> 
            </div>

            <div className='ml-20 mr-20 border-2 border-b-zinc-900'> 
                <div>
                    <h1 className='font-serif font-semibold text-xl'>Media-Center</h1>
						<a href='https://github.com/cgomes-pt/Media-Center' target='blank' rel="noopener noreferrer" className='flex items-center'>
                            <FaGithubAlt className='mr-2 text-zinc-900 h-5 w-5 drop-shadow'/>
                            <span>View Github</span>    
                        </a>
                </div>
                <p className='mb-5'>Media-Center is basically an attempt to implement Spotify features, such as listening to music, creating accounts or adding songs.</p>
                <p className='italic font-semibold'> Tools used: Java</p> 
            </div>

			<div className='ml-20 mr-20 border-2 border-b-zinc-900'> 
                <div>
                    <h1 className='font-serif font-semibold text-xl'>Deploying Ghost</h1>
						<a href='https://github.com/cgomes-pt/ASCN-TP-2022' target='blank' rel="noopener noreferrer" className='flex items-center'>
                            <FaGithubAlt className='mr-2 text-zinc-900 h-5 w-5 drop-shadow'/>
                            <span>View Github</span>    
                        </a>
                </div>
                <p className='mb-5'> This work consisted of installing and configuring the Ghost application automatically. Monitoring and Scaling tools were also applied to this application.</p>
                <p className='italic font-semibold'> Tools used: Ansible, MySQL, Kubernetes</p> 
            </div>

            <div className='ml-20 mr-20 mb-20 border-2 border-b-zinc-900'> 
                <div>
                    <h1 className='font-serif font-semibold text-xl'>Back To The Future</h1>
						<a href='https://github.com/cgomes-pt/back-to-the-future' target='blank' rel="noopener noreferrer" className='flex items-center'>
                            <FaGithubAlt className='mr-2 text-zinc-900 h-5 w-5 drop-shadow'/>
                            <span>View Github</span>    
                        </a>
                </div>
                <p className='mb-5'>This was a small project I did to learn some HTML and CSS basics.</p>
                <p className='italic font-semibold'> Tools used: HTML, CSS</p> 
            </div>

		</Page>

    )

}
 