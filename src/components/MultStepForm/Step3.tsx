import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";

interface Step3Props {
  onPrev: () => void;
  onSubmit: () => void;
  data: any;
}

const Step3: React.FC<Step3Props> = ({ onPrev, onSubmit, data }) => {
  return (
    <Flex direction="column" gap="2">
      <Heading as="h3" size="6" trim="start" mb="5">
        Step 3 | Checkout
      </Heading>
      <Box maxWidth="800px" my="4">
        <Text>Final JSON: {JSON.stringify(data)}</Text>
      </Box>
      <Flex align="end" justify="end" gap="2">
        <Button onClick={onPrev}>Previous</Button>
        <Button onClick={onSubmit}>Submit</Button>
      </Flex>
    </Flex>
  );
};

export default Step3;
