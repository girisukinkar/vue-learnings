import { ref } from "vue";
import { defineStore } from "pinia";
import type { Task } from '../types/Task';

export const useTaskStore = defineStore('task', () => {
    const tasks = ref<Task[]>([]);

    function addTask (task: Task) {
        tasks.value.push(task);
    }

    const removeTask = (id: number) => {
        console.log(tasks.value)
        tasks.value = tasks.value.filter(t => t.id !== id)
        console.log(tasks.value, 'after')

    }

    function toggleCompletion (id: number) {
        const taskItem = tasks.value.find(t => t.id === id)
        if (taskItem) taskItem.isCompleted = !taskItem.isCompleted
    }

    return { tasks, addTask, removeTask, toggleCompletion }
})