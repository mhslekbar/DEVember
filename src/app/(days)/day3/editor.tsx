import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MarkdownDisplay from '@/components/day3/MarkdownDisplay'
import { TextInput } from 'react-native-gesture-handler'

const template: any = `
# Markdown editor
Hello **world**!

`

const EditorScreen = () => {
  const [content, setContent] = useState(template)
  const [tab, setTab] = useState("preview")

  return (
    <View style={styles.page}>
      <View style={styles.tabsContainer}>
        <Pressable onPress={() => setTab("edit")} style={[styles.tab, { borderColor: tab === "edit" ? "mediumorchild" : "gray" }]}>
          <Text style={styles.tabText}>Edit</Text>
        </Pressable>
        <Pressable onPress={() => setTab("preview")} style={[styles.tab, { borderColor: tab === "preview" ? "mediumorchild" : "gray" }]}>
          <Text style={styles.tabText}>Preview</Text>
        </Pressable>
      </View>
      {tab === "edit" && <TextInput 
        value={content}
        onChangeText={setContent} 
        multiline 
        numberOfLines={50} 
        style={styles.input} 
      />}
      {tab === "preview" && <MarkdownDisplay>{content}</MarkdownDisplay>}
    </View>
  )
}

export default EditorScreen
const styles = StyleSheet.create({
  page: {
    backgroundColor: 'whitesmoke',
    flex: 1,
    padding: 10,
  },
  input: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
    borderRadius: 10,
    fontSize: 16,
  },
  tabsContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10
  },
  tab: {
    flex: 1,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center'
  },
  tabText: {
    fontFamily: 'InterBold'
  }
})