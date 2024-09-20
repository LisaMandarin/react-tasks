import { Button, Space, Table, Typography } from "antd"
import { bDayFormat, fetchData, nativeYN, deleteUser, refreshTable } from "./userListUtil"
import { useEffect, useState } from "react"
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons"
const { Title } = Typography

export function UserList() {
    const [ originalData, setOriginalData ] = useState([])
    const [ dataSource, setDatasource ] = useState([])
    
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
                <DeleteTwoTone onClick={() => deleteUser(record.id, dataSource, setDatasource, setOriginalData)}/>
                <EditTwoTone />
            </Space>
        )}
    ]

    useEffect(() => {
        fetchData()
            .then(response => {
                setDatasource(response)
                setOriginalData(response)
            })
    }, [])
    
    return (
        <div
            className="flex flex-col gap-3 w-[650px] mx-auto"
        >
            <Title underline className="text-center">User List</Title>
            <Button type="primary" onClick={()=>refreshTable(setDatasource, setOriginalData)}>Refresh</Button>
            <Table 
                dataSource={dataSource}
                columns={columns}
                pagination={{
                    position: ['bottomCenter'],
                    pageSize: 5
                }}
            />
        </div>
    )
}