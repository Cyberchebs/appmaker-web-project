export default function AboutCard({image, number, isPlus = true, title}) {
    return (
			<div className='flex flex-col items-center' style={{ flex: 1 }}>
				<img src={`/${image}_icon.svg`} alt={title} width='100vw' />
				<h1 className='mt-6'>
					{number}{' '}
					<span style={{ color: '#ff3b30' }}>{isPlus ? '+' : '%'}</span>
				</h1>
				<h1 className='text-xl'>{title}</h1>
			</div>
		)
}
