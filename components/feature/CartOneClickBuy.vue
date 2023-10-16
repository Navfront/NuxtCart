<template>
    <SharedButton :clickHandler="submitHandler" class-name="btn btn--secondary cart-summary__btn-buy"
        aria="Купить в 1 клик" :size-px="26" :isLoading="submiting" :prevent="true" type="submit"
        :disabled="submiting || disabled">
        <template #center>
            <span v-if="!submiting">Купить в 1 клик</span>
        </template>
    </SharedButton>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { IStore } from '~/types';

const submiting = ref(false)
const store = useStore<IStore>();

interface IOrderSumbitProps {
    disabled: boolean
}

const { disabled } = defineProps<IOrderSumbitProps>()

function submitHandler() {
    submiting.value = true
    store.dispatch('submitOrder').then(() => submiting.value = false)
}
</script>


