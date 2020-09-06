import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Addtodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHeader = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={Styles.input}
        placeholder="new todo..."
        onChangeText={changeHeader}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="add todo"
        color="coral"
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
