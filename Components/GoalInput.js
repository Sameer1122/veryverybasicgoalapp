import React from "react";
import { TextInput, Button, Modal, View } from "react-native";
import { styles } from "../AppStyles";

const GoalInput = ({
  enteredGoal,
  setenteredGoal,
  addedGoal,
  setaddedGoal,
  toggle,
  settoggle,
}) => {
  const inputTracker = (enteredText) => {
    setenteredGoal(enteredText);
    console.log(enteredText);
  };
  const addGoal = () => {
    setaddedGoal((currentGoal) => [
      ...currentGoal,
      { id: Math.random().toString(), value: enteredGoal },
    ]);
    console.log(addedGoal);
    setenteredGoal("");
    settoggle(false);
  };
  return (
    <Modal visible={toggle} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add Goals"
          value={enteredGoal}
          style={styles.textarea}
          onChangeText={inputTracker}
        />

        <View style={styles.flexbutton}>
          <View style={styles.inputbutton}>
            <Button title="Add" color="seagreen" onPress={addGoal} />
          </View>
          <View style={styles.inputbutton}>
            <Button
              title="Cancel"
              color="red"
              style={styles.cancel}
              onPress={() => settoggle(false)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
