export default function Header() {
	return (
		<div className='px-[106px] py-[11px] w-full purple-bg-light '>
			<nav className='flex justify-between items-center'>
				<div>
					<img
						className='w-[218px] h-[81.49px]'
						src='/logos/appMaker_logo.png'
						alt=''
					/>
				</div>
				<ul className='flex gap-[46px]'>
					<li className='cursor-pointer hover:scale-110 transition-transform duration-300'>
						Home
					</li>
					<li className='cursor-pointer hover:scale-110 transition-transform duration-300'>
						Services
					</li>
					<li className='cursor-pointer hover:scale-110 transition-transform duration-300'>
						Portfolio
					</li>
					<li className='cursor-pointer hover:scale-110 transition-transform duration-300'>
						About us
					</li>
					<li className='cursor-pointer hover:scale-110 transition-transform duration-300'>
						Contact
					</li>
				</ul>

				<button className='h-[158] w-[49] btn-purple-dark hover:bg-purple-500 hover:border-purple-500 rounded transition-colors duration-300'>
					Get a Quote
				</button>
			</nav>
		</div>
	)
}
