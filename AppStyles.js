import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
  textarea: {
    height: 50,
    width: "90%",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  goalitem: {
    paddingVertical: 10,
    backgroundColor: "steelblue",

    marginVertical: 5,
    paddingHorizontal: 10,
  },
  goaltext: {
    color: "white",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flexbutton: {
    flexDirection: "row-reverse",
    marginVertical: 32,
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
  cancel: {
    color: "red",
  },
  inputbutton: {
    width: "40%",
  },
});
