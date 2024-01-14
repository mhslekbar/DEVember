import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import DayListItem from './src/components/core/DayListItem';

const days =  [...Array(24)].map((val, index) => index + 1)

export default function App() {
  return (
    <View style={styles.container}>
    <FlatList 
      contentContainerStyle={styles.content}
      columnWrapperStyle={styles.column}
      data={days}
      numColumns={2}
      renderItem={({item}) => (<DayListItem item={item} />)}
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
