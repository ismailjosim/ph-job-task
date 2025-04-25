import { Button, DatePicker, Form, Input } from 'antd'
import React from 'react'

const { TextArea } = Input
const { RangePicker } = DatePicker

const Experiences = ({ onFinish }) => {
	const [form] = Form.useForm()

	const handleFinish = (values) => {
		// Transform dates into readable strings
		const formatted = {
			...values,
			duration: values.duration?.map((date) => date.format('YYYY-MM-DD')),
		}
		console.log('Experience Info:', formatted)
		onFinish(formatted)
	}

	return (
		<div className='max-w-3xl mx-auto'>
			<Form
				form={form}
				layout='vertical'
				onFinish={handleFinish}
				autoComplete='off'
			>
				<Form.Item
					label='Job Title'
					name='jobTitle'
					rules={[{ required: true, message: 'Please enter job title' }]}
				>
					<Input placeholder='Frontend Developer' />
				</Form.Item>

				<Form.Item
					label='Company Name'
					name='company'
					rules={[{ required: true, message: 'Please enter company name' }]}
				>
					<Input placeholder='Tech Corp' />
				</Form.Item>

				<Form.Item
					label='Location'
					name='location'
					rules={[{ required: true, message: 'Please enter location' }]}
				>
					<Input placeholder='Dhaka, Bangladesh' />
				</Form.Item>

				<Form.Item
					label='Duration'
					name='duration'
					rules={[{ required: true, message: 'Please select duration' }]}
				>
					<RangePicker picker='month' />
				</Form.Item>

				<Form.Item
					label='Job Description'
					name='description'
					rules={[{ required: true, message: 'Please enter job description' }]}
				>
					<TextArea rows={4} placeholder='What did you work on?' />
				</Form.Item>

				<Form.Item>
					<Button type='primary' htmlType='submit'>
						Next
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default Experiences
