import { Button } from 'antd'
import HomeFilters from '../components/Home/HomeFilters'
import { useEffect, useState } from 'react'
import HomeTable from '../components/Home/HomeTable'
import HomeHeading from '../components/Home/HomeHeading'
const Home = () => {
	const [tableData, setTableData] = useState([])
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
			<HomeFilters />
			<HomeTable tableData={tableData} setTableData={setTableData} />
		</section>
	)
}

export default Home
