<template>
    <label class="cart__setup-label">
        <input class="cart__setup-check" type="checkbox" name="with_setup" v-model="isChecked" />
        <div class="cart__setup-text">
            <span class="cart__setup-title">Установка</span>
            <span class="cart__setup-descr">Отметьте, если Вам необходима консультация
                профессионала по монтажу выбранных
                товаров.</span>
        </div>
    </label>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { IStore } from '~/types';

const isChecked = ref(false)
const store = useStore<IStore>()

watch(isChecked, () => {
    store.dispatch('setWithSetupChecked', isChecked.value)
})
</script>

