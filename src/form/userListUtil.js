import dayjs from 'dayjs'
import axios from 'axios'

export function bDayFormat(bDay) {
    return dayjs(bDay).format('YYYY-MM-DD')
}

export function nativeYN(boolean) {
    return boolean ? "Yes" : "No"
}

export const fetchData = async() => {
    try {
        const data = await axios.get('http://localhost:3001/users')
        const dataWithKeys = data.data.map(d => ({...d, key: d.id}))
        return dataWithKeys
    } catch (err) {
        console.error('Failed to get data: ', err.message)
    }
}

export const deleteUser = async(id, dataSource, setDataSource, setOriginalData) => {
    try {
        const url = `http://localhost:3001/users/${id}`
        axios.delete(url)
        console.log('Delete user successfully')
        
        const updatedData = dataSource.filter(d => d.id !== id)
        setDataSource(updatedData)
        setOriginalData(updatedData)
        console.log('updated Datasource and OriginalData')
    } catch (err) {
        console.error('Failed to delete user: ', err.message)
    }
}

export function onSearch(value, originalData, setDataSource) {
    const filteredData = originalData.filter(d => 
        d.name.toLowerCase().includes(value.toLowerCase()) || 
        d.address.toLowerCase().includes(value.toLowerCase())
    )
    setDataSource(filteredData)
}

export const refreshTable = async(setDataSource, setOriginalData) => {
    try {
        const updatedData = await fetchData()
        setDataSource(updatedData)
        setOriginalData(updatedData)
    } catch (err) {
        console.error('Failed to refresh table: ', err.message)
    }
}
