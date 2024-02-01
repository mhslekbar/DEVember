import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

type props = {
  day: number
}

const DayListItem = ({ day }: props) => {
  return (
    <Link href={`/days/day${day}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{day}</Text>
      </Pressable>
    </Link>
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
    fontSize: 70,
    fontFamily: 'AmaticBold'
  },
});
