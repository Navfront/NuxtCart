<template>
    <div class="container">
        <h2>Страница оформления заказа</h2>

        <p>Кол-во товаров: {{ store.state.products.length }}</p>
        <p> С установкой: {{ store.state.withSetup ? "Да" : "Нет" }}</p>
        <NuxtLink class="btn btn--secondary backlink" to="/">Назад</NuxtLink>
    </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { IStore } from '~/types';

const store = useStore<IStore>();
</script>

<style scoped>
.container {
    text-align: center;
}

.backlink {
    margin: 0 auto;
    width: 300px;
}
</style>