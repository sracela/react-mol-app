import {
  Box,
  Card,
  Flex,
  Heading,
  Text,
  TextField,
  Button,
} from "@radix-ui/themes";
import { useAuth } from "../providers/AuthProvider";

const SignIn = () => {
  const { onLogin } = useAuth();
  return (
    <Flex flexShrink="0" gap="6" direction="column" width="416px">
      <Card size="4">
        <Heading as="h3" size="6" trim="start" mb="5">
          Sign in
        </Heading>

        <Box mb="5">
          <Flex mb="1">
            <Text
              as="label"
              htmlFor="example-email-field"
              size="2"
              weight="bold"
            >
              Email address
            </Text>
          </Flex>
          <TextField.Root
            // tabIndex={tabIndex}
            placeholder="Enter your email"
            id="example-email-field"
          />
        </Box>

        <Box mb="5" position="relative">
          <Flex align="baseline" justify="between" mb="1">
            <Text
              as="label"
              size="2"
              weight="bold"
              htmlFor="example-password-field"
            >
              Password
            </Text>
            {/* <Link href="#" tabIndex={tabIndex} size="2" onClick={(e) => e.preventDefault()}>
                  Forgot password?
                </Link> */}
          </Flex>
          <TextField.Root
            // tabIndex={tabIndex}
            placeholder="Enter your password"
            id="example-password-field"
          />
        </Box>

        <Flex mt="6" justify="end" gap="3">
          {/* <Button variant="outline">Create an account</Button> */}
          <Button onClick={onLogin}>Sign in</Button>
        </Flex>
      </Card>
    </Flex>
  );
};

export default SignIn;
