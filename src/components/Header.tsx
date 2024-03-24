import { Flex, Heading, Text } from "@radix-ui/themes";
import Navigation from "./Navigation";

const Header = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <header>
      <Navigation />
      <Flex direction="column" py="6">
        <Heading size="7" trim="start" mb="2">
          {title}
        </Heading>
        <Text as="p" size="2" mb="5" color="gray">
          {description}
        </Text>
      </Flex>
    </header>
  );
};

export default Header;
