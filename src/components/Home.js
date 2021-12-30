import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Avatar,
  Box,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";

import { ReactNode } from "react";
import { Link as lee } from "react-router-dom";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string,
  name: string,
  title: string,
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

function Home() {
  return (
    <Stack>
      <Stack minH={"90vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                Shop For
              </Text>
              <br />
              <Text color={"blue.400"} as={"span"}>
                Accessories you'll
                <Text as={"span"} color={"red"}>
                  ❤️
                </Text>
              </Text>
              {""}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              The Doshop store is an exclusive resource for I products. It's
              perfect for Cases, Watch straps, and Skin.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                as={lee}
                to="/shop"
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Shop Now
              </Button>
              <Button as={lee} to="/contact" rounded={"full"}>
                Contact Us
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://c0.wallpaperflare.com/preview/454/474/460/macbook-coffee-desk-box.jpg"
            }
          />
        </Flex>
      </Stack>
      <Box>
        <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
          <Stack spacing={0} align={"center"}>
            <Heading
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              mb={"2.5"}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                Our Clients Speak
              </Text>
            </Heading>
            <Text>We have been working with clients around the world</Text>
          </Stack>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 10, md: 4, lg: 10 }}
          >
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
                <TestimonialText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor neque sed imperdiet nibh lectus feugiat nunc sem.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                }
                name={"Jane Cooper"}
                title={"CEO at ABC Corporation"}
              />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Intuitive Design</TestimonialHeading>
                <TestimonialText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor neque sed imperdiet nibh lectus feugiat nunc sem.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                }
                name={"Jane Cooper"}
                title={"CEO at ABC Corporation"}
              />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Mindblowing Service</TestimonialHeading>
                <TestimonialText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Auctor neque sed imperdiet nibh lectus feugiat nunc sem.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                }
                name={"Jane Cooper"}
                title={"CEO at ABC Corporation"}
              />
            </Testimonial>
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
}

export default Home;
