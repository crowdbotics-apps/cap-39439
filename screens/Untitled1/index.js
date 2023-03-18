import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}>
        <Text style={styles.anDgJDfo}>Howdy</Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  anDgJDfo: {
    position: "absolute",
    top: 278,
    left: 156.5
  }
});
export default Untitled1;