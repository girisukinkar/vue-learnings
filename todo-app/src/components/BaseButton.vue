<template>
    <button
        class="px-3 py-1"
        :class="buttonClass"
        @click="clickEvent"
      >
        {{ props.text }}
      </button>
</template>
<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

const props = defineProps({
    text: {
        type: String,
        required: true
    },
    clickHandler: {
        type: Function,
        required: false,
        default: () => {}
    },
    valueToPass: {
        type: [String , Boolean],
        required: false,
        default: null
    },
    type: {
        type: String,
        required: false,
        default: 'bg-red-500 text-white rounded hover:bg-red-600'
    }
})

let buttonClass = ''
setButtonClass()

function setButtonClass () {
    switch (props.type) {
        case 'primary':
            buttonClass = 'bg-green-500 text-white rounded hover:bg-green-600'
            break;
        case 'secondary':
            buttonClass = 'bg-red-500 text-white rounded hover:bg-red-600'
            break;
    
        default:
            break;
    }
}



const emits = defineEmits(['clickHandler'])

const clickEvent = () => {
    emits('clickHandler', props.valueToPass)
} 
</script>