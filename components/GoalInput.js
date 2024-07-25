import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, M, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');
  function goalInputHandler(enteredText){
    setEnteredGoal(enteredText);
 };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }
    return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
          <TextInput 
            placeholder='thing that should be done' 
            style={styles.input}
            onChangeText = {goalInputHandler}
            value={enteredGoal} />
          <View style = {styles.buttonContainer}>

            <View style={styles.button}>
              <Button title="CANCEL" color="red" onPress={props.onCancel} />
            </View>
            <View style={styles.button}>
              <Button title="ADD" onPress={addGoalHandler}/>
            </View>
          </View>         
      </View>
    </Modal>
    );
};

const styles = StyleSheet.create({
  inputContainer:{
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
    },
    input:{
    width: 200, 
    borderBottomColor: 'black', 
    borderBottomWidth: 1,
    padding: 10,
    },
    buttonContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '60%'
    },
    button: {
      width: '40%'
    }

});

export default GoalInput;