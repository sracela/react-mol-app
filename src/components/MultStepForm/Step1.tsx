import { Box, Button, Flex, Heading, RadioCards, Text } from "@radix-ui/themes";
import React, { useState } from "react";

interface Step1Props {
  onNext: () => void;
  handleData: (data: any) => void;
}

const options = [
  { label: "32 GB RAM", value: "8-core CPU" },
  { label: "24 GB RAM", value: "6-core CPU" },
  { label: "16 GB RAM", value: "4-core CPU" },
];

const Step1: React.FC<Step1Props> = ({ onNext, handleData }) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    handleData({ cpu: value });
  };

  return (
    <Flex direction="column" gap="2">
      <Heading as="h3" size="6" trim="start" mb="5">
        Step 1
      </Heading>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      <Box maxWidth="800px" my="4">
        <RadioCards.Root
          defaultValue={selectedValue}
          columns={{ initial: "1", sm: "3" }}
          onValueChange={handleSelect}
        >
          {options.map((option) => (
            <RadioCards.Item value={option.value}>
              <Flex direction="column" width="100%">
                <Text weight="bold">{option.value}</Text>
                <Text>{option.label}</Text>
              </Flex>
            </RadioCards.Item>
          ))}
        </RadioCards.Root>
      </Box>
      <Flex align="end" justify="end">
        <Button onClick={onNext}>Next</Button>
      </Flex>
    </Flex>
  );
};

export default Step1;
