export default function HeroSection() {
	return (
		<div style={{ position: 'relative' }}>
			<img
				src='/hero_section.avif'
				alt='Coding'
				style={{ width: '100%', aspectRatio: '5/1' }}
			/>
			<div
				style={{
					position: 'absolute',
					top: '25%',
					left: '50%',
					transform: 'translateX(-50%)',
				}}
			>
				<h1
					style={{
						textAlign: 'center',
						color: 'white',
						textShadow: '2px 3px 4px rgba(0,0,0,.5)',
					}}
				>
					Innovative Software Solutions for Your Business
				</h1>
				<p
					style={{
						textAlign: 'center',
						color: 'white',
						textShadow: '2px 3px 4px rgba(0,0,0,.5)',
					}}
				>
					We build software that accelerates your business growth
				</p>
			</div>
			<div style={{ position: 'absolute', top: '86%', right: '1%' }}>
				<button>Start a Project</button>
				<button>Explore Services</button>
			</div>
		</div>
	)
}
