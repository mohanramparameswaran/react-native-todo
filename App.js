import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from 'react-native';
import Header from './components/Header';
import Todoitem from './components/Todoitem';
import Addtodo from './components/Addtodo';

export default function App() {
  const [todos, setTodos] = useState('');

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };
  const submitHandler = (text) => {
    if (text.length > 0) {
      setTodos((prevTodos) => {
        return [{text: text, key: Math.random().toString()}, ...prevTodos];
      });
    } else {
      Alert.alert('OOPS!', 'ToDos must not be empty', [
        {text: 'Understood', onPress: () => console.log('alert closed')},
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('dismissed keyboard');
      }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Addtodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <Todoitem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "black",
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
