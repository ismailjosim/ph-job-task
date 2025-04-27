import React, { useState } from 'react'
import { Table } from 'antd'
import dayjs from 'dayjs'

const HomeTable = ({ tableData, searchText, date, dateRange }) => {
	const [pagination, setPagination] = useState({
		current: 1,
		pageSize: 10,
	})

	const filteredData = () => {
		return tableData.filter((item) => {
			// step 01: filter by search value
			const matchesSearch =
				item.name.toLowerCase().includes(searchText.toLowerCase()) ||
				item.property_name.toLowerCase().includes(searchText.toLowerCase())

			// Step 2: Filter by date (if `date` is provided)
			let matchesDate = true
			if (date) {
				const itemDate = dayjs(item.date, 'MM-DD-YYYY')
				const filterDate = dayjs(date)
				matchesDate = itemDate.isSame(filterDate, 'day')
			}

			// Step 3: Filter by date range (if `dateRange` is provided)
			let matchesRange = true
			if (dateRange?.length === 2) {
				const itemDate = dayjs(item.date, 'MM-DD-YYYY')
				const startDate = dayjs(dateRange[0]).startOf('day')
				const endDate = dayjs(dateRange[1]).endOf('day')
				matchesRange = itemDate.isAfter(startDate) && itemDate.isBefore(endDate)
			}
			return matchesSearch && matchesDate && matchesRange
		})
	}

	const getPaginatedData = () => {
		const filterData = filteredData()
		const startIndex = (pagination.current - 1) * pagination.pageSize
		const endIndex = startIndex + pagination.pageSize
		return filterData.slice(startIndex, endIndex)
	}

	// handle table data change on pagination
	const handleTableChange = (paginationConfig) => {
		setPagination({
			current: paginationConfig.current,
			pageSize: paginationConfig.pageSize,
		})
	}

	// generate merged data for table
	const generateMergedData = () => {
		const currentData = getPaginatedData()
		const mergedData = []

		const groupByEmployeeAndDate = currentData.reduce((acc, item) => {
			const key = `${item.name}_${item.date}`
			if (!acc[key]) {
				acc[key] = []
			}
			acc[key].push(item)
			return acc
		}, {})

		Object.keys(groupByEmployeeAndDate).forEach((groupKey) => {
			const entries = groupByEmployeeAndDate[groupKey]

			entries.forEach((entry, index) => {
				const checkInTime = dayjs(entry.checkIn, 'h:mm A')
				const checkOutTime = dayjs(entry.checkOut, 'h:mm A')

				let minutes = 0
				let avgSecPerUnit = 0

				if (checkInTime.isValid() && checkOutTime.isValid()) {
					const diffInSeconds = checkOutTime.diff(checkInTime, 'second')
					minutes = Math.round(diffInSeconds / 60)

					if (entry.units && entry.units > 0) {
						avgSecPerUnit = (diffInSeconds / entry.units).toFixed(2)
					}
				}

				mergedData.push({
					...entry,
					timeWorked: `${minutes} min`,
					avg: avgSecPerUnit,
					nameRowSpan: index === 0 ? entries.length + 1 : 0,
				})
			})

			const totalUnits = entries.reduce(
				(sum, entry) => sum + (entry.units || 0),
				0,
			)

			const totalMinutes = entries.reduce((sum, entry) => {
				const checkInTime = dayjs(entry.checkIn, 'h:mm A')
				const checkOutTime = dayjs(entry.checkOut, 'h:mm A')
				let minutes = 0
				if (checkInTime.isValid() && checkOutTime.isValid()) {
					minutes = checkOutTime.diff(checkInTime, 'minute')
				}
				return sum + minutes
			}, 0)
			mergedData.push({
				isTotal: true,
				name: 'Total Time Worked',
				timeWorked: `${Math.round(totalMinutes)} min`,
				units: totalUnits,
				avg: totalUnits ? ((totalMinutes * 60) / totalUnits).toFixed(2) : 0,
			})
		})

		return mergedData
	}

	// table column
	const columns = [
		{
			title: 'Employee Name',
			dataIndex: 'name',
			render: (text, row) => {
				if (row.isTotal) {
					return {
						children: (
							<div className='text-center font-bold text-lg'>{text}</div>
						),
						props: { colSpan: 4 },
					}
				}
				return {
					children: text,
					props: { rowSpan: row.nameRowSpan },
				}
			},
		},
		{
			title: 'Date',
			dataIndex: 'date',
			render: (text, row) => {
				if (row.isTotal) return { children: null, props: { colSpan: 0 } }
				return text
			},
		},
		{
			title: 'Property Name',
			dataIndex: 'property_name',
			render: (text, row) => {
				if (row.isTotal) return { children: null, props: { colSpan: 0 } }
				return text
			},
		},
		{
			title: 'Check In',
			dataIndex: 'checkIn',
			render: (text, row) => {
				if (row.isTotal) return { children: null, props: { colSpan: 0 } }
				return text
			},
		},
		{
			title: 'Check Out',
			dataIndex: 'checkOut',
			render: (text, row) => {
				if (row.isTotal) return { children: null, props: { colSpan: 0 } }
				return text
			},
		},
		{
			title: 'Time Worked',
			dataIndex: 'timeWorked',
			render: (text, row) => {
				if (row.isTotal) return <strong>{text}</strong>
				return text
			},
		},
		{
			title: 'Units',
			dataIndex: 'units',
			render: (text, row) => {
				if (row.isTotal) return <strong>{text}</strong>
				return text
			},
		},
		{
			title: 'Avg Sec/Unit',
			dataIndex: 'avg',
			render: (text, row) => {
				if (row.isTotal) return <strong>{text}</strong>
				return Number(text).toFixed(2)
			},
		},
	]

	return (
		<div>
			<Table
				columns={columns}
				dataSource={generateMergedData().map((item, index) => ({
					...item,
					key: index,
				}))}
				pagination={{
					pageSize: pagination.pageSize,
					current: pagination.current,
					total: tableData.length,
				}}
				onChange={handleTableChange}
				bordered
			/>
		</div>
	)
}

export default HomeTable
