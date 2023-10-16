<template>
    <div class="last-products__controls slider-controls">
        <SharedButton :disabled="currentSlide < 2" class-name="slider-controls__btn"
            :click-handler="prevSlide" aria="Назад">
            <template #center>
                <IconPrev />
            </template>
        </SharedButton>
        <span class="slider-controls__num-page">{{ currentSlide }}</span>
        <span class="slider-controls__of-page">&nbsp;/&nbsp;{{ slidesCount }}</span>
        <SharedButton :disabled="currentSlide > slidesCount - 1"
            class-name="slider-controls__btn slider-controls__btn--mirror" :click-handler="nextSlide"
            aria="Вперед">
            <template #center>
                <IconPrev />
            </template>
        </SharedButton>
    </div>
</template>

<script setup lang="ts">
const swiper = useSwiper()

const currentSlide = ref(1);
const slidesCount = ref(1);

function setCurrentSlide() {
    currentSlide.value = Math.abs(Math.round(slidesCount.value * swiper.value.progress)) || 1
}

watch(swiper.value, () => {
    slidesCount.value = swiper.value.slides.length
    setCurrentSlide()
})

function nextSlide() {
    swiper.value.slideNext()
    setCurrentSlide()
}
function prevSlide() {
    swiper.value.slidePrev()
    setCurrentSlide()
}

</script>

<style scoped>
.last-products__controls {
    position: absolute;
    right: 0;
    top: 0;
}
</style>