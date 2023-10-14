<template>
    <SharedButton :clickHandler="clearHandler" class-name="cart__btn-clear interactive"
        aria="Удалить с товар с корзины" :size-px="16" :disabled="isDeleting || !canDelete">
        <template #center>
            <span v-if="isDeleting">Очищаем..</span>
            <span v-else>Очистить корзину</span>
        </template>
    </SharedButton>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { IStore } from '~/types';

const isDeleting = ref(false)
const store = useStore<IStore>();
const canDelete = computed(() => store.state.products.length)
function clearHandler() {
    isDeleting.value = true;
    store.dispatch('deleteProducts').then(() => {
        isDeleting.value = false
    })
}
</script>

