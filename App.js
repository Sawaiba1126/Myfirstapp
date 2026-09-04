import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

function UserCard(props) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{props.name}</Text>
      <Text style={styles.cardText}>📧 {props.email}</Text>
      <Text style={styles.cardBadge}>{props.role}</Text>
    </View>
  );
}

export default function App() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [counterValue, setCounterValue] = useState(0);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.sectionHeading}>Task 3.6: Reusable Component via Props</Text>
      <UserCard name="Dell Intern" email="intern@dell.com" role="Mobile App Developer" />
      <UserCard name="Alex Smith" email="alex@company.com" role="UI/UX Designer" />

      <Text style={styles.sectionHeading}>Task 3.7: Interactive Features via State</Text>
      <View style={styles.interactiveBox}>
        <TextInput
          style={styles.inputField}
          placeholder="Enter your security password..."
          placeholderTextColor="#888"
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity style={styles.toggleButton} onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          <Text style={styles.toggleButtonText}>
            {isPasswordVisible ? "🙈 Hide Password" : "👁️ Show Password"}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.counterBox}>
        <Text style={styles.counterText}>Total Actions Logged: {counterValue}</Text>
        <Button title="Increment Counter" color="#007AFF" onPress={() => setCounterValue(counterValue + 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#f8f9fa', padding: 20, justifyContext: 'center' },
  sectionHeading: { fontSize: 18, fontWeight: 'bold', color: '#333333', marginTop: 25, marginBottom: 12, borderBottomWidth: 1, borderBottomColor: '#e0e0e0', paddingBottom: 5 },
  cardContainer: { backgroundColor: '#ffffff', padding: 15, borderRadius: 10, marginBottom: 10, borderWidth: 1, borderColor: '#e2e8f0', elevation: 2 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#1a202c' },
  cardText: { fontSize: 14, color: '#4a5568', marginVertical: 4 },
  cardBadge: { fontSize: 12, fontWeight: '600', color: '#007AFF', backgroundColor: '#ebf8ff', alignSelf: 'flex-start', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 4, marginTop: 4 },
  interactiveBox: { backgroundColor: '#ffffff', padding: 15, borderRadius: 10, borderWidth: 1, borderColor: '#e2e8f0', marginBottom: 15 },
  inputField: { height: 45, borderColor: '#cbd5e0', borderWidth: 1, borderRadius: 6, paddingHorizontal: 12, fontSize: 15, color: '#333333', backgroundColor: '#fafafa' },
  toggleButton: { marginTop: 10, backgroundColor: '#4a5568', paddingVertical: 10, borderRadius: 6, alignItems: 'center' },
  toggleButtonText: { color: '#ffffff', fontSize: 14, fontWeight: '600' },
  counterBox: { backgroundColor: '#ffffff', padding: 15, borderRadius: 10, borderWidth: 1, borderColor: '#e2e8f0', alignItems: 'center' },
  counterText: { fontSize: 16, fontWeight: '500', color: '#333333', marginBottom: 10 },
});
