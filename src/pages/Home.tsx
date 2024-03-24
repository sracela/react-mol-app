import { Flex } from "@radix-ui/themes";
import SignIn from "../components/SignIn";
import Layout from "../components/Layout";
import { useAuth } from "../providers/AuthProvider";

const Home = () => {
  const { token } = useAuth();
  return (
    <Layout
      title="Welcome to Our Website"
      description="This is a sample webpage showcasing auth and protected routes"
    >
      {!token ? (
        <Flex direction="column" align="center">
          <SignIn />
        </Flex>
      ) : (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste illo
          explicabo, optio corporis nostrum alias blanditiis nesciunt voluptatem
          ut, delectus, ducimus numquam voluptas maxime illum quidem saepe quis
          quasi? Nulla.
        </div>
      )}
    </Layout>
  );
};

export default Home;
