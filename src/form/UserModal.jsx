import { DatePicker, Form, Input, Modal, Radio } from "antd";
import { useEffect, useState } from "react";
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { getToday, dateFormat, onBirthdayChange } from "./userFormUtil";
import axios from "axios";
import { refreshTable } from "./userListUtil";
dayjs.extend(customParseFormat);

export function UserModal({isModalOpen, setIsModalOpen, editedUser, setDataSource, setOriginalData}) {
    
    const [ form ] = Form.useForm()

    const onOk = async() => {
        try {
            await form.validateFields()

            const values = form.getFieldsValue()
            const { id, ...updatedValues } = values
            const url = `http://localhost:3001/users/${id}`

            await axios.patch(url, updatedValues)
            
            setIsModalOpen(false)

            await refreshTable(setDataSource, setOriginalData)
        } catch (err) {
            console.error('Failed to update data: ', err.message)
        }
        form.submit()
        
        
        
        
        
        
    }

    const onCancel = () => {
        setIsModalOpen(false)
    }

    useEffect(() => {
        if (editedUser) {
            form.setFieldsValue({
                id: editedUser.id,
                name: editedUser.name,
                birthday: dayjs(editedUser.birthday, dateFormat),
                age: editedUser.age,
                native: editedUser.native,
                address: editedUser.address
            }, [editedUser, form])
        }
    })
    return (
        <>
            <Modal
                title="Edit User"
                open={isModalOpen}
                onOk={onOk}
                okText='Update'
                onCancel={onCancel}
            >
                <Form
                    name="Edit-user-form"
                    form={form}
                    className="w-96 mx-auto"
                    labelCol={{
                        span: 6
                    }}
                >
                    <Form.Item
                        name='id'
                        hidden
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Please enter Name"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="birthday"
                        name='birthday'
                        rules={[
                            {
                                required: true,
                                message: 'Please select birthday'
                            }
                        ]}
                    >
                        <DatePicker 
                            maxDate={dayjs(getToday(), dateFormat)}
                            onChange={(date) => onBirthdayChange(date, form)}
                        />
                    </Form.Item>
                    <Form.Item
                        label="age"
                        name="age"
                    >
                        <Input disabled/>
                    </Form.Item>
                    <Form.Item
                        label="native"
                        name="native"
                        rules={[
                            {
                                required: true,
                                message: "Please choose Yes or No"
                            }
                        ]}
                    >
                        <Radio.Group>
                            <Radio value={true}>Yes</Radio>
                            <Radio value={false}>No</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        label="address"
                        name="address"
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}