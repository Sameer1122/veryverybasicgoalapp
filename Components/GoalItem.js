import React from "react";
import { View, Text, TouchableNativeFeedback } from "react-native";
import { styles } from "../AppStyles";
const GoalItem = ({ item, setaddedGoal }) => {
  const deleteItem = (id) => {
    setaddedGoal((prevGoal) => {
      return prevGoal.filter((goal) => goal.id !== id);
    });
  };
  return (
    <TouchableNativeFeedback onPress={deleteItem.bind(this, item.id)}>
      <View style={styles.goalitem}>
        <Text style={styles.goaltext}>{item.value}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default GoalItem;
