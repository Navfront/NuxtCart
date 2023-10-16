<template>
    <article class="last-products section">
        <div class="last-products__top">
            <h2 class="last-products__title section__title">Просмотренные товары</h2>
        </div>
        <Swiper :slidesPerView="4" :spaceBetween="20" :pagination="{
            type: 'fraction',
        }">
            <FeatureSliderControls />
            <SwiperSlide v-for="(product) of lastProducts" :key="product.id">
                <article class="last-products__card card">
                    <h3 class="card__title">{{ product.title }}</h3>
                    <img :src="product.img" :alt="product.title" class="card__img" />
                    <span class="card__descr"><span v-html="product.descr"></span></span>
                    <span class="card__current-price">{{ numberFormat(product.priceFrom) }} ₽ – {{
                        numberFormat(product.priceTo) }} ₽ </span>
                    <span class="card__orig-price">{{ (product.priceFrom / 100).toFixed(2) }} € –
                        {{ (product.priceTo / 100).toFixed(2) }} €</span>
                    <a href="#" class="card__link btn btn--primary">Подробнее</a>
                </article>
            </SwiperSlide>
        </Swiper>
    </article>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { IStore } from '~/types';
import 'swiper/css';


const store = useStore<IStore>()
const lastProducts = computed(() => store.state.lastSeenProducts)
</script>

<style scoped>
.swiper {
    margin-top: -100px;
    padding-top: 100px;
    width: 100%;
    height: 100%;
}

.last-products {
    position: relative;
}

.card__link {
    box-sizing: border-box;
}
</style>