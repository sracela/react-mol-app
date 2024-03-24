import { useState } from "react";
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

const SignUp = ({ handleIsSignIn }: { handleIsSignIn: () => void }) => {
  const { onCreateAccount } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSignUp = async () => {
    setError(null);
    setIsLoading(true);
    try {
      await onCreateAccount({ email, password });
    } catch (error) {
      setError("Something went wrong");
    }
    setIsLoading(false);
  };

  return (
    <Flex flexShrink="0" gap="6" direction="column" width="416px">
      <Card size="4">
        <Heading as="h3" size="6" trim="start" mb="5">
          Sign Up
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
            placeholder="Enter your email"
            id="example-email-field"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
            placeholder="Enter your password"
            id="example-password-field"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Box>

        {error && (
          <Box>
            <Text size="2" style={{ color: "red" }}>
              {error}
            </Text>
          </Box>
        )}
        <Flex mt="6" justify="end" gap="3">
          <Button variant="soft" onClick={handleIsSignIn}>
            Already have an Account? Sign in!
          </Button>
          <Button onClick={handleSignUp} loading={isLoading}>
            Sign up
          </Button>
        </Flex>
      </Card>
    </Flex>
  );
};

export default SignUp;
