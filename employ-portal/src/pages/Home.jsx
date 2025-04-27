import { useEffect, useState } from 'react'
import HomeFilters from '../components/Home/HomeFilters'
import HomeTable from '../components/Home/HomeTable'
import HomeHeading from '../components/Home/HomeHeading'
import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver'
const Home = () => {
	const [tableData, setTableData] = useState([])
	const [searchText, setSearchText] = useState('')
	const [date, setDate] = useState(null)
	const [dateRange, setDateRange] = useState([])

	const handleExportToExcel = () => {
		const data = tableData.map((item) => {
			return {
				'Employee Name': item.name,
				Date: item.date,
				'Property Name': item.property_name,
				'Check In': item.checkIn,
				'Check Out': item.checkOut,
				'Time Worked': item.timeWorked,
				Units: item.units,
				'Avg Sec/Unit': item.avg,
			}
		})
		// Create a new worksheet
		const ws = XLSX.utils.json_to_sheet(data)
		const wb = XLSX.utils.book_new()
		XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')

		// Generate Excel file and trigger download
		const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' })
		const blob = new Blob([excelBuffer], { type: 'application/octet-stream' })
		saveAs(blob, 'table-data.xlsx')
	}

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
			<HomeHeading handleExportToExcel={handleExportToExcel} />
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
