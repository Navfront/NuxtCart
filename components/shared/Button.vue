<template>
    <button :class="className" :type="type"
        @click="(e) => { prevent && e.preventDefault(); clickHandler(e) }" :disabled="disabled">
        <span class="visually-hidden">{{ aria }}</span>
        <IconPreloader v-if="!preloaderR && isLoading" :size-px="sizePx" :color="preloaderColor" />
        <slot name="left"></slot>
        <slot name="center"></slot>
        <slot name="right"></slot>
        <IconPreloader v-if="preloaderR && isLoading" :size-px="sizePx" :color="preloaderColor" />
    </button>
</template>

<script setup lang="ts">

interface ButtonProps {
    className?: string
    clickHandler: ((payload: MouseEvent) => void)
    isLoading?: boolean
    aria?: string
    sizePx?: number
    preloaderR?: boolean
    disabled?: boolean
    type?: 'submit' | 'button' | 'reset'
    prevent?: boolean
    preloaderColor?: string
}

const { className, clickHandler, isLoading = false, aria, sizePx = 24, preloaderR = false, disabled = false, type = 'button', prevent = false, preloaderColor = '#0069b4' } = defineProps<ButtonProps>()
</script>

<style scoped>
button {
    transition: 0.15s ease-in opacity, 0.15s ease-in filter;
}

button[disabled] {
    filter: grayscale(1);
    opacity: 0.4;
    cursor: not-allowed;
}
</style>