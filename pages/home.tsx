import {
  HStack,
  Heading,
  Icon,
  VStack,
  Box,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Text,
} from '@gluestack-ui/themed';
import {
  Bell,
  Home,
  LandPlot,
  Menu,
  Search,
  Settings2,
  Warehouse,
} from 'lucide-react-native';
import React from 'react';
import HouseCategoryIcon from '../components/HouseCategoryIcon';
import {TouchableOpacity} from 'react-native';

type Props = {};

const HomePage = (props: Props) => {
  return (
    <VStack w="100%" gap="$8">
      <HStack w="100%" justifyContent="space-between" alignItems="center">
        <TouchableOpacity>
          <Box
            p={10}
            borderWidth={1}
            borderColor="$trueGray200"
            borderRadius="$full">
            <Icon as={Menu} size="xl" />
          </Box>
        </TouchableOpacity>
        <VStack alignItems="center">
          <Heading size="md" color="$trueGray400">
            Your location
          </Heading>
          <Heading size="lg">Kingston, Jamaica</Heading>
        </VStack>
        <TouchableOpacity>
          <Box
            p={10}
            borderWidth={1}
            borderColor="$trueGray200"
            borderRadius="$full">
            <Icon as={Bell} size="xl" />
          </Box>
        </TouchableOpacity>
      </HStack>
      <Input height="$12" bg="$trueGray200" borderRadius="$3xl">
        <InputSlot ml={10}>
          <InputIcon>
            <Icon as={Search} size="md" />
          </InputIcon>
        </InputSlot>
        <InputField color="$trueGray500" placeholder="Search property..." />
        <InputSlot mr={15}>
          <InputIcon>
            <Icon as={Settings2} size="md" />
          </InputIcon>
        </InputSlot>
      </Input>
      <HStack w="100%" justifyContent="space-between">
        <TouchableOpacity>
          <HouseCategoryIcon
            categoryName="House"
            icon={Home}
            iconColor="$teal500"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <HouseCategoryIcon
            categoryName="Apartment"
            icon={Home}
            iconColor="$orange500"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <HouseCategoryIcon
            categoryName="Warehouse"
            icon={Warehouse}
            iconColor="$red500"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <HouseCategoryIcon
            categoryName="Empty Land"
            icon={LandPlot}
            iconColor="$teal500"
          />
        </TouchableOpacity>
      </HStack>
      <HStack justifyContent="space-between" alignItems="center">
        <Heading size="lg">Recommended Property</Heading>
        <TouchableOpacity>
          <Text color="$teal500" fontWeight="$semibold">
            See All
          </Text>
        </TouchableOpacity>
      </HStack>
    </VStack>
  );
};

export default HomePage;
