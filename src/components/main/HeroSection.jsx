import { center } from '../../App.module.css'

export default function HeroSection() {
	return (
		<div className='relative'>
			<img
				className='w-full'
				src='/hero_section.avif'
				alt='Coding'
				style={{ aspectRatio: '5/1' }}
			/>
			<div className={`absolute ${center}`}>
				<h1
					className='text-center text-white'
					style={{
						textShadow: '2px 3px 4px rgba(0,0,0,.5)',
					}}
				>
					Innovative Software Solutions for Your Business
				</h1>
				<p
					className='text-center text-white'
					style={{
						textShadow: '2px 3px 4px rgba(0,0,0,.5)',
					}}
				>
					We build software that accelerates your business growth
				</p>
			</div>
			<div className='absolute' style={{ top: '86%', right: '1%' }}>
				<button>Start a Project</button>
				<button>Explore Services</button>
			</div>
		</div>
	)
}
