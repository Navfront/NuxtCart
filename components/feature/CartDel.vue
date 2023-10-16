<template>
    <SharedButton :clickHandler="deleteHandler"
        class-name="cart-prod__btn-delete interactive interactive--warn"
        aria="Удалить с товар с корзины" :size-px="16" :isLoading="isDeleting">
        <template #center>
            <IconDel v-if="!isDeleting" />
        </template>
    </SharedButton>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { IStore } from '~/types';

const store = useStore<IStore>()
const isDeleting = ref(false);

interface ICartDelProps {
    prodId: string
}

const { prodId } = defineProps<ICartDelProps>()

function deleteHandler() {
    isDeleting.value = true
    store.dispatch('deleteProduct', prodId).finally(() => {
        isDeleting.value = false
    })
}
</script>

