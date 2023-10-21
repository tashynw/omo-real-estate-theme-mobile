/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {config} from '@gluestack-ui/config';
import {
  Box,
  GluestackUIProvider,
  ScrollView,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomePage from './pages/home';

function App(): JSX.Element {
  return (
    <GluestackUIProvider config={config}>
      <SafeAreaView>
        <StatusBar barStyle="light-content" />
        {/*body*/}
        <ScrollView w="100%">
          <Box w="100%" alignItems="flex-start" p={20}>
            <HomePage />
          </Box>
        </ScrollView>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}

export default App;
