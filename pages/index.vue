<template>
    <div class="container main-wrapper">
        <WidgetBreadcrumbs />
        <section class="cart section">
            <form action="#" method="post" class="cart__form">
                <div class="cart__top">
                    <h2 class="cart__title">Ваша корзина</h2>
                    <span class="cart__count">4 товара</span>
                    <button class="cart__btn-clear interactive" type="button">Очистить
                        корзину</button>
                </div>
                <ul class="cart__products cart-products list-reset">
                    <li class="cart-products__item cart-prod">
                        <img src="img/products/p1.png" alt="Вытяжное устройство G2H"
                            class="cart-prod__thumb" />

                        <h3 class="cart-prod__title">Вытяжное устройство G2H</h3>
                        <span class="cart-prod__descr">12-72/168 м<sup>3</sup>/ч / гидрорегулируемый
                            расход / от&nbsp;датчика
                            присутствия</span>
                        <span class="cart-prod__article">Артикул: G2H1065</span>

                        <div class="cart-prod__controls count-controls">
                            <button class="count-controls__btn count-controls__btn--minus interactive"
                                type="button">
                                <span class="visually-hidden">Убрать единицу товара</span>
                                <svg width="10" height="2" viewBox="0 0 10 2" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1L1 1" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <input class="count-controls__prod-count" type="number" name="count-p1"
                                min="1" max="99" value="1" required />
                            <button class="count-controls__btn count-controls__btn--plus interactive"
                                type="button">
                                <span class="visually-hidden">Добавить единицу товара</span>
                                <svg width="10" height="10" viewBox="0 0 10 10">
                                    <path d="M5 1V9" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M9 5L1 5" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <span class="cart-prod__price-one">12 644 ₽/шт. </span>

                        <div class="cart-prod__total">12 644 ₽</div>
                        <button class="cart-prod__btn-delete interactive interactive--warn"
                            type="button">
                            <span class="visually-hidden">Удалить с товар с корзины</span>
                            <svg width="14" height="14" viewBox="0 0 14 14">
                                <path d="M1 1L13 13" stroke="currentColor" stroke-width="1.5" />
                                <path d="M1 13L13 1" stroke="currentColor" stroke-width="1.5" />
                            </svg>
                        </button>
                    </li>
                    <li class="cart-products__item cart-prod">
                        <img src="img/products/p1.png" alt="Вытяжное устройство G2H"
                            class="cart-prod__thumb" />

                        <h3 class="cart-prod__title">Вытяжное устройство G2H</h3>
                        <span class="cart-prod__descr">12-72/168 м<sup>3</sup>/ч / гидрорегулируемый
                            расход / от&nbsp;датчика
                            присутствия</span>
                        <span class="cart-prod__article">Артикул: G2H1065</span>

                        <div class="cart-prod__controls count-controls">
                            <button class="count-controls__btn count-controls__btn--minus interactive"
                                type="button">
                                <span class="visually-hidden">Убрать единицу товара</span>
                                <svg width="10" height="2" viewBox="0 0 10 2" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1L1 1" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <input class="count-controls__prod-count" type="number" name="count-p1"
                                min="1" max="99" value="1" required />
                            <button class="count-controls__btn count-controls__btn--plus interactive"
                                type="button">
                                <span class="visually-hidden">Добавить единицу товара</span>
                                <svg width="10" height="10" viewBox="0 0 10 10">
                                    <path d="M5 1V9" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M9 5L1 5" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <span class="cart-prod__price-one">12 644 ₽/шт. </span>

                        <div class="cart-prod__total">12 644 ₽</div>
                        <button class="cart-prod__btn-delete interactive interactive--warn"
                            type="button">
                            <span class="visually-hidden">Удалить с товар с корзины</span>
                            <svg width="14" height="14" viewBox="0 0 14 14">
                                <path d="M1 1L13 13" stroke="currentColor" stroke-width="1.5" />
                                <path d="M1 13L13 1" stroke="currentColor" stroke-width="1.5" />
                            </svg>
                        </button>
                    </li>
                    <li class="cart-products__item cart-prod">
                        <img src="img/products/p1.png" alt="Вытяжное устройство G2H"
                            class="cart-prod__thumb" />

                        <h3 class="cart-prod__title">Вытяжное устройство G2H</h3>
                        <span class="cart-prod__descr">12-72/168 м<sup>3</sup>/ч / гидрорегулируемый
                            расход / от&nbsp;датчика
                            присутствия</span>
                        <span class="cart-prod__article">Артикул: G2H1065</span>

                        <div class="cart-prod__controls count-controls">
                            <button class="count-controls__btn count-controls__btn--minus interactive"
                                type="button">
                                <span class="visually-hidden">Убрать единицу товара</span>
                                <svg width="10" height="2" viewBox="0 0 10 2" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1L1 1" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <input class="count-controls__prod-count" type="number" name="count-p1"
                                min="1" max="99" value="1" required />
                            <button class="count-controls__btn count-controls__btn--plus interactive"
                                type="button">
                                <span class="visually-hidden">Добавить единицу товара</span>
                                <svg width="10" height="10" viewBox="0 0 10 10">
                                    <path d="M5 1V9" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M9 5L1 5" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <span class="cart-prod__price-one">12 644 ₽/шт. </span>

                        <div class="cart-prod__total">12 644 ₽</div>
                        <button class="cart-prod__btn-delete interactive interactive--warn"
                            type="button">
                            <span class="visually-hidden">Удалить с товар с корзины</span>
                            <svg width="14" height="14" viewBox="0 0 14 14">
                                <path d="M1 1L13 13" stroke="currentColor" stroke-width="1.5" />
                                <path d="M1 13L13 1" stroke="currentColor" stroke-width="1.5" />
                            </svg>
                        </button>
                    </li>
                </ul>
                <label class="cart__setup-label">
                    <input class="cart__setup-check" type="checkbox" name="with_setup" />
                    <div class="cart__setup-text">
                        <span class="cart__setup-title">Установка</span>
                        <span class="cart__setup-descr">Отметьте, если Вам необходима консультация
                            профессионала по монтажу выбранных
                            товаров.</span>
                    </div>
                </label>
                <section class="cart__summary cart-summary">
                    <h3 class="cart-summary__title">Итого</h3>
                    <dl class="cart-summary__dl">
                        <div class="cart-summary__list-wrap">
                            <dt class="cart-summary__dt">Сумма заказа</dt>
                            <dd class="cart-summary__dd">50 576 ₽</dd>
                        </div>
                        <div class="cart-summary__list-wrap">
                            <dt class="cart-summary__dt">Количество</dt>
                            <dd class="cart-summary__dd">4 шт</dd>
                        </div>
                        <div class="cart-summary__list-wrap">
                            <dt class="cart-summary__dt">Установка</dt>
                            <dd class="cart-summary__dd">Нет</dd>
                        </div>
                    </dl>
                    <div class="cart-summary__total-wrap">
                        <span class="cart-summary__total-descr">Стоимость товаров</span>
                        <span class="cart-summary__total-price">50 576 ₽</span>
                    </div>
                    <button class="btn btn--primary cart-summary__btn-submit" type="submit">
                        Оформить заказ
                    </button>
                    <button class="btn btn--secondary cart-summary__btn-buy">Купить в 1
                        клик</button>
                </section>
            </form>
        </section>
        <WidgetLastProducts />
    </div>
</template>


