import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import MarkdownDisplay from '@/components/day3/MarkdownDisplay';
import { SafeAreaView } from 'react-native-safe-area-context';

const description = `
# Animated Splash Screen
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 4: SplashScreen' }} />
      <MarkdownDisplay>
        {description}
      </MarkdownDisplay>
      <Link href={`/day4/animation`} asChild>
        <Button title='Go To animation' />
      </Link>
      <Link href={`/day4/splash`} asChild>
        <Button title='Splash screen animation' />
      </Link>
    </SafeAreaView>
  )
}

export default DayDetailsScreen

const styles = StyleSheet.create({})