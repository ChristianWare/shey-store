"use client";

import { Button, Form } from "antd";
import Link from "next/link";

interface userTypes {
  name: string;
  email: string;
  password: string;
}

const Register = () => {
  const onRegister = (values: userTypes) => {
    console.log(values);
  };

  return (
    <div className='grid grid-cols-2 min-h-screen'>
      <div className='h-full bg-primary flex items-center justify-center p-5'>
        <h1 className='text-7xl font-bold text-gray-500'>
          Chris E-commerce Shop
        </h1>
      </div>
      <div className='flex flex-col items-center justify-center h-full'>
        <h1>Register</h1>
        <Form className='w-[500px]' layout='vertical' onFinish={onRegister}>
          <Form.Item name='name' label='Name'>
            <input type='text' />
          </Form.Item>
          <Form.Item name='email' label='Email'>
            <input type='email' />
          </Form.Item>
          <Form.Item name='password' label='Password'>
            <input type='password' />
          </Form.Item>
          <Button type='primary' htmlType='submit' block className='mb-5'>
            Register
          </Button>
          <Link href='/auth/login'>Already have an account? Login</Link>
        </Form>
      </div>
    </div>
  );
};
export default Register;
