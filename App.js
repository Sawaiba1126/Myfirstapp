import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function Day4App() {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.mainScreen}>
      {/* 1. HEADER COMPONENT with Background and Padding */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Day 4: Dashboard UI</Text>
        <Text style={styles.headerSubtitle}>Styling & Flexbox Layout</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* 2. INPUT BOX: Styling with Border, Padding, and Radius */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search items or categories..."
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />

        {/* 3. VERTICAL LAYOUT SECTION: Elements stacked vertically */}
        <Text style={styles.sectionTitle}>Featured Announcement</Text>
        <View style={styles.largePromoCard}>
          <Image 
            source={{ uri: 'https://reactnative.dev' }} 
            style={styles.promoImage} 
          />
          <View style={styles.promoTextContainer}>
            <Text style={styles.promoHeading}>Learn Flexbox Layouts</Text>
            <Text style={styles.promoDescription}>
              Rows and columns make it super easy to design complex mobile application interfaces.
            </Text>
          </View>
        </View>

        {/* 4. HORIZONTAL LAYOUT SECTION: Two cards side-by-side using flexDirection: 'row' */}
        <Text style={styles.sectionTitle}>Analytics Cards (Row Layout)</Text>
        <View style={styles.rowLayoutContainer}>
          
          {/* Card 1 */}
          <View style={styles.halfCard}>
            <Text style={styles.cardHeader}>Active Users</Text>
            <Text style={styles.cardValue}>1,240</Text>
            <Text style={styles.cardGrowth}>+12% This Week</Text>
          </View>

          {/* Card 2 */}
          <View style={styles.halfCard}>
            <Text style={styles.cardHeader}>Tasks Solved</Text>
            <Text style={styles.cardValue}>48</Text>
            <Text style={styles.cardGrowth}>100% Done</Text>
          </View>

        </View>

        {/* 5. PROPERLY STYLED BUTTON COMPONENT using TouchableOpacity */}
        <TouchableOpacity style={styles.primaryButton} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Publish Dashboard Report</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

// StyleSheet Configuration (Topic 3.8 & 3.9)
const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: '#f4f6f9',
  },
  headerContainer: {
    backgroundColor: '#1D3D47',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center', // Center content horizontally
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#A1CEDC',
    marginTop: 4,
  },
  scrollContent: {
    padding: 20,
  },
  searchBar: {
    width: '100%',
    height: 50,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333333',
    marginBottom: 25,
    // Basic shadow/elevation for depth
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 12,
  },
  largePromoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 15,
    flexDirection: 'row', // Horizontal placement for image and text
    alignItems: 'center',
    gap: 15, // Space between image and text container
    marginBottom: 25,
    elevation: 3,
  },
  promoImage: {
    width: 65,
    height: 65,
    borderRadius: 10,
  },
  promoTextContainer: {
    flex: 1, // Take remaining row space smoothly
  },
  promoHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: 4,
  },
  promoDescription: {
    fontSize: 13,
    color: '#666666',
    lineHeight: 18,
  },
  rowLayoutContainer: {
    flexDirection: 'row', // Align cards side-by-side horizontally
    justifyContent: 'space-between', // Push cards to extreme edges evenly
    gap: 12, // Space between the cards
    marginBottom: 30,
  },
  halfCard: {
    flex: 1, // Share equal width inside the row layout container
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 14,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF', // Nice side blue border badge
  },
  cardHeader: {
    fontSize: 13,
    fontWeight: '600',
    color: '#718096',
    marginBottom: 6,
  },
  cardValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: 4,
  },
  cardGrowth: {
    fontSize: 12,
    color: '#38A169', // Green color text
    fontWeight: '500',
  },
  primaryButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    elevation: 3,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
