import { Flex } from "@radix-ui/themes";
import Layout from "../components/layout/Layout";
import { MultiStepForm } from "../components/form";

const Dashboard = () => {
  return (
    <Layout
      title="Dashboard (protected route)"
      description="This is a sample webpage showcasing auth and protected routes"
    >
      <Flex direction="column" align="center">
        <MultiStepForm />
      </Flex>
    </Layout>
  );
};

export default Dashboard;
