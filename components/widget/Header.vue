<template>
    <header class="page__header header">
        <div class="container">
            <div class="header__top">
                <h1 class="visually-hidden">Интернет магазин меаком</h1>
                <p>Token: {{ store.state.token }}</p>
            </div>
            <div class="header__bottom">
                <NuxtLink class="header__cart-info cart-info" to="/">
                    <IconPreloader :size-px="32" class="cart-info__icon" v-if="store.state.isLoading" />
                    <IconCart class="cart-info__icon" v-else />
                    <div class="cart-info__wrap">
                        <span class="cart-info__title">Ваша корзина</span>
                        <span class="cart-info__count">{{ cartProdCount }} {{ normalizeWord('товар',
                            cartProdCount) }}</span>
                        <span class="cart-info__total">{{ numberFormat(totalPrice) }} ₽</span>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </header>
</template>


<script setup lang="ts">
import { useStore } from 'vuex';
import { IStore } from '~/types';

const store = useStore<IStore>()
onMounted(() => store.dispatch('getCart'))


const cartProdCount = computed(() => store.state.products.length
)
const totalPrice = computed(() => store.state.products.reduce((a, c) => a + (c.price * c.count), 0))
</script>