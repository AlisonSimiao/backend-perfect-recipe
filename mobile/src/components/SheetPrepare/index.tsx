import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { GestureHandlerRootView, Switch } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import RadionButton from '../RadionButton';
import { theme } from '../../global/theme';
import { styles } from './styles';

const App = ({children}: {children: React.ReactNode}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        enableDynamicSizing={true}
      
      
      >
       
          <BottomSheetView style={styles.contentContainer}>
            {children}
          </BottomSheetView>
       
      </BottomSheet>
      
    </GestureHandlerRootView>
  );
};



export default App;