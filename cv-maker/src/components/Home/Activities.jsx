import React from 'react'
import { Form, Input, Button, DatePicker } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

const { TextArea } = Input

const Activities = ({ onFinish, handlePreviousBtn }) => {
	const [form] = Form.useForm()

	const handleFinish = (values) => {
		console.log('Academics & Activities:', values)
		onFinish(values)
	}

	return (
		<div className='max-w-3xl mx-auto'>
			<Form
				form={form}
				layout='vertical'
				onFinish={handleFinish}
				autoComplete='off'
			>
				<h2 className='text-lg font-semibold mb-4'>Academic Information</h2>

				<Form.Item
					label='Degree / Education Title'
					name='degree'
					rules={[{ required: true, message: 'Please enter your degree' }]}
				>
					<Input placeholder='BSc in Computer Science' />
				</Form.Item>

				<Form.Item
					label='Institution Name'
					name='institution'
					rules={[{ required: true, message: 'Please enter institution name' }]}
				>
					<Input placeholder='National University' />
				</Form.Item>

				<Form.Item
					label='Result (CGPA or Percentage)'
					name='result'
					rules={[{ required: true, message: 'Please enter your result' }]}
				>
					<Input placeholder='3.90 / 4.00' />
				</Form.Item>

				<Form.Item
					label='Year of Passing'
					name='passingYear'
					rules={[{ required: true, message: 'Please select year' }]}
				>
					<DatePicker picker='year' className='w-full' />
				</Form.Item>

				<h2 className='text-lg font-semibold mb-4 mt-8'>
					Extracurricular Activities
				</h2>

				<Form.Item label='Activity Title' name='activityTitle'>
					<Input placeholder='Volunteer at Hackathon 2023' />
				</Form.Item>

				<Form.Item label='Description' name='activityDescription'>
					<TextArea rows={3} placeholder='Describe your role or achievement' />
				</Form.Item>

				<Form.Item>
					<div className='flex justify-between mt-5'>
						<Button type='primary' size='large' onClick={handlePreviousBtn}>
							<LeftOutlined />
							<span>Previous</span>
						</Button>
						<Button type='primary' size='large' htmlType='submit'>
							<span>Next</span>
							<RightOutlined />
						</Button>
					</div>
				</Form.Item>
			</Form>
		</div>
	)
}

export default Activities
