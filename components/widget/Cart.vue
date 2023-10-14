<template>
    <section class="cart section">
        <form action="#" method="post" class="cart__form" @submit.prevent="">
            <div class="cart__top">
                <h2 class="cart__title">Ваша корзина</h2>
                <span class="cart__count">{{ productsCount }} {{ normalizeWord('товар', productsCount)
                }}</span>
                <FeatureCartClean />
            </div>
            <ul class="cart__products cart-products list-reset">
                <li v-if="store.state.isLoading && !store.state.products"
                    style="display:flex; align-items: center; height: 100%;">
                    <IconPreloader :size-px="120" color="#0069b4" />
                </li>
                <EntityCartCard v-for="(  product, index  ) of   products  " :key="product.id"
                    :id="product.id" :index="index" :img="product.img" :title="product.title"
                    :descr="product.descr" :article="product.article" :price="product.price"
                    :count="product.count">
                    <template #remover>
                        <FeatureCartDel :prod-id="product.id" />
                    </template>
                    <template #counter>
                        <FeatureCartCounter :prod-id="product.id" :count="product.count" />
                    </template>
                </EntityCartCard>
            </ul>
            <FeatureCartSetupCheck v-show="!!products.length" />
            <EntityCartSummary>
                <template #first>
                    <NuxtLink class="btn btn--primary cart-summary__btn-submit"
                        :class="{ disabled: !productsCount }" :to="!productsCount ? '/' : '/order'">
                        Оформить заказа
                    </NuxtLink>
                </template>

                <template #second>
                    <FeatureCartOneClickBuy :disabled="!productsCount" />
                </template>
            </EntityCartSummary>
        </form>
    </section>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { IStore } from '~/types';

const store = useStore<IStore>()
const products = computed(() => store.state.products)
const productsCount = computed(() => store.state.products.length)

</script>

<style>
.btn {
    transition: 0.15s ease-in opacity, 0.15s ease-in filter;
}

.btn.disabled [disabled] {
    filter: grayscale(1);
    opacity: 0.4;
    cursor: not-allowed;
}
</style>
