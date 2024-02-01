import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
import * as SplashScreen from "expo-splash-screen";
import DayListItem from '@components/core/DayListItem';

SplashScreen.preventAutoHideAsync()

const days =  [...Array(24)].map((val, index) => index + 1)

export default function HomeScreen() {

  return (
    <View style={styles.container}>
    <FlatList 
      contentContainerStyle={styles.content}
      columnWrapperStyle={styles.column}
      data={days}
      numColumns={2}
      renderItem={({item}) => (<DayListItem day={item} />)}
    />
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    gap: 10,
    padding: 10,
  },
  column: {
    gap: 10,
  },
});
