import React, { useState } from 'react';

import { View, Button, TextInput, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
      setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };
  
    return (
    <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Type your Goal"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}/>
            <View style={styles.buttonsContainer}>
                <View
                    style={styles.button}>
                    <Button 
                        title="Add" 
                        onPress={addGoalHandler}/>
                </View>
                <View
                    style={styles.button}>
                    <Button 
                        style={styles.buttons}
                        title="Cancel" 
                        onPress={props.onCancel} 
                        color="red"/>
                </View>
            </View>
        </View>
    </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderBottomWidth: 1, 
        borderBottomColor: 'black',
        padding:10,
        width:'80%',
        marginBottom:10
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        width: '40%'
    }
});

export default GoalInput;