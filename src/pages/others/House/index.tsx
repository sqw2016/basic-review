import React from "react";
import {Button, Form, InputNumber, Radio, Table} from "antd";
import type {ColumnsType} from "antd/es/table";

import styles from './index.module.less'

type FieldType = {
  commerce?: number;
  commerceRate?: number;
  public?: number;
  publicRate?: number;
  salary?: number;
  rent?: number;
  years?: number;
  type?: number;
};


interface DataType {
  id: number;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: '月份编号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '代偿金额',
    dataIndex: 'id',
    key: 'id',
  },
]

const House: React.FC = () => {

  const onFinish = (values) => {
    console.log(values)
  }

  return <div className={styles.container}>
    <div className={styles.header}>租房与买房压力计算</div>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ type: 1, commerce: 900000, commerceRate: 4.3, public: 700000, publicRate: 3.1, salary: 26000, rent: 6000, years: 19  }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="商贷金额"
        name="commerce"
      >
        <InputNumber addonAfter="元" />
      </Form.Item>

      <Form.Item<FieldType>
        label="商贷利率"
        name="commerceRate"
      >
        <InputNumber addonAfter="%" />
      </Form.Item>

      <Form.Item<FieldType>
        label="公积金贷款金额"
        name="public"
      >
        <InputNumber addonAfter="元" />
      </Form.Item>

      <Form.Item<FieldType>
        label="公积金贷利率"
        name="publicRate"
      >
        <InputNumber addonAfter="%" />
      </Form.Item>

      <Form.Item<FieldType>
        label="月薪"
        name="salary"
      >
        <InputNumber addonAfter="元/月" />
      </Form.Item>

      <Form.Item<FieldType>
        label="月租"
        name="rent"
      >
        <InputNumber addonAfter="元/月" />
      </Form.Item>

      <Form.Item<FieldType>
        label="贷款年限"
        name="years"
      >
        <InputNumber addonAfter="年" />
      </Form.Item>

      <Form.Item<FieldType>
        label="月供方式"
        name="type"
      >
        <Radio.Group>
          <Radio value={1}>等额本息</Radio>
          <Radio value={2}>等额本金</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          开始计算
        </Button>
      </Form.Item>
    </Form>
    <Table />
  </div>
}

export default House;