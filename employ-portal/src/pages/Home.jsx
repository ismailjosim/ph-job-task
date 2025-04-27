import { useEffect, useState } from 'react'
import HomeFilters from '../components/Home/HomeFilters'
import HomeTable from '../components/Home/HomeTable'
import HomeHeading from '../components/Home/HomeHeading'

const Home = () => {
	const [tableData, setTableData] = useState([])
	const [searchText, setSearchText] = useState('')
	const [date, setDate] = useState(null)
	const [dateRange, setDateRange] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch('/data.json')
			const data = await res.json()
			setTableData(data)
		}
		fetchData()
	}, [])

	return (
		<section className='w-11/12 mx-auto my-10'>
			<HomeHeading />
			<HomeFilters
				searchText={searchText}
				setSearchText={setSearchText}
				date={date}
				setDate={setDate}
				dateRange={dateRange}
				setDateRange={setDateRange}
			/>
			<HomeTable
				tableData={tableData}
				searchText={searchText}
				date={date}
				dateRange={dateRange}
			/>
		</section>
	)
}

export default Home
