<script setup lang="ts">
import TaskForm from './components/TaskForm.vue'
import TodoView from '@/views/TodoView.vue'
import useTaskStore from './stores/useTaskStore'
</script>

<template>
  <div class="container mx-auto mt-10">

    <div>Hello</div>
    <TaskForm />
    <TodoView />
  </div>
</template>

