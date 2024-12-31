<template>
    <div v-for="task in tasks" :key="task.id">
        <TaskItem :task="task" />
    </div>
</template>

<script setup lang="ts">
import {toRefs} from 'vue'
import TaskItem from '@/components/TaskItem.vue'
import { useTaskStore } from '@/stores/useTaskStore'

const { tasks } = toRefs(useTaskStore())
</script>