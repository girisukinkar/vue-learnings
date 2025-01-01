<script setup lang="ts">
import { defineProps } from 'vue';
import { useTaskStore } from '@/stores/useTaskStore';
import { Task } from '@/types/Task';
import BaseButton from '@/components/BaseButton.vue';

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
      <BaseButton type="primary" @clickHandler="toggleCompletion" :valueToPass="task.id" :text="task.isCompleted ? 'Undo' : 'Complete'" />
      <BaseButton type="secondary" @clickHandler="removeTask" :valueToPass="task.id" text="Delete" />
    
    </div>
  </div>
</template>
