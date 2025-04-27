import { Button } from 'antd'
import React from 'react'

const HomeHeading = () => {
	return (
		<div className='flex justify-between items-center'>
			<h2 className='text-lg font-semibold'>Payroll List</h2>
			<Button size='large' type='primary'>
				Download CSV
			</Button>
		</div>
	)
}

export default HomeHeading
