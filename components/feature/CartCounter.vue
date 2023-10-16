<template>
    <SharedButton class-name="count-controls__btn count-controls__btn--minus interactive"
        aria="Убрать единицу товара" :size-px="10" :click-handler="decrement">
        <template #center>
            <IconMinus />
        </template>
    </SharedButton>

    <input class="count-controls__prod-count" type="number" :name="'count-' + prodId" min="1" max="99"
        required v-model="currentCount" />

    <SharedButton class-name="count-controls__btn count-controls__btn--plus interactive"
        aria="Добавить единицу товара" :size-px="10" :click-handler="increment">
        <template #center>
            <IconPlus />
        </template>
    </SharedButton>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { IStore } from '~/types';


interface CartCounterProps {
    count: number
    prodId: string
}

const { count, prodId } = defineProps<CartCounterProps>()

const store = useStore<IStore>()

const { currentCount, increment, decrement } = useCounter(count, (ref) => {
    store.dispatch('setProdCount', { prodId, count: ref.value })

}, (ref) => {
    store.dispatch('setProdCount', { prodId, count: ref.value })
})
</script>

<style scoped>
input[type='number'] {
    -moz-appearance: textfield;
}
</style>
