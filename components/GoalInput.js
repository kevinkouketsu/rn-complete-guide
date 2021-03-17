import React, { useState } from 'react';

import { View, Button, TextInput, StyleSheet } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
      setEnteredGoal(enteredText);
    }
  
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Type your Goal"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}/>
            <Button title="Add" 
                onPress={props.onAddGoal.bind(this, enteredGoal)}/>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        borderBottomWidth: 1, 
        borderBottomColor: 'black',
        padding:10,
        width:'80%'
    }
});

export default GoalInput;