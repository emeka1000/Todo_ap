import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.content}>
      <TextInput
        placeholder="Enter todo"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 8,
    width: "70%",
    borderRadius: 50,
  },
});

export default GoalInput;
