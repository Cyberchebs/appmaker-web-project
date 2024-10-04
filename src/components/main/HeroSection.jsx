export default function HeroSection() {
	return (
		<div className='flex overflow-hidden purple-bg-light pt-16 px-20 gap-36' style={{ borderBottomRightRadius: '200px', marginBottom: '-50px' }}>
			<div className="flex flex-col gap-4">
				<h1 className='purple-dark'>
					Innovative Software Solutions for your Business
				</h1>
				<p className='purple-dark'>
					We build software that accelerates your business growth.
				</p>
				<div className='flex gap-5 mt-10'>
					<button className="btn-purple-dark">Start a Project</button>
					<button className="btn-purple-light">Explore Services</button>
				</div>
			</div>
			<img src='/hero_section.png' alt='Ilustration' width='40%' />
		</div>
	)
}
