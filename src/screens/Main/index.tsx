import React, { type FC } from 'react';
import { StyledComponent } from 'nativewind';
import Animated, { SlideInDown } from 'react-native-reanimated';
import { Text } from 'react-native-paper';

const MainScreen: FC = () => {
  return (
    <StyledComponent component={Animated.View} entering={SlideInDown} className='flex flex-1 h-full w-full bg-black justify-center items-center'>
      <Text variant='displayLarge' theme={{colors: {onSurface: "white"}}}>
        Hello
      </Text>
    </StyledComponent>
  )
};

export default MainScreen;