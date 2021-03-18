import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setisAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, 
      { 
        key: Math.random().toString(), 
        value: goalTitle
      }]);
      setisAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(
      currentGoals => {
        return currentGoals.filter((goal) => goal.key !== goalId);
      }
    );
  };

  const cancelGoalAdditionalHandler = () => {
    setisAddMode(false);
  };

  return (
    <View style={styles.root}>
      <Button title="Add New Goal" onPress={() => setisAddMode(true)}/>
      <GoalInput 
        visible={isAddMode} 
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionalHandler}/>
      <FlatList
        data={courseGoals}
        renderItem={
          itemData => 
          <GoalItem 
            id={itemData.item.key}
            title={itemData.item.value}
            onDelete={removeGoalHandler}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 50
  },
});
