import { Button, Form, Input, Typography } from "antd";
import type { FormProps } from "antd";
import { useSignUpMutation } from "../../../redux/api/auth-api";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
const { Title } = Typography;

type FieldType = {
  first_name: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const [signUp, { data, isSuccess }] = useSignUpMutation();

  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    signUp(values);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(`/auth/verify-otp?email=${btoa(data.payload.email)}`);
    }
  }, [isSuccess]);

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="w-full authShadow rounded-lg shadow-lg shadow-cyan-500/50 p-4 flex">
      <div className="w-[450px] min-h-[230px] bg-white rounded-lg p-7 mt-400">
        <Title
          level={3}
          style={{
            textAlign: "center",
            color: "#1677FF",
            marginBottom: "24px",
          }}
        >
          Register
        </Title>
        <div>
          <Form
            name="basic"
            layout="vertical"
            style={{ maxWidth: "100%", marginTop: "20px" }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="First Name"
              name="first_name"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
              style={{ marginBottom: "16px" }}
            >
              <Input style={{ height: "34px", borderRadius: "4px", borderColor: "#d9d9d9" }} />
            </Form.Item>

            <Form.Item<FieldType>
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
              style={{ marginBottom: "16px" }}
            >
              <Input style={{ height: "34px", borderRadius: "4px", borderColor: "#d9d9d9" }} />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
                { min: 6, message: "Password must be at least 6 characters!" },
              ]}
              style={{ marginBottom: "24px" }}
            >
              <Input.Password style={{ height: "34px", borderRadius: "4px", borderColor: "#d9d9d9" }} />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 24 }}>
              <Button
                style={{
                  backgroundColor: "dodgerblue",
                  color: "#fff",
                  width: "100%",
                  height: "34px",
                  borderRadius: "4px",
                  fontSize: "16px",
                  fontWeight: "normal",
                  marginTop: '20px'
                }}
                type="primary"
                htmlType="submit"
                loading={false}
              >
                Register
              </Button>
            </Form.Item>
            <div style={{ marginTop: "-10px", textAlign: "center" }}>
              Already have an account?
              <Link style={{ color: "#1677FF", marginLeft: "5px" }} to="/auth">
                Sign-in
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
