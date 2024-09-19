import { Button, DatePicker, Form, Input, Radio, Space, Typography } from "antd"
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { getToday, dateFormat, onBirthdayChange, onReset } from "./userFormUtil";
dayjs.extend(customParseFormat);
import axios from "axios";
const { Title } = Typography


export function UserForm() {
    const [ form ] = Form.useForm()
    
    return (
        <div>
            <Form
                name="user-form"
                labelCol={{
                    span: 6
                }}
                wrapperCol={{
                    span: 14
                }}
                className="w-96 bg-white m-auto p-4"
                form={form}
                onFinish={(values) => {
                    axios.post('http://localhost:3001/users', values)
                        .then(response => console.log('upload data successfully: ', response))
                        .catch(err => console.error('failed to upload: ', err))
                        .finally(onReset(form))
                }}
                onFinishFailed={(errorInfo) => console.error('Failed: ', errorInfo)}
            >
                <Title underline className="text-center">User Form</Title>
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please Enter name'
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Birthday"
                    name="birthday"
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
                    label="Age"
                    name="age"
                >
                    <Input disabled />
                </Form.Item>
                <Form.Item
                    label="Native"
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
                    label="Address"
                    name="address"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 6
                    }}
                >
                    <Space>
                        <Button type="primary" htmlType="submit">Submit</Button>
                        <Button onClick={() => onReset(form)}>Reset</Button>
                    </Space>
                    
                </Form.Item>
            </Form>
        </div>
    )
}