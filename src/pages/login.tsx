import { Form, Input, Button, Checkbox } from 'antd';
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
    const client_id= '61a2836d26404de41b00';
    const authorize_uri = 'https://github.com/login/oauth/authorize';
    const redirect_uri = 'http://localhost:3050/oauth/redirect';
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        console.log('Success:', values);
        window.location.href = `${authorize_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}`;
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Login with github
                </Button>
            </Form.Item>
        </Form>
    );
}

export default LoginComponent;