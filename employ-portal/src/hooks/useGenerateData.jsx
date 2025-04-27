import { faker } from '@faker-js/faker'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'

const useGenerateData = (count) => {
	const [data, setData] = useState([])

	useEffect(() => {
		const mockData = []

		const names = [
			'Super Admin',
			'Tester Amy',
			'Test Jhankar Mahbub',
			'John Doe',
			'Jane Smith',
			'Mark Taylor',
			'Emily Carter',
			'Daniel Evans',
			'Laura King',
			'Mike Johnson',
			'Sophie Lee',
			'Chris Martin',
			'Olivia Brown',
			'Lucas Wilson',
			'Amelia Moore',
			'Ethan White',
			'Ava Harris',
			'Logan Lewis',
		]

		for (let i = 0; i < count; i++) {
			const randomName = names[Math.floor(Math.random() * names.length)]

			const randomYearOffset = Math.floor(Math.random() * 5) - 2
			const baseDate = dayjs().add(randomYearOffset, 'year')

			const randomDay = Math.floor(Math.random() * 365)
			const randomDate = baseDate.add(randomDay, 'day')

			let checkInHour = Math.floor(Math.random() * 12) + 1
			let checkInMinute = Math.floor(Math.random() * 60)
			const checkInAmPm = Math.random() > 0.5 ? 'AM' : 'PM'

			let checkInTimeInMinutes =
				(checkInAmPm === 'AM' ? checkInHour : checkInHour + 12) * 60 +
				checkInMinute

			let checkOutHour = Math.floor(Math.random() * 12) + 1
			let checkOutMinute = Math.floor(Math.random() * 60)
			const checkOutAmPm = Math.random() > 0.5 ? 'AM' : 'PM'

			let checkOutTimeInMinutes =
				(checkOutAmPm === 'AM' ? checkOutHour : checkOutHour + 12) * 60 +
				checkOutMinute

			if (checkOutTimeInMinutes <= checkInTimeInMinutes) {
				checkOutTimeInMinutes = checkInTimeInMinutes + 30
			}

			checkOutHour = Math.floor(checkOutTimeInMinutes / 60) % 12 || 12
			checkOutMinute = checkOutTimeInMinutes % 60
			const checkOutAmPmAdjusted = checkOutTimeInMinutes >= 720 ? 'PM' : 'AM'

			mockData.push({
				name: randomName,
				date: randomDate.format('MM-DD-YYYY'),
				property_name: `${faker.company.name()}`.toLowerCase(),
				checkIn: `${checkInHour}:${checkInMinute
					.toString()
					.padStart(2, '0')} ${checkInAmPm}`,
				checkOut: `${checkOutHour}:${checkOutMinute
					.toString()
					.padStart(2, '0')} ${checkOutAmPmAdjusted}`,
				units: Math.floor(Math.random() * 20) + 1,
			})
		}

		setData(JSON.stringify(mockData))
	}, [count])

	return data
}

export default useGenerateData
