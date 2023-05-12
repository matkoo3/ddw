<script setup>
let taskTitle=""
let taskText=""
let deadline=""

const {tasks, addTask}=useTasks();

const editMode = ref(false);

const handleSaveWasClicked = () =>{
  addTask({taskTitle:taskTitle, taskText:taskText, deadline:deadline})
  editMode.value=false
}
const handleAddTaskWasClicked = () =>{
  editMode.value=true
}
const handleCancelWasClicked = () =>{
  editMode.value=false
}
console.log(tasks.pole)
</script>

<template>
  <div>
    <h1>TODO list</h1>
    <button @click="handleAddTaskWasClicked" v-if="!editMode">Add Task</button>
    <div v-else>
      <input placeholder="Enter task title" v-model="taskTitle" >
      <input placeholder="Enter task description" v-model="taskText" >
      <input placeholder="Enter task deadline" v-model="deadline">
      <button @click="handleCancelWasClicked">Cancel</button>
      <button @click="handleSaveWasClicked">Add</button>
    </div>
    <div class="container" v-if="!editMode">
      <div v-for="item of tasks.pole" :key="item.id">
        <div>title: {{item.taskTitle}}</div>
        <div>description: {{item.taskText}}</div>
        <div>deadline: {{item.deadline}}</div>
      </div>
    </div>
  </div>
</template>