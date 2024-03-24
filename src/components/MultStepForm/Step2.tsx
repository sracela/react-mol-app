// Step2.tsx
import { Box, Button, Flex, Heading, Select, Text } from "@radix-ui/themes";
import React, { useState } from "react";

interface Step2Props {
  onPrev: () => void;
  onNext: () => void;
  handleData: (data: any) => void;
}

const fruits = [
  { label: "Orange", value: "orange" },
  { label: "Apple", value: "apple" },
  { label: "Grape", value: "grape" },
];

const vegetables = [
  { label: "Carrot", value: "carrot" },
  { label: "Potato", value: "potato" },
  { label: "Grape", value: "grape" },
];

const Step2: React.FC<Step2Props> = ({ onPrev, onNext, handleData }) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    handleData({ food: value });
  };

  return (
    <Flex direction="column" gap="2">
      <Heading as="h3" size="6" trim="start" mb="5">
        Step 2
      </Heading>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      <Box maxWidth="800px" my="4">
        <Select.Root defaultValue={selectedValue} onValueChange={handleSelect}>
          <Select.Trigger placeholder="Select some food" />
          <Select.Content>
            <Select.Group>
              <Select.Label>Fruits</Select.Label>
              {fruits.map((f) => (
                <Select.Item value={f.value}>{f.label}</Select.Item>
              ))}
            </Select.Group>
            <Select.Separator />
            <Select.Group>
              <Select.Label>Vegetables</Select.Label>
              {vegetables.map((v) => (
                <Select.Item value={v.value}>{v.label}</Select.Item>
              ))}
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </Box>

      <Flex align="end" justify="end" gap="2">
        <Button onClick={onPrev}>Previous</Button>
        <Button onClick={onNext}>Next</Button>
      </Flex>
    </Flex>
  );
};

export default Step2;
