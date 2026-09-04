import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';

export default function Day2Task() {
  // 1. JavaScript variable for Dynamic Rendering (Topic 3.4)
  const internName = "Dell Intern"; 
  const [topicInput, setTopicInput] = useState('');

  const checkTaskStatus = () => {
    if (topicInput.trim() === '') {
      Alert.alert("Error!", "Please enter the topic name first.");
    } else {
      Alert.alert("Success!", `Congratulations! ${internName} has completed the task for ${topicInput}.`);
    }
  };

  return (
    // 2. VIEW: The main parent container component (Topic 3.5)
    <View style={styles.container}>
      
      {/* 3. IMAGE: Displaying an online network logo */}
      <Image 
        source={{ uri: 'https://reactnative.dev' }} 
        style={styles.logo} 
      />

      {/* 4. TEXT: Combination of Static and Dynamic Rendering (Topic 3.4) */}
      <Text style={styles.heading}>Day 2: Intern Dashboard</Text>
      <Text style={styles.welcomeText}>Welcome, {internName}! 👋</Text>
      <Text style={styles.description}>
        Today we are learning View, Text, Image, TextInput, and Button components.
      </Text>

      {/* 5. TEXTINPUT: Input field for user interaction */}
      <TextInput
        style={styles.inputBox}
        placeholder="Which topic did you learn today?..."
        placeholderTextColor="#888"
        value={topicInput}
        onChangeText={(text) => setTopicInput(text)}
      />

      {/* 6. BUTTON: Triggers the action on press */}
      <View style={styles.buttonWrapper}>
        <Button 
          title="Verify My Day 2 Task" 
          color="#4CAF50" 
          onPress={checkTaskStatus} 
        />
      </View>

    </View>
  );
}

// Styling section using StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 15,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  welcomeText: {
    fontSize: 18,
    color: '#007AFF',
    fontWeight: '600',
    marginBottom: 15,
  },
  description: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 20,
  },
  inputBox: {
    width: '100%',
    height: 50,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333333',
    marginBottom: 20,
    backgroundColor: '#fafafa',
  },
  buttonWrapper: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
});
