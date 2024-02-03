import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { router, Stack } from 'expo-router'
import { FontAwesome5 } from "@expo/vector-icons"
import { StatusBar } from 'expo-status-bar'
import { Directions, Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { FadeIn, FadeOut, SlideInRight, SlideOutLeft } from 'react-native-reanimated';

const onboardingSteps = [
  {
    icon: 'snowflake',
    title: 'Welcome #DEVember',
    description: `Daily React Native tutorials during December`
  },
  {
    icon: 'people-arrows',
    title: 'Learn and grow together',
    description: `Learn by building 24 projects with React Native and Expo`
  },
  {
    icon: 'book-reader',
    title: 'Education for children',
    description: `Contribute to the fundraiser "Education for children" to help Save the children in their effort of providing education to every child`
  },
]

const onboarding = () => {
  const [screenIndex, setScreenIndex] = useState(0)
  const data = onboardingSteps[screenIndex]

  const onContinue = () => {
    if(screenIndex === onboardingSteps.length - 1) {
      endOnboarding()
    } else {
      setScreenIndex(screenIndex + 1)
    }
  }

  const onBack = () => {
    if(screenIndex === 0) {
      endOnboarding()
    } else {
      setScreenIndex(screenIndex - 1)
    }
  }

  const endOnboarding = () => {
    setScreenIndex(0)
    router.back()
  }

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack), 
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue)
  )

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />
          
    <GestureDetector gesture={swipes} >
      <View style={styles.pageContent} key={screenIndex} >
        <View style={styles.stepIndicatorContainer}>
          {onboardingSteps.map((step: any, index) => 
            <View key={index} style={[styles.stepIndicator, {backgroundColor: index === screenIndex ? '#CEF202' : 'gray'}]} />
          )}
        </View>
        <Animated.View 
          entering={FadeIn}
          exiting={FadeOut} 
        >
          <FontAwesome5 style={styles.image} name={data.icon} size={150} color="#CEF202" />
        </Animated.View>
        <View style={styles.footer}>
          <Animated.Text 
            entering={SlideInRight}
            exiting={SlideOutLeft} 
            style={styles.title}
          >
            {data.title}
          </Animated.Text>
          <Animated.Text 
            entering={SlideInRight.delay(50)}
            exiting={SlideOutLeft} 
            style={styles.description}
          >
            {data.description}
          </Animated.Text>
          <View style={styles.buttonsRow}>
            <Text onPress={endOnboarding} style={styles.buttonText}>Skip</Text>
            <Pressable onPress={onContinue} style={styles.button}>
              <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </GestureDetector>
    </SafeAreaView>
  )
}

export default onboarding

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#15141A',
  },
  pageContent: {
    padding: 20,    
    flex: 1,
    // backgroundColor: 'red'
  },
  image: {
    alignSelf: 'center',
    margin: 20,
    marginTop: 70
  },
  title: {
    color: '#FDFDFD',
    fontSize: 50,
    fontFamily: 'InterBlack',
    letterSpacing: 1.3,
    marginVertical: 18,
  },
  description: {
    color: 'gray',
    fontSize: 20,
    fontFamily: 'Inter',
    lineHeight: 28,
  },
  footer: {
    marginTop: 'auto'
  },
  buttonsRow: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  button: {
    backgroundColor: '#302E38',
    borderRadius: 50,
    alignItems: 'center',
    flex: 1,
  },
  buttonText: {
    color: '#FDFDFD',
    fontFamily: 'InterSemi',
    fontSize: 16,
    padding: 15,
  },
  stepIndicatorContainer: {
    flexDirection: 'row',
    gap: 7
  },
  stepIndicator: { 
    backgroundColor: "gray",
    flex: 1,
    height: 3,
    borderRadius: 10
  },
})