import {
  VStack,
  HStack,
  Icon,
  Image,
  Text,
  Box,
  Heading,
} from '@gluestack-ui/themed';
import {Star, MapPin, BedDouble, Bath, Home, Heart} from 'lucide-react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';

type Props = {
  propertyTitle: string;
  location: string;
  ratings: string;
  bedRooms: number;
  bathRooms: number;
  price: string;
};

const PropertyCard = ({
  propertyTitle,
  location,
  ratings,
  bedRooms,
  bathRooms,
  price,
}: Props) => {
  return (
    <TouchableOpacity>
      <Box
        p={4}
        borderWidth={1}
        w={320}
        borderColor="$trueGray200"
        borderRadius="$xl">
        <VStack gap="$2">
          <Image
            borderRadius={`$xl` as any}
            source={{
              uri: 'https://i.ibb.co/brQfhkx/luxury-real-estate.jpg',
            }}
            width={320}
            height={230}
            alt="Real estate pic"
          />
          <HStack
            w="100%"
            position="absolute"
            top={10}
            justifyContent="space-between">
            <HStack borderRadius="$2xl" left={5} bg="white" p={7} gap="$2">
              <Icon as={Home} size="lg" color="$teal500" />
              <Text color="$teal500" fontWeight="$bold">
                House
              </Text>
            </HStack>
            <Box p={7} bg="$white" right={5} borderRadius="$full">
              <Icon as={Heart} size="xl" color="$trueGray500" />
            </Box>
          </HStack>
          <VStack w="100%" gap="$1" p="$2">
            <HStack w="100%" justifyContent="space-between">
              <Heading size="md" numberOfLines={1}>
                {propertyTitle}
              </Heading>
              <HStack gap="$1.5" alignItems="center">
                <Icon
                  as={Star}
                  color="$yellow500"
                  size="md"
                  fill="$yellow500"
                />
                <Heading size="md">{ratings}</Heading>
              </HStack>
            </HStack>
            <HStack alignItems="center" gap="$1.5">
              <Icon as={MapPin} color="$trueGray500" size="md" />
              <Text
                color="$trueGray500"
                fill="$trueGray400"
                fontWeight="$semibold">
                {location}
              </Text>
            </HStack>
          </VStack>
          <HStack
            w="100%"
            p="$2"
            justifyContent="space-between"
            alignItems="center">
            <HStack gap="$2" alignItems="center">
              <Icon as={BedDouble} color="$trueGray500" size="md" />
              <Text fontWeight="$bold" color="$trueGray500">
                {bedRooms}
              </Text>
              <Text fontWeight="$bold" color="$trueGray500">
                |
              </Text>
              <Icon as={Bath} color="$trueGray500" size="md" />
              <Text fontWeight="$bold" color="$trueGray500">
                {bathRooms}
              </Text>
            </HStack>
            <Heading size="xl">${price}</Heading>
          </HStack>
        </VStack>
      </Box>
    </TouchableOpacity>
  );
};

export default PropertyCard;
