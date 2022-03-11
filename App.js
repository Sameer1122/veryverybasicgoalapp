import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import GoalItem from "./Components/GoalItem";
import {
  StyleSheet,
  TextInput,
  Text,
  Button,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import { styles } from "./AppStyles";
import GoalInput from "./Components/GoalInput";

export default function App() {
  const [enteredGoal, setenteredGoal] = useState("");
  const [addedGoal, setaddedGoal] = useState([]);
  const [toggle, settoggle] = useState(false);

  return (
    <View style={styles.screen}>
      <Button title={"Add Goal"} onPress={() => settoggle(true)} />
      <GoalInput
        enteredGoal={enteredGoal}
        toggle={toggle}
        setenteredGoal={setenteredGoal}
        addedGoal={addedGoal}
        setaddedGoal={setaddedGoal}
        settoggle={settoggle}
      />
      <FlatList
        data={addedGoal}
        renderItem={(itemData) => (
          <GoalItem item={itemData.item} setaddedGoal={setaddedGoal} />
        )}
      ></FlatList>
    </View>
  );
}
