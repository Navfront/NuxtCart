<template>
    <svg :height="sizePx" :width="sizePx" style="margin: auto; display: block; shape-rendering: auto;"
        viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" :fill="color" stroke="none">
            <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite"
                keyTimes="0;1" values="0 50 51;360 50 51"></animateTransform>
        </path>
    </svg>
</template>

<script setup lang="ts">
interface IPreloaderProps {
    sizePx: number
    color?: string
}
const { sizePx, color = '#0069b4' } = defineProps<IPreloaderProps>()
</script>
