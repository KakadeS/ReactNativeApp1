import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

class CommonDate extends Component {
  render() {
    var today = new Date();
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday"];
    var todaysDay = weekDays[today.getDay()];
    const today1 = today.toString();
    const currentYear = today1.substring(10, 15);
    const currentMonth = today1.substring(4, 10);
    return (
        <View style={{ marginBottom: 5, marginLeft: 7 }}>
          <Text style={styles.labelStyle}>{"" + todaysDay + "," + " " + currentMonth + "," + currentYear}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  labelStyle: {
    color: '#1e90ff',
    fontSize: 14,
    marginTop: 5
  }
});

export {CommonDate};

