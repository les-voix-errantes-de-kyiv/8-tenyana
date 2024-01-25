<script lang="ts">
    import '$lib/styles/components/card.scss';

    export let isHomePage = true
    export let style: string;
</script>

{#if isHomePage}
    <div class={`${style} backgroundRotate`}>
        <slot />
    </div>
    <div class="backgroundBehind"></div>
{:else}
    <div class={`${style} backgroundRotate aboutBackground`}>
        <div class="component aboutComponent">
            <div class="swiper-elements">
                <swiper-button-prev></swiper-button-prev>
                <swiper-pagination></swiper-pagination>
                <swiper-button-next></swiper-button-next>
            </div>
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="containerTitle">
                        <h3 class="titleAbout uppercase">La maison ukrainienne</h3>
                    </div>
                    <div class="containerText">
                        <div class="website">
                            <img src="/assets/website.svg" alt="">
                            <p>https://www.helloasso.com/associations/la-maison-ukrainienne</p>
                        </div>
                        <div class="adress">
                            <img src="/assets/adress.svg" alt="">
                            <p>55 Av. du Maréchal de Lattre de Tassigny, 33700 Mérignac</p>
                        </div>
                        <div class="email">
                            <img src="/assets/email.svg" alt="">
                            <p>contact@lamaisonukrainienne.org</p>
                        </div>
                        <div class="phone">
                            <img src="/assets/phone.svg" alt="">
                            <p>0606060606</p>
                        </div>
                        <p>La Maison Ukrainienne est une association à Bordeaux qui soutient l'intégration des femmes ukrainiennes en offrant des programmes linguistiques et culturels. </p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="containerTitle">
                        <h3 class="titleAbout uppercase">La maison ukrainienne</h3>
                    </div>
                    <div class="containerText">
                        <div class="website">
                            <img src="/assets/website.svg" alt="">
                            <p>https://www.helloasso.com/associations/la-maison-ukrainienne</p>
                        </div>
                        <div class="adress">
                            <img src="/assets/adress.svg" alt="">
                            <p>55 Av. du Maréchal de Lattre de Tassigny, 33700 Mérignac</p>
                        </div>
                        <div class="email">
                            <img src="/assets/email.svg" alt="">
                            <p>contact@lamaisonukrainienne.org</p>
                        </div>
                        <div class="phone">
                            <img src="/assets/phone.svg" alt="">
                            <p>0606060606</p>
                        </div>
                        <p>La Maison Ukrainienne est une association à Bordeaux qui soutient l'intégration des femmes ukrainiennes en offrant des programmes linguistiques et culturels. </p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="containerTitle">
                        <h3 class="titleAbout uppercase">La maison ukrainienne</h3>
                    </div>
                    <div class="containerText">
                        <div class="website">
                            <img src="/assets/website.svg" alt="">
                            <p>https://www.helloasso.com/associations/la-maison-ukrainienne</p>
                        </div>
                        <div class="adress">
                            <img src="/assets/adress.svg" alt="">
                            <p>55 Av. du Maréchal de Lattre de Tassigny, 33700 Mérignac</p>
                        </div>
                        <div class="email">
                            <img src="/assets/email.svg" alt="">
                            <p>contact@lamaisonukrainienne.org</p>
                        </div>
                        <div class="phone">
                            <img src="/assets/phone.svg" alt="">
                            <p>0606060606</p>
                        </div>
                        <p>La Maison Ukrainienne est une association à Bordeaux qui soutient l'intégration des femmes ukrainiennes en offrant des programmes linguistiques et culturels. </p>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="containerTitle">
                        <h3 class="titleAbout uppercase">La maison ukrainienne</h3>
                    </div>
                    <div class="containerText">
                        <div class="website">
                            <img src="/assets/website.svg" alt="">
                            <p>https://www.helloasso.com/associations/la-maison-ukrainienne</p>
                        </div>
                        <div class="adress">
                            <img src="/assets/adress.svg" alt="">
                            <p>55 Av. du Maréchal de Lattre de Tassigny, 33700 Mérignac</p>
                        </div>
                        <div class="email">
                            <img src="/assets/email.svg" alt="">
                            <p>contact@lamaisonukrainienne.org</p>
                        </div>
                        <div class="phone">
                            <img src="/assets/phone.svg" alt="">
                            <p>0606060606</p>
                        </div>
                        <p>La Maison Ukrainienne est une association à Bordeaux qui soutient l'intégration des femmes ukrainiennes en offrant des programmes linguistiques et culturels. </p>
                    </div>
                </div>
            </div>
        </div>
        <script lang="ts">
            import Swiper from 'https://unpkg.com/swiper@9/swiper-bundle.esm.browser.min.js'

            export const aboutComponent = new Swiper('.aboutComponent', {
                slidesPerView: 1,
                mousewheel: {
                    forceToAxis: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination: {
                    el: '.swiper-pagination, .pagination-feature-center',
                    clickable: true,
                },
            });

        </script>
    </div>
    <div class="backgroundBehind"></div>
{/if}
