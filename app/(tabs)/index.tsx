import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import Header from '@/components/Header';
import Card from '@/components/Card';

export default function Home() {
  const data = [
  { id: 1, name: 'Total Unit', number: 150, title: 'Total Unit' },
  { id: 2, name: 'Rented', number: 2, title: 'Rented' },
  { id: 3, name: 'Earnings', number: 1200, title: 'Earnings' },
  { id: 4, name: 'Total Waiting', number: 3, title: 'Total Waiting' },
  { id: 5, name: 'Available Units', number: 10, title: 'Available Units' },
  { 
    id: 6, 
    title: 'Actions', 
    buttons: [
      { name: 'New Rental', icon: 'shopping-cart', route: '/newRental' },
      { name: 'Return', icon: 'reply', route: '/return' },
      { name: 'Report', icon: 'bar-chart', route: '/report' },
    ]
  },
];


  const vehicle = [
    { id: 1, name: 'Scooter', price: 50 },
    { id: 2, name: 'Bike Electric', price: 20 },
    { id: 3, name: 'Bogey', price: 90 },
  ];

  const account = [
    { id: 1, name: 'John Doe', position: 1, vehicleId: 2, wait: 5, image: 'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D' },
    { id: 2, name: 'Jane Smith', position: 2, vehicleId: 1, wait: 2, image: 'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg' },
    { id: 3, name: 'Michael Brown', position: 3, vehicleId: 3, wait: 1, image: 'https://img.freepik.com/free-photo/portrait-young-woman-with-natural-make-up_23-2149084942.jpg' },
  ];

  const rows = [
    data.slice(0, 3), // First row with 3 cards
    data.slice(3, 5), // Second row with 2 cards
    data.slice(5, 6), // Third row with 1 card
  ];

  const getVehicleName = (vehicleId:Number) => {
    const veh = vehicle.find(v => v.id === vehicleId);
    return veh ? veh.name : '';
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
      title='Dashboard'
      leftIcon='navicon'
      rightIcon='log-out'/>
      <View style={styles.cardContainer}>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex}>
            <View style={styles.row}>
              {row.map(item => (
                <Card 
                    key={item.id}
                    number={item.number} // Send number if available
                    title={item.title}
                    buttons={item.buttons} // Send button if available
                    style={styles.card}
                />
              ))}
            </View>
          </View>
        ))}
        <Text style={styles.title}>Queue Status</Text>
        <ScrollView style={styles.scrollContainer}>
          {account.map(user => (
            <View style={styles.row} key={user.id}>
              <Image
                style={styles.ProfilePict}
                source={{ uri: user.image }}
              />
              <View style={{ paddingLeft: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: '500' }}>{user.name}</Text>
                <Text style={{ fontSize: 12, fontWeight: '300' }}>Position: {user.position}, Vehicle: {getVehicleName(user.vehicleId)}, Wait Time: {user.wait} mins</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8F9',
    paddingTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 4,
    paddingTop: 24,
    paddingBottom: 16,
  },
  cardContainer: {
    flexDirection: 'column',
    padding: 8,
  },
  scrollContainer: {
    maxHeight: 200, // Set the maximum height of the scrollable area
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  card: {
    flexBasis: '30%',
  },
  ProfilePict: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});



