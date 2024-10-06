export default function Footer() {
	return (
		<div className='flex purple-bg-dark purple-light mt-10 py-10 px-32 gap-28'>
			<div className='flex flex-col gap-6' style={{ flex: 1 }}>
				<h1 className='text-center text-3xl'>About Us</h1>
				<p className='text-base'>
					We build software that accelerates your business growth. Contact us to
					create robust software solutions for your business.
				</p>
				<div className='flex px-3 gap-8 mt-5'>
					<img src='/facebook.png' alt='Facebook' style={{ flex: 1 }} />
					<img src='/instagram.png' alt='Instagram' style={{ flex: 1 }} />
					<img src='/twitter.png' alt='Twitter' style={{ flex: 1 }} />
					<img src='/linkedin.png' alt='Linkedin' style={{ flex: 1 }} />
				</div>
			</div>
			<div className='flex flex-col gap-8' style={{ flex: 1 }}>
				<h1 className='text-center text-3xl'>Quick Links</h1>
				<div className='ms-10 flex flex-col gap-8'>
					<h1 className='text-sm'>Services</h1>
					<h1 className='text-sm'>Portfolio</h1>
					<h1 className='text-sm'>Contact</h1>
				</div>
			</div>
			<div className='flex flex-col gap-6' style={{ flex: 1 }}>
				<h1 className='text-center text-3xl'>Contact Info</h1>
				<h1 className='text-sm mt-2'>
					Address<span className='font-normal'>: Uttar Pradesh, India</span>
				</h1>
				<h1 className='text-sm'>
					Phone<span className='font-normal'>: (+91) 760791243</span>
				</h1>
				<h1 className='text-sm'>
					Email<span className='font-normal'>: appmaker8790@eamil.com</span>
				</h1>
			</div>
		</div>
	)
}
