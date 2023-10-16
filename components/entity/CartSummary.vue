<template>
    <section class="cart__summary cart-summary">
        <h3 class="cart-summary__title">Итого</h3>
        <dl class="cart-summary__dl">
            <div class="cart-summary__list-wrap">
                <dt class="cart-summary__dt">Сумма заказа</dt>
                <dd class="cart-summary__dd">{{ numberFormat(totalPrice) }} ₽</dd>
            </div>
            <div class="cart-summary__list-wrap">
                <dt class="cart-summary__dt">Количество</dt>
                <dd class="cart-summary__dd">{{ productsCount }} шт</dd>
            </div>
            <div class="cart-summary__list-wrap">
                <dt class="cart-summary__dt">Установка</dt>
                <dd class="cart-summary__dd">{{ withSetup ? 'Да' : 'Нет' }}</dd>
            </div>
        </dl>
        <div class="cart-summary__total-wrap">
            <span class="cart-summary__total-descr">Стоимость товаров</span>
            <span class="cart-summary__total-price">{{ numberFormat(totalPrice) }} ₽</span>
        </div>
        <slot name="first"></slot>
        <slot name="second"></slot>

        <div class="cart-message" v-if="store.state.cartMessage">
            <b>Вы успешно создали заказ!</b>
            <p>На сумму: {{ numberFormat(parseInt(store.state.cartMessage)) }} ₽</p>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { IStore } from '~/types';



const store = useStore<IStore>();
console.log(store.state.cartMessage);
const withSetup = computed(() => store.state.withSetup)
const productsCount = computed(() => store.state.products.length)
const totalPrice = computed(() => store.state.products.reduce((a, c) => a + (c.price * c.count), 0))
</script>

<style scoped>
.cart-message {
    color: green;
    font-size: 1.5em;
    padding: 20px;
    text-align: center;
}
</style>