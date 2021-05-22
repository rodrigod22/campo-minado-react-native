import React from 'react';
import { View, StyleSheet, Text } from 'react-native'


export default props => {
  return (
    <View style={styles.container}>
      <View style={styles.flagpole} />
      <View style={styles.flag} />
      <View style={styles.base1} />
      <View style={styles.base2} />
    </View>
  )
}

const styles = StyleSheet.create({
  container
})