import { Steps } from 'antd'
import { useState } from 'react'
import PersonalInfo from '../components/Home/PersonalInfo'
import Experiences from '../components/Home/Experiences'
import Projects from '../components/Home/Projects'
import Activities from '../components/Home/Activities'
import Preview from '../components/Home/Preview'

const stepsData = [
	{ title: 'Personal Details' },
	{ title: 'Experience' },
	{ title: 'Projects' },
	{ title: 'Extra Activities' },
	{ title: 'Preview' },
]

const Home = () => {
	const [level, setLevel] = useState(0)

	// Shared state to collect form data
	const [cvData, setCvData] = useState({
		personal: null,
		experience: null,
		project: null,
		academic: null,
	})

	// Handlers to receive data from each step and go to next
	const handlePersonalFinish = (data) => {
		console.log(data)
		setCvData((prev) => ({ ...prev, personal: data }))
		setLevel(1)
	}

	const handleExperienceFinish = (data) => {
		setCvData((prev) => ({ ...prev, experience: data }))
		setLevel(2)
	}

	const handleProjectFinish = (data) => {
		setCvData((prev) => ({ ...prev, project: data }))
		setLevel(3)
	}

	const handleAcademicFinish = (data) => {
		setCvData((prev) => ({ ...prev, academic: data }))
		setLevel(4)
	}
	const handlePreviousBtn = () => {
		setLevel(level - 1)
	}

	return (
		<section className='w-11/12 md:w-3/4 lg:w-2/3 mx-auto my-10'>
			<Steps
				size='default'
				responsive
				current={level}
				items={stepsData}
				onChange={(current) => setLevel(current)}
			/>
			<div className='mt-10'>
				<h2 className='text-xl font-semibold mb-4'>
					Step-{level + 1}: {stepsData[level].title}
				</h2>

				{level === 0 && <PersonalInfo onFinish={handlePersonalFinish} />}
				{level === 1 && (
					<Experiences
						handlePreviousBtn={handlePreviousBtn}
						onFinish={handleExperienceFinish}
					/>
				)}
				{level === 2 && (
					<Projects
						handlePreviousBtn={handlePreviousBtn}
						onFinish={handleProjectFinish}
					/>
				)}
				{level === 3 && (
					<Activities
						handlePreviousBtn={handlePreviousBtn}
						onFinish={handleAcademicFinish}
					/>
				)}
				{level === 4 && (
					<Preview handlePreviousBtn={handlePreviousBtn} cvData={cvData} />
				)}
			</div>
		</section>
	)
}

export default Home
