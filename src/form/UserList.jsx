import { Button, Space, Table, Typography, Input } from "antd"
import { bDayFormat, fetchData, nativeYN, deleteUser, onSearch, refreshTable } from "./userListUtil"
import { useEffect, useState } from "react"
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons"
import { UserModal } from "./UserModal"
const { Title } = Typography
const { Search } = Input

export function UserList() {
    const [ originalData, setOriginalData ] = useState([])
    const [ dataSource, setDataSource ] = useState([])
    const [ isModalOpen, setIsModalOpen ] = useState(false)
    const [ editedUser, setEditedUser ] = useState(null)
    
    const columns = [
        {title: 'Name', dataIndex: 'name', key: 'name'},
        {title: 'Birthday', dataIndex: 'birthday', key: 'birthday', render: (_, record) => (
            <span>{bDayFormat(record.birthday)}</span>
        )},
        {title: 'Age', dataIndex: 'age', key: 'age'},
        {title: 'Native', dataIndex: 'native', key: 'native', render: (_, record) => (
            <span>{nativeYN(record.native)}</span>          
        )},
        {title: 'Address', dataIndex: 'address', key: 'address'},
        {title: 'Action', dataIndex: 'action', key: 'action', render: (_, record) => (
            <Space size="large">
                <DeleteTwoTone onClick={() => deleteUser(record.id, dataSource, setDataSource, setOriginalData)}/>
                <EditTwoTone onClick={() => showModal(record)}/>
            </Space>
        )}
    ]

    const showModal = (record) => {
        setIsModalOpen(true)
        setEditedUser(record)
    } 

    useEffect(() => {
        fetchData()
            .then(response => {
                setDataSource(response)
                setOriginalData(response)
            })
    }, [])
    
    return (
        <div
            className="flex flex-col gap-3 w-[650px] mx-auto"
        >
            <Title underline className="text-center">User List</Title>
            <div className="flex flex-row justify-end">
                <Space>
                    <Button type="primary" onClick={()=>refreshTable(setDataSource, setOriginalData)}>Refresh</Button>
                    <Search 
                        placeholder="Input search text"
                        onSearch={(value) => onSearch(value, originalData, setDataSource)}
                        onChange={(e) => onSearch(e.target.value, originalData, setDataSource)}
                    />
                </Space>
            </div>
            <Table 
                dataSource={dataSource}
                columns={columns}
                pagination={{
                    position: ['bottomCenter'],
                    pageSize: 5
                }}
            />
            <UserModal 
                isModalOpen={isModalOpen} 
                setIsModalOpen={setIsModalOpen} 
                editedUser={editedUser}
                setDataSource={setDataSource}
                setOriginalData={setOriginalData}
            />
        </div>
    )
}