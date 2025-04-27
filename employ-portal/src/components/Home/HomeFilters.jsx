import { Input, DatePicker, Button } from 'antd'
import dayjs from 'dayjs'
import { RxCross2 } from 'react-icons/rx'
const { RangePicker } = DatePicker

const HomeFilters = ({
	searchText,
	setSearchText,
	date,
	setDate,
	dateRange,
	setDateRange,
}) => {
	const handleClear = () => {
		setSearchText('')
		setDate(dayjs())
		setDateRange([])
	}

	const rangePresets = [
		{
			label: 'This Week',
			value: [dayjs().startOf('week'), dayjs().endOf('week')],
		},
		{
			label: 'Last Week',
			value: [
				dayjs().subtract(1, 'week').startOf('week'),
				dayjs().subtract(1, 'week').endOf('week'),
			],
		},
		{
			label: 'This Month',
			value: [dayjs().startOf('month'), dayjs().endOf('month')],
		},
		{
			label: 'Last Month',
			value: [
				dayjs().subtract(1, 'month').startOf('month'),
				dayjs().subtract(1, 'month').endOf('month'),
			],
		},
	]

	return (
		<div className='flex items-center gap-4 my-5'>
			<Input
				size='large'
				placeholder='Search by Property or Employee'
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
				className='w-full'
			/>
			<DatePicker
				size='large'
				value={date}
				onChange={(value) => setDate(value)}
				className='w-full'
			/>
			<RangePicker
				size='large'
				presets={rangePresets}
				value={dateRange}
				onChange={(values) => setDateRange(values)}
				className='w-full'
			/>
			<Button onClick={handleClear} size='large' type='default'>
				<span>Clear Filters</span>
				<RxCross2 />
			</Button>
		</div>
	)
}

export default HomeFilters
