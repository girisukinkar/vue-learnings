<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import { useTaskStore } from '@/stores/useTaskStore';
import { Task } from '@/types/Task';

const props = defineProps<{task: Task}>()
const task = props.task

const { toggleCompletion, removeTask } = useTaskStore()

</script>

<template>
  <div
    class="p-4 border rounded-md mb-2 flex justify-between items-center"
    :class="{ 'bg-gray-200 line-through': task.isCompleted }"
  >
    <div>
      <h3 class="font-bold text-lg">{{ task.title }}</h3>
      <p class="text-sm text-gray-600">{{ task.description }}</p>
    </div>
    <div class="flex gap-2">
      <button
        class="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-decoration-none"
        @click="toggleCompletion(task.id)"
      >
        {{ task.isCompleted ? "Undo" : "Complete" }}
      </button>
      <button
        class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        @click="removeTask(task.id)"
      >
        Delete
      </button>
    </div>
  </div>
</template>
