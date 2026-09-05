import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';

// =========================================================
// 1. REUSABLE SERVICE CARD COMPONENT (Topic 3.6 - Props)
// =========================================================
function ServiceCard(props) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardEmoji}>{props.emoji}</Text>
      <Text style={styles.cardTitle}>{props.title}</Text>
      <Text style={styles.cardPrice}>{props.price}</Text>
    </View>
  );
}

// =========================================================
// 2. MAIN APPLICATION COMPONENT (Multi-Screen Navigation)
// =========================================================
export default function BeautySalonApp() {
  // Topic 3.7 - State Management for Screen Routing & User Forms
  const [currentScreen, setCurrentScreen] = useState('Home'); // Home, Services, Confirmation
  const [customerName, setCustomerName] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleBookNow = () => {
    if (customerName.trim() === '' || selectedDate.trim() === '') {
      Alert.alert("Input Error", "Please fill in your name and preferred date to book an appointment!");
    } else {
      setCurrentScreen('Confirmation');
    }
  };

  return (
    <View style={styles.mainScreen}>
      
      {/* GLOBAL HEADER APP BAR (Proper Spacing & Alignment) */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Glow & Grace Salon</Text>
        <Text style={styles.headerSubtitle}>Premium Mobile App Dashboard</Text>
      </View>

      {/* ==========================================
          SCREEN 1: WELCOME / HOME VIEW
         ========================================== */}
      {currentScreen === 'Home' && (
        <View style={styles.centerContainer}>
          <Image 
            source={{ uri: 'https://reactnative.dev' }} // Placeholder for Salon Logo [3.5]
            style={styles.salonLogo} 
          />
          <Text style={styles.welcomeTitle}>Welcome to Glow & Grace</Text>
          <Text style={styles.welcomeDescription}>
            Your premium destination for luxury hair styling, facial makeovers, and expert bridal care aesthetics.
          </Text>
          
          <TouchableOpacity 
            style={styles.primaryButton} 
            activeOpacity={0.85}
            onPress={() => setCurrentScreen('Services')} // Changes state to switch screen [3.7]
          >
            <Text style={styles.buttonText}>Explore Our Services ✨</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* ==========================================
          SCREEN 2: SERVICES & INTERACTIVE BOOKING
         ========================================== */}
      {currentScreen === 'Services' && (
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.sectionTitle}>1. Select Premium Services</Text>
          
          {/* FLEXBOX HORIZONTAL ROW GRID (Topic 3.9 - Two Modular Cards Side-by-Side) */}
          <View style={styles.rowLayoutContainer}>
            <ServiceCard emoji="💇‍♀️" title="Hair Styling" price="$45.00" />
            <ServiceCard emoji="💄" title="Facial Makeup" price="$60.00" />
          </View>

          <Text style={styles.sectionTitle}>2. Secure Online Appointment</Text>
          <View style={styles.interactiveBox}>
            {/* TEXTINPUT COMPONENTS (Topic 3.5 & 3.8) */}
            <TextInput
              style={styles.inputBox}
              placeholder="Enter Your Full Name..."
              placeholderTextColor="#888"
              value={customerName}
              onChangeText={(text) => setCustomerName(text)}
            />
            <TextInput
              style={styles.inputBox}
              placeholder="Preferred Date (e.g., 12-Sep)..."
              placeholderTextColor="#888"
              value={selectedDate}
              onChangeText={(text) => setSelectedDate(text)}
            />

            <TouchableOpacity 
              style={styles.bookingButton} 
              activeOpacity={0.8} 
              onPress={handleBookNow}
            >
              <Text style={styles.buttonText}>Confirm My Appointment</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.backLink} onPress={() => setCurrentScreen('Home')}>
            <Text style={styles.backLinkText}>← Go Back To Home</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* ==========================================
          SCREEN 3: BOOKING CONFIRMATION (Dynamic JSX Rendering)
         ========================================== */}
      {currentScreen === 'Confirmation' && (
        <View style={styles.centerContainer}>
          <Text style={styles.successIcon}>🎉</Text>
          <Text style={styles.welcomeTitle}>Booking Successful!</Text>
          
          {/* Dynamic JSX Expressions displaying state values [3.4] */}
          <Text style={styles.welcomeDescription}>
            Thank you, <Text style={styles.highlightText}>{customerName}</Text>! Your premium session has been scheduled successfully for <Text style={styles.highlightText}>{selectedDate}</Text>.
          </Text>

          <TouchableOpacity 
            style={styles.primaryButton} 
            onPress={() => {
              setCustomerName('');
              setSelectedDate('');
              setCurrentScreen('Home'); // Resets application flow
            }}
          >
            <Text style={styles.buttonText}>Book Another Session</Text>
          </TouchableOpacity>
        </View>
      )}

    </View>
  );
}

// =========================================================
// 3. StyleSheet CONFIGURATION (Topic 3.8 & 3.9)
// =========================================================
const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: '#fff5f5', // Soft luxury pink-tinted background
  },
  headerContainer: {
    backgroundColor: '#800020', // Luxury Burgundy color theme
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 4,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 1,
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#FFC0CB',
    marginTop: 4,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  salonLogo: {
    width: 90,
    height: 90,
    marginBottom: 20,
    borderRadius: 45,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#800020',
    textAlign: 'center',
    marginBottom: 10,
  },
  welcomeDescription: {
    fontSize: 15,
    color: '#555555',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  scrollContent: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#800020',
    marginTop: 10,
    marginBottom: 12,
  },
  rowLayoutContainer: {
    flexDirection: 'row', // Horizontal flex mechanics grid mapping
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 25,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 14,
    alignItems: 'center',
    elevation: 3,
    borderWidth: 1,
    borderColor: '#ffd1dc',
  },
  cardEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },
  cardPrice: {
    fontSize: 14,
    color: '#800020',
    fontWeight: '600',
  },
  interactiveBox: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#ffd1dc',
    marginBottom: 20,
    elevation: 2,
  },
  inputBox: {
    width: '100%',
    height: 50,
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 15,
    color: '#333333',
    marginBottom: 15,
  },
  primaryButton: {
    backgroundColor: '#800020',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3,
  },
  bookingButton: {
    backgroundColor: '#4CAF50', // Clear success green feedback loop
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
    elevation: 2,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  successIcon: {
    fontSize: 64,
    marginBottom: 15,
  },
  highlightText: {
    fontWeight: 'bold',
    color: '#800020',
  },
  backLink: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  backLinkText: {
    color: '#800020',
    fontSize: 14,
    fontWeight: '600',
  },
});
