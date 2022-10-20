import { Button, Form, Input, InputNumber, notification, Radio } from 'antd';
import { NotificationPlacement } from 'antd/lib/notification';
import { collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { useAddDoc } from '../hooks/useAddDoc';

const validateMessages = {
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
  required: '${label} is required!',
  types: {
    number: '${label} is not a valid number',
  },
};

export const NewCampaign: React.FC = () => {
  const navigate = useNavigate();
  const { loading, add } = useAddDoc(collection(db, 'Campaign'));
  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      description: "Can't create the campaign. Please try again",
      message: 'Failed to create campaign',
      placement,
    });
  };

  const submitForm = async (form: any) => {
    add(
      form,
      () => {
        navigate('/campaigns');
      },
      () => {
        openNotification('bottomRight');
      },
    );
  };

  return (
    <>
      {contextHolder}
      <Form
        layout="vertical"
        onFinish={submitForm}
        validateMessages={validateMessages}
      >
        <Form.Item
          label="Objective"
          name="objective"
          rules={[{ required: true }]}
        >
          <Radio.Group>
            <Radio value="traffic">Traffic</Radio>
            <Radio value="action">Action</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          hasFeedback
          label="Name"
          name="name"
          rules={[{ required: true }]}
        >
          <Input maxLength={150} showCount />
        </Form.Item>
        <Form.Item
          hasFeedback
          label="Budget"
          name="budget"
          rules={[{ required: true }, { max: 10000, min: 10, type: 'number' }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item>
          <Button disabled={loading} htmlType="submit" type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
