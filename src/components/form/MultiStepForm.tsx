import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { Box, Flex, Text } from "@radix-ui/themes";

export const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<any>({});
  const [isSubmited, setIsSubmited] = useState(false);

  const nextStep = () => {
    setIsSubmited(false);
    setStep(step + 1);
  };

  const prevStep = () => {
    setIsSubmited(false);
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Handle form submission
    setIsSubmited(true);
  };

  const handleData = (newValue: any) => {
    console.log({ newValue, data });
    setData({ ...data, ...newValue });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 onNext={nextStep} handleData={handleData} />;
      case 2:
        return (
          <Step2 onPrev={prevStep} onNext={nextStep} handleData={handleData} />
        );
      case 3:
        return <Step3 onPrev={prevStep} onSubmit={handleSubmit} data={data} />;
      default:
        return null;
    }
  };

  return (
    <Flex flexShrink="0" gap="6" direction="column" width="416px">
      <Box>{renderStep()}</Box>
      {isSubmited && <Text>Form submited!</Text>}
    </Flex>
  );
};
