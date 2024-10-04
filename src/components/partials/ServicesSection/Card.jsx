export default function Card({ image, title, desc }) {
	return (
		<div className='flex flex-col gap-5 bg-white p-5' style={{ borderRadius: '8px' }}>
			<img src={`/${image}`} alt={title} />
			<h6 className='capitalize'>{title}</h6>
			<p style={{ color: '#8A92A6' }}>{desc}</p>
			<button className="btn-purple-light" style={{ fontWeight: 'bold', width: '60%' }}>View Details</button>
		</div>
	)
}
