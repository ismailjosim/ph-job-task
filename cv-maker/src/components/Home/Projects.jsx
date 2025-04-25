import React from 'react'
import { Form, Input, Button } from 'antd'

const { TextArea } = Input

const Projects = ({ onFinish }) => {
	const [form] = Form.useForm()

	const handleFinish = (values) => {
		console.log('Project Info:', values)
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
					label='Project Name'
					name='projectName'
					rules={[{ required: true, message: 'Please enter project name' }]}
				>
					<Input placeholder='My Awesome App' />
				</Form.Item>

				<Form.Item
					label='Live URL'
					name='projectUrl'
					rules={[{ type: 'url', message: 'Enter a valid URL' }]}
				>
					<Input placeholder='https://myawesomeapp.com' />
				</Form.Item>

				<Form.Item
					label='GitHub Repo'
					name='github'
					rules={[{ type: 'url', message: 'Enter a valid GitHub URL' }]}
				>
					<Input placeholder='https://github.com/username/project' />
				</Form.Item>

				<Form.Item
					label='Description'
					name='description'
					rules={[
						{ required: true, message: 'Please enter project description' },
					]}
				>
					<TextArea rows={4} placeholder='What does the project do?' />
				</Form.Item>

				<Form.Item
					label='Tech Stack'
					name='techStack'
					rules={[{ required: true, message: 'List the technologies used' }]}
				>
					<Input placeholder='React, Node.js, MongoDB' />
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

export default Projects
