import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const DayDetailsScreen = () => {
  return (
    <View>
      <Text style={{ fontFamily: "AmaticBold", fontSize: 100 }}>Day 1 Details Screen</Text>
      <Link href={`/`}>Go Back</Link>
    </View>
  )
}

export default DayDetailsScreen

const styles = StyleSheet.create({})