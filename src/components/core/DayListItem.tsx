import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type props = {
  item: number
}

const DayListItem = ({ item }: props) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{item}</Text>
    </View>
  )
}

export default DayListItem

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#F9EDE3",
    flex: 1,
    aspectRatio: 1, // to calculate the height auto automaticaly

    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#9b4521',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: "#9b4521",
    fontSize: 70
  },
});
