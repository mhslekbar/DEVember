import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import MarkdownDisplay from '@/components/day3/MarkdownDisplay';

const description = `
# Markdown
Integrate Markdown content in **React Native**

Today's Agenda:
- **Morning Routine**: Wake up, exercise, breakfast.
- **Work/Study Session**: Focus on priority tasks and meetings.
- **Lunch Break**: Eat healthily and take a brief walk.
- **Afternoon Work/Study**: Continue with planned tasks or meetings.
- **Evening Relaxation**: Leisure activities, dinner with family or friends.
- **Night Routine**: Prepare for the next day, bedtime.

`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 3: Markdown' }} />
      <MarkdownDisplay>
        {description}
      </MarkdownDisplay>
      {/* <Text style={{ fontFamily: "AmaticBold", fontSize: 100 }}>Day 3 Details Screen</Text> */}
      <Link href={`/day3/editor`} asChild>
        <Button title='Go To editor' />
      </Link>
    </SafeAreaView>
  )
}

export default DayDetailsScreen

const styles = StyleSheet.create({})