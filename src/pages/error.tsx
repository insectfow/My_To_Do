import { FC } from "react";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";
import Layout from "../layouts/Layout";

const ErrorPage: FC = () => {
  const navigate = useNavigate();
  return (
    <Layout
      title="404"
      subTitle="Sorry, the page you are looking for does not exist."
    >
      <Button
        onClick={() => {
          navigate("/");
        }}
        disabled={false}
        buttonText={"Go to Home"}
      ></Button>
    </Layout>
  );
};

export default ErrorPage;
