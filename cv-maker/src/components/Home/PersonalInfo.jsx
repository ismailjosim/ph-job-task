import { Form, Input, Button } from 'antd'
import { useEffect } from 'react'

const PersonalInfo = ({ onFinish, initialValues }) => {
	const [form] = Form.useForm()

	useEffect(() => {
		if (initialValues) {
			form.setFieldsValue(initialValues)
		}
	}, [initialValues, form])

	const handleFinish = (values) => {
		onFinish(values)
	}

	return (
		<Form
			className='grid grid-cols-2 gap-5'
			form={form}
			size='large'
			layout='vertical'
			onFinish={handleFinish}
			autoComplete='off'
		>
			<Form.Item
				label='Full Name'
				name='fullName'
				rules={[{ required: true, message: 'Please enter your full name' }]}
			>
				<Input placeholder='John Doe' />
			</Form.Item>
			<Form.Item
				label='Email'
				name='email'
				rules={[
					{ required: true, message: 'Please enter your email' },
					{ type: 'email', message: 'Enter a valid email address' },
				]}
			>
				<Input placeholder='john@example.com' />
			</Form.Item>
			<Form.Item
				className='col-span-2'
				label='Address'
				name='address'
				rules={[{ required: true, message: 'Please enter your address' }]}
			>
				<Input placeholder='Dhaka, Bangladesh' />
			</Form.Item>

			<Form.Item
				label='Phone Number'
				name='phone'
				rules={[{ required: true, message: 'Please enter your phone number' }]}
			>
				<Input placeholder='+8801XXXXXXXXX' />
			</Form.Item>

			<Form.Item
				label='LinkedIn'
				name='linkedin'
				rules={[{ type: 'url', required: true, message: 'Enter a valid URL' }]}
			>
				<Input placeholder='https://linkedin.com/in/yourname' />
			</Form.Item>

			<Form.Item
				label='GitHub'
				name='github'
				rules={[{ type: 'url', required: true, message: 'Enter a valid URL' }]}
			>
				<Input placeholder='https://github.com/yourusername' />
			</Form.Item>

			<Form.Item
				label='Portfolio Website'
				name='portfolio'
				rules={[{ type: 'url', required: true, message: 'Enter a valid URL' }]}
			>
				<Input placeholder='https://yourportfolio.com' />
			</Form.Item>

			<Form.Item
				className='col-span-2'
				label='Profile Summary'
				name='summary'
				rules={[{ required: true, message: 'Please enter a summary' }]}
			>
				<Input.TextArea rows={4} placeholder='A short bio about you...' />
			</Form.Item>

			<Form.Item className='col-span-2 flex justify-end'>
				<Button type='primary' size='large' htmlType='submit'>
					Next
				</Button>
			</Form.Item>
		</Form>
	)
}

export default PersonalInfo
