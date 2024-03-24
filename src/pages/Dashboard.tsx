import { Flex } from "@radix-ui/themes";
import Layout from "../components/Layout";
import { MultiStepForm } from "../components/MultStepForm";

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
