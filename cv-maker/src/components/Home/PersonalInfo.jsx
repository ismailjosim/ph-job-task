import { Form, Input, Button } from 'antd'

const PersonalInfo = ({ onFinish }) => {
	const [form] = Form.useForm()

	const handleFinish = (values) => {
		console.log('Personal Info Submitted:', values)
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
					label='Phone Number'
					name='phone'
					rules={[
						{ required: true, message: 'Please enter your phone number' },
					]}
				>
					<Input placeholder='+8801XXXXXXXXX' />
				</Form.Item>

				<Form.Item
					label='Address'
					name='address'
					rules={[{ required: true, message: 'Please enter your address' }]}
				>
					<Input placeholder='Dhaka, Bangladesh' />
				</Form.Item>

				<Form.Item
					label='LinkedIn'
					name='linkedin'
					rules={[{ type: 'url', message: 'Enter a valid URL' }]}
				>
					<Input placeholder='https://linkedin.com/in/yourname' />
				</Form.Item>

				<Form.Item
					label='GitHub'
					name='github'
					rules={[{ type: 'url', message: 'Enter a valid URL' }]}
				>
					<Input placeholder='https://github.com/yourusername' />
				</Form.Item>

				<Form.Item
					label='Portfolio Website'
					name='portfolio'
					rules={[{ type: 'url', message: 'Enter a valid URL' }]}
				>
					<Input placeholder='https://yourportfolio.com' />
				</Form.Item>

				<Form.Item
					label='Profile Summary'
					name='summary'
					rules={[{ required: true, message: 'Please enter a summary' }]}
				>
					<Input.TextArea rows={4} placeholder='A short bio about you...' />
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

export default PersonalInfo
