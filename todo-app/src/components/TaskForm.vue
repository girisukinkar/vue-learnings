<template>
    <form @submit.prevent="addNewTask" class="flex flex-col gap-4 mb-4">
      <input
        v-model="title"
        type="text"
        placeholder="Task Title"
        class="p-2 border rounded-md focus:ring focus:ring-blue-300"
        required
      />
      <input
        v-model="description"
        placeholder="Task Description"
        class="p-2 border rounded-md focus:ring focus:ring-blue-300"
      ></input>
      <button
        type="submit"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Task
      </button>
    </form>
  </template>
  
<script setup lang="ts">
import { useTaskStore } from '../stores/useTaskStore'
import { Task } from '@/types/Task'
import { ref } from 'vue';
let title = ref<string>('')
let description = ref<string>('')
const store = useTaskStore()
console.log(store)

function addNewTask () {
    const newTask: Task = {
        id: Date.now(),
        title: title.value,
        description: description.value,
        isCompleted: false
    }
    store.addTask(newTask)
    title.value = ''
    description.value = ''
}
</script>