import React, { type FC } from 'react';
import { SafeAreaView, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Slot } from 'expo-router';

const LayoutIndex: FC = () => (
  <SafeAreaView
    style={{ height: "100%", width: "100%", backgroundColor: "#FFFCF9" }}
  >
    <PaperProvider>
      <Slot />
    </PaperProvider>
  </SafeAreaView>
);

export default LayoutIndex;