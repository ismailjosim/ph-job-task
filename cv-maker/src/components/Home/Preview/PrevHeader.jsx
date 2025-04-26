import { MdWifiCalling3 } from 'react-icons/md'
import { FaEnvelope, FaLinkedinIn } from 'react-icons/fa'
import { FaGithub, FaGlobe } from 'react-icons/fa6'

const PrevHeader = ({ info }) => {
	const { fullName, address, email, phone, website, linkedin, github } =
		info || {}
	return (
		<div className='text-center mb-6 border-b-2 pb-2'>
			<h1 className='text-4xl font-bold pb-2 uppercase'>
				{fullName || 'Md. Jasim'}
			</h1>
			<p className='capitalize text-lg '>{address || 'frontend developer'}</p>
			<p className='text-[#4B5563] '>{address || 'Bhola, Bangladesh'}</p>
			<div className='flex justify-center items-center gap-4 mt-2'>
				<p className='flex items-center gap-1 font-medium'>
					<MdWifiCalling3 />
					<span>{phone || '+880XXXXXXXX'}</span>
				</p>
				<span>|</span>
				<p className='flex items-center gap-1 font-medium'>
					<FaEnvelope color='#000' />
					<span>{email || 'sample@ph.com'}</span>
				</p>
				<span>|</span>
				<a
					href={`${website ? website : '/'}`}
					target='_blank'
					className='flex text-blue-600 underline items-center gap-1 font-medium'
				>
					<FaGlobe color='#000' />
					<span>Portfolio</span>
				</a>
				<span>|</span>
				<a
					href={`${linkedin ? linkedin : '/'}`}
					target='_blank'
					className='flex text-blue-600 underline items-center gap-1 font-medium'
				>
					<FaLinkedinIn color='#000' />
					<span>LinkedIn</span>
				</a>
				<span>|</span>
				<a
					href={`${github ? github : '/'}`}
					target='_blank'
					className='flex text-blue-600 underline items-center gap-1 font-medium'
				>
					<FaGithub color='#000' />
					<span>GitHub</span>
				</a>
			</div>
		</div>
	)
}

export default PrevHeader
