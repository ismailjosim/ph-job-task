import React, { useRef } from 'react'
import { Button } from 'antd'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { LeftOutlined } from '@ant-design/icons'
import PrevHeader from './Preview/PrevHeader'

const Preview = ({ cvData, handlePreviousBtn }) => {
	console.log(cvData)
	const previewRef = useRef()

	const handleDownloadPDF = async () => {
		const element = previewRef.current
		const canvas = await html2canvas(element, {
			useCORS: true,
			backgroundColor: '#ffffff',
			scale: 2,
		})
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
			<div
				ref={previewRef}
				className='p-6 bg-white border text-left'
				style={{
					width: '100%',
					backgroundColor: '#ffffff',
				}}
			>
				{/* section: Header Section */}
				<PrevHeader info={cvData?.personal} />

				{/* section: Experiences  */}
				<div className='mb-6'>
					<h2 className='text-xl font-bold border-b-2 pb-5 border-[#000000] mb-2'>
						RESEARCH INTERESTS
					</h2>
					<p>
						{cvData?.personal?.interests ||
							'Victorian England, Literary Theory, Detective Fiction, Historical Fiction'}
					</p>
				</div>

				{/* section: Education */}
				<div className='mb-6'>
					<h2 className='text-xl font-bold border-b-2 pb-5 border-[#000000] mb-2'>
						EDUCATION
					</h2>
					<div className='mb-2'>
						{/* <p className='font-semibold'>
							{cvData?.academic?.degree || 'PhD in English Literature'},{' '}
							{cvData?.academic?.passingYear || '2017'} –{' '}
							{cvData?.academic?.institution || 'Northwestern University'}.
						</p> */}
						<p className='ml-4'>
							{cvData?.academic?.dissertation ||
								'Dissertation: Searching for Identity in Victorian Detective Fiction. Sherlock Watson, Chair'}
						</p>
					</div>
					<p className='font-semibold'>
						{cvData?.academic?.maDegree || 'MA in English Literature'},{' '}
						{cvData?.academic?.maYear || 'June 2015'} –{' '}
						{cvData?.academic?.maInstitution || 'Northwestern University'}.
					</p>
					<p className='font-semibold'>
						{cvData?.academic?.baDegree || 'BA in English'},{' '}
						{cvData?.academic?.baYear || 'June 2013'} –{' '}
						{cvData?.academic?.baInstitution || 'Northwestern University'}.
					</p>
				</div>

				{/* section: Appointments */}
				<div className='mb-6'>
					<h2 className='text-xl font-bold border-b-2 pb-5 border-[#000000] mb-2'>
						APPOINTMENTS
					</h2>
					<p className='font-semibold'>
						{cvData?.experience?.jobTitle || 'Associate Professor'}:{' '}
						{cvData?.experience?.company ||
							'University of Chicago, Department of English'}
						, {cvData?.experience?.duration?.[0] || 'September 2019'} to{' '}
						{cvData?.experience?.duration?.[1] || 'Present'}.
					</p>
					<p className='font-semibold'>
						{cvData?.experience?.previousJobTitle || 'Assistant Professor'}:{' '}
						{cvData?.experience?.previousCompany ||
							'University of Chicago, Department of English'}
						, {cvData?.experience?.previousDuration?.[0] || 'September 2017'} to{' '}
						{cvData?.experience?.previousDuration?.[1] || 'June 2016'}.
					</p>
				</div>

				{/* section: Publications */}
				<div className='mb-6'>
					<h2 className='text-xl font-bold border-b-2 pb-5 border-[#000000] mb-2'>
						PUBLICATIONS
					</h2>

					<h3 className='font-bold mt-2'>Book</h3>
					<p className='ml-4'>
						{cvData?.publications?.book ||
							'Academician, Andy. Dickens and the Birth of Detective Fiction. Cambridge: Cambridge University Press, 2019'}
					</p>

					<h3 className='font-bold mt-2'>Peer-reviewed Journals</h3>
					<div className='ml-4'>
						<p>
							{cvData?.publications?.journal1 ||
								'Academician, Andy. "Zombies and Axe Murderers in Victorian Detective Fiction," Victorian Literature Journal, 32(4): 38-67.'}
						</p>
						<p>
							{cvData?.publications?.journal2 ||
								'Academician, Andy. "Where None Venture to Dwell: Dickens\' Underground," WHAT: The Dickens Journal 12(3): 25-35.'}
						</p>
						<p>
							{cvData?.publications?.journal3 ||
								'Academician, Andy. "Finding One\'s Way Through Dicken\'s Bleak House," WHAT: The Dickens Journal 11(4): 08-19.'}
						</p>
					</div>
				</div>

				{/* section: Conference Presentations */}
				<div className='mb-6'>
					<h2 className='text-xl font-bold border-b-2 pb-5 border-[#000000] mb-2'>
						CONFERENCE PRESENTATIONS
					</h2>
					<p>
						{cvData?.conferences?.presentation1 ||
							'2021. Academician, Andy. "Bleak House Underground." Dickens Association Annual Conference, Seattle, WA.'}
					</p>
					<p>
						{cvData?.conferences?.presentation2 ||
							'2020. Academician, Andy. "Unexpected Pathways in Detective Fiction." Victorian Studies Annual Conference, San Francisco, CA.'}
					</p>
				</div>
			</div>

			<div className='flex justify-between mt-5'>
				<Button type='primary' size='large' onClick={handlePreviousBtn}>
					<LeftOutlined />
					<span>Previous</span>
				</Button>
				<Button type='primary' size='large' onClick={handleDownloadPDF}>
					Download PDF
				</Button>
			</div>
		</div>
	)
}

export default Preview
