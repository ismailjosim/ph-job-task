import React from 'react'

const PrevExperiences = ({ info }) => {
	const { title, company, location, duration, details } = info || {}
	return (
		<div className='mb-6'>
			<h2 className='text-xl font-bold border-b-2 pb-5 border-[#000000] mb-2'>
				Experience
			</h2>
			<p>
				{cvData?.personal?.interests ||
					'Victorian England, Literary Theory, Detective Fiction, Historical Fiction'}
			</p>
		</div>
	)
}

export default PrevExperiences
