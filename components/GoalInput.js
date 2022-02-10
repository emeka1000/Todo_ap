import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.content}>
        <TextInput
          placeholder="Enter todo"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buts}>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="cancel" color={"red"} onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 8,
    width: "80%",
    borderRadius: 50,
    marginBottom: 10,
  },
  buts: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "50%",
  },
});

export default GoalInput;
