import React, { useRef } from 'react'
import { Button } from 'antd'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const Preview = ({ cvData }) => {
	const previewRef = useRef()

	const handleDownloadPDF = async () => {
		const element = previewRef.current
		const canvas = await html2canvas(element)
		const imgData = canvas.toDataURL('image/png')
		const pdf = new jsPDF('p', 'mm', 'a4')
		const imgProps = pdf.getImageProperties(imgData)
		const pdfWidth = pdf.internal.pageSize.getWidth()
		const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width

		pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
		pdf.save('my_cv.pdf')
	}

	return (
		<div className='max-w-4xl mx-auto my-10'>
			<div ref={previewRef} className='p-6 border shadow-lg bg-white text-left'>
				<h1 className='text-2xl font-bold mb-4'>
					{cvData?.personal?.fullName}
				</h1>
				<p>
					<strong>Email:</strong> {cvData?.personal?.email}
				</p>
				<p>
					<strong>Phone:</strong> {cvData?.personal?.phone}
				</p>
				<p>
					<strong>LinkedIn:</strong> {cvData?.personal?.linkedin}
				</p>
				<p>
					<strong>GitHub:</strong> {cvData?.personal?.github}
				</p>
				<p className='mt-4'>
					<strong>Summary:</strong> {cvData?.personal?.summary}
				</p>

				<hr className='my-6' />

				<h2 className='text-xl font-semibold'>Experience</h2>
				<p>
					<strong>Title:</strong> {cvData?.experience?.jobTitle}
				</p>
				<p>
					<strong>Company:</strong> {cvData?.experience?.company}
				</p>
				<p>
					<strong>Duration:</strong> {cvData?.experience?.duration?.join(' - ')}
				</p>
				<p>{cvData?.experience?.description}</p>

				<hr className='my-6' />

				<h2 className='text-xl font-semibold'>Projects</h2>
				<p>
					<strong>Name:</strong> {cvData?.project?.projectName}
				</p>
				<p>
					<strong>Live:</strong> {cvData?.project?.projectUrl}
				</p>
				<p>
					<strong>GitHub:</strong> {cvData?.project?.github}
				</p>
				<p>{cvData?.project?.description}</p>
				<p>
					<strong>Tech Stack:</strong> {cvData?.project?.techStack}
				</p>

				<hr className='my-6' />

				<h2 className='text-xl font-semibold'>Education & Activities</h2>
				<p>
					<strong>Degree:</strong> {cvData?.academic?.degree}
				</p>
				<p>
					<strong>Institution:</strong> {cvData?.academic?.institution}
				</p>
				<p>
					<strong>Result:</strong> {cvData?.academic?.result}
				</p>
				<p>
					<strong>Year:</strong>{' '}
					{cvData?.academic?.passingYear?.format?.('YYYY')}
				</p>
				<p>
					<strong>Activity:</strong> {cvData?.academic?.activityTitle}
				</p>
				<p>{cvData?.academic?.activityDescription}</p>
			</div>

			<div className='mt-6 flex gap-4 justify-center'>
				<Button type='primary' onClick={handleDownloadPDF}>
					Download PDF
				</Button>
				{/* For DOCX export, you can implement with 'docx' package */}
			</div>
		</div>
	)
}

export default Preview
