import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, 
      { 
        key: Math.random().toString(), 
        value: goalTitle
      }]);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(
      currentGoals => {
        return currentGoals.filter((goal) => goal.key !== goalId);
      }
    );
  };

  return (
    <View style={styles.root}>
      <GoalInput onAddGoal={addGoalHandler}/>
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
