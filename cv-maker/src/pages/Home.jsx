import { Steps } from 'antd'
import { useState } from 'react'
const stepsData = [
	{
		title: 'Personal Details',
	},
	{
		title: 'Experience',
	},
	{
		title: 'Projects',
	},
	{
		title: 'academics and extra activities',
	},
	{
		title: 'Preview',
	},
]
const Home = () => {
	const [level, setLevel] = useState(0)

	const handleStepChange = (current) => {
		setLevel(current)
	}
	return (
		<section className='w-11/12 mx-auto my-10'>
			<Steps
				size='default'
				current={0}
				items={stepsData}
				onChange={handleStepChange}
			/>
			<div className='mt-10'>
				<h2 className='text-xl font-semibold'>
					Step: {stepsData[level].title}
				</h2>
				{/* You can render each form component based on `level` here */}
			</div>
		</section>
	)
}

export default Home
