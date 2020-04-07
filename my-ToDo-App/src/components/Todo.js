import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export const Todo = ({ todo, onRemove, onOpen }) => {
  const longPressHandler = () => {
    onRemove(todo.id);
  };

  return (
    <TouchableOpacity
      onPress={() => onOpen(todo.id)}
      onLongPress={longPressHandler}
    >
      <View style={styles.todo}>
        <Text style={styles.text}>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 10,
  },
  text: {
    fontFamily: "comfortaa-bold",
  },
});
