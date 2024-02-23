import React from "react";
import { Box, Container, Heading, SimpleGrid, Text, Stack, Image, Badge, useColorModeValue } from "@chakra-ui/react";
import { FaSteam, FaGamepad } from "react-icons/fa";

const discounts = [
  // Mock data, replace with API data
  {
    id: 1,
    title: "Game Title 1",
    platform: "Steam",
    originalPrice: "$49.99",
    discountedPrice: "$24.99",
    thumbnail: "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnYW1lJTIwdGh1bWJuYWlsfGVufDB8fHx8MTcwODY0ODMxMHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    title: "Game Title 2",
    platform: "Epic",
    originalPrice: "$59.99",
    discountedPrice: "$14.99",
    thumbnail: "https://images.unsplash.com/photo-1532295454114-d7bc89024613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxnYW1lJTIwdGh1bWJuYWlsfGVufDB8fHx8MTcwODY0ODMxMHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  // ... more games
];

const Index = () => {
  // TODO: Replace mock data with actual API calls and handle user tokens securely

  const renderPlatformIcon = (platform) => {
    if (platform === "Steam") {
      return <FaSteam />;
    } else if (platform === "Epic") {
      return <FaGamepad />;
    }
    return null;
  };

  return (
    <Container maxW="7xl" p="12">
      <Heading as="h1" mb="8">
        Game Discounts
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6">
        {discounts.map((game) => (
          <Box key={game.id} maxW="sm" borderWidth="1px" rounded="lg" shadow="lg" position="relative" bg={useColorModeValue("white", "gray.800")}>
            <Image src={game.thumbnail} alt={`Thumbnail of ${game.title}`} roundedTop="lg" />

            <Box p="6">
              <Stack direction="row" align="baseline">
                <Badge rounded="full" px="2" colorScheme="teal">
                  {game.platform}
                </Badge>
                <Box color={useColorModeValue("gray.800", "white")} fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
                  {renderPlatformIcon(game.platform)}
                </Box>
              </Stack>

              <Heading as="h3" size="md" mt="2" mb="2">
                {game.title}
              </Heading>

              <Stack direction="row" justify="space-between">
                <Text fontWeight="bold" fontSize="xl">
                  {game.discountedPrice}
                </Text>
                <Text as="s" color={useColorModeValue("gray.600", "gray.400")}>
                  {game.originalPrice}
                </Text>
              </Stack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;
