import {Box, Icon, Text, VStack} from '@gluestack-ui/themed';
import React from 'react';

type Props = {
  icon: any;
  categoryName: string;
  iconColor: string;
};

const HouseCategoryIcon = ({icon, categoryName, iconColor}: Props) => {
  return (
    <VStack gap="$2" alignItems="center">
      <Box p={10} bg="$trueGray200" borderRadius="$full">
        <Icon as={icon} size="xl" color={iconColor} />
      </Box>
      <Text fontSize="$sm" fontWeight="$bold">
        {categoryName}
      </Text>
    </VStack>
  );
};

export default HouseCategoryIcon;
