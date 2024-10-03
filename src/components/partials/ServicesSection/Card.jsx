import { center } from '../../../App.module.css'

export default function Card({ image, title }) {
	return (
		<div className='relative'>
			<img src={`/${image}`} alt={title} />
			<h1 className={`capitalize absolute ${center} text-center text-white`}>{title}</h1>
		</div>
	)
}
