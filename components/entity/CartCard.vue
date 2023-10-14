<template>
    <li class="cart-products__item cart-prod">
        <img :src="img" :alt="title" class="cart-prod__thumb" />
        <h3 class="cart-prod__title">{{ title }}</h3>
        <span class="cart-prod__descr">{{ descr }}</span>
        <span class="cart-prod__article">Артикул: {{ article }}</span>

        <div class="cart-prod__controls count-controls">
            <slot name="counter" :count-ref="currentCount">
            </slot>
        </div>
        <span class="cart-prod__price-one">{{ price }} ₽/шт. </span>
        <div class="cart-prod__total">{{ totalPrice }} ₽</div>
        <slot name="remover"></slot>
    </li>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { IStore } from '~/types';


interface ICartCardProps {
    id: string
    index: number
    img: string
    title: string
    descr: string
    article: string
    count: number
    price: number
}

const { img, index, title, descr, article, price, count } = defineProps<ICartCardProps>()

const store = useStore<IStore>()

watch(store.state.products, () => {
    currentCount.value = store.state.products[index].count
})

const currentCount = ref(count)

const totalPrice = computed(() => currentCount.value * price)



</script>

