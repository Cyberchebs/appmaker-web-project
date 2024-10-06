import React from 'react'
import AboutCard from '../partials/aboutussection/aboutCard'

const Aboutus = () => {
	return (
		<div className='p-[65px]'>
			<h1 className='purple-dark text-center mb-[50px] mt-[50px] '>About Us</h1>
			<div className='relative ml-[250px]'>
				<img
					src='/aboutUs-team.png'
					alt=''
					className='rounded-md w-[1025px] h-[535px]'
				/>
				<div className='absolute bottom-[-80px] left-[-250px] w-[519px] h-[320px] bg-white z-10 rounded-md p-[36px] space-y-3'>
					<h6>At App Maker</h6>
					<p className='text-[16px]'>
						we are passionate about delivering innovative software solutions
						that drive business success. With a dedicated team of experts in web
						development, mobile applications, and cloud technology, we bring a
						wealth of experience and creativity to every project. We believe in
						collaboration, integrity, and pushing the boundaries of technology
						to deliver outstanding results for our clients.
					</p>
					<button className='btn-purple-light w-[136px] h-[44px]'>
						Contact Us
					</button>
				</div>
			</div>
			<div className='flex mt-48'>
				<AboutCard image='yearsOfExp' number='3' title='Years of Exp' />
				<AboutCard image='experts' number='15' title='Certified Experts' />
				<AboutCard
					image='satisfaction'
					number='100%'
					title='Satisfaction'
					isPlus={false}
				/>
				<AboutCard image='happyCustomers' number='350' title='Happy Clients' />
			</div>
		</div>
	)
}

export default Aboutus
