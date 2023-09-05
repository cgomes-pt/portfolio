import Page from '@/components/page'

export default function AboutMe({Component, pageProps}) {
    return (
		<Page>
			<div className='ml-20 mr-20'>
				<h1 className='font-serif font-semibold text-5xl'>About Me.</h1>
				<p className='mt-10 font-mono'>Hey!My name is Carlos, I have a degree in computer engineering and I am currently working on my master's thesis.</p>
				<p className='font-mono mt-3'>Throughout the course I had experience with several languages such as Haskell, C, Java or Python, but if I had to choose one, then it would be Python. I have some experience with tools such as Github, Tensorflow or even Photoshop. Besides my studies, I completed an summer internship at Anybrain, specializing in data science where I furthered my knowledge and utilized tools like H2O and OpenCV</p>

				<p className='font-mono mt-3'>I’m a simple person with the goal of learning more and improving as a developer. In my free time, I love playing games and watching anime.😉</p>
			</div>
		</Page>

    )

}
  