import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.goalsList}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goalsList: {
    padding: 10,
    backgroundColor: "gray",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 50,
    marginVertical: 10,
  },
});

export default GoalItem;
