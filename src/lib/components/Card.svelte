<script lang="ts">
    import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
    import {get} from "svelte/store";
    import {currentSceneIndexStore, scenesContentStore} from "$lib/stores";
    import {rotateScene, unRotateScene} from "$lib/functions";
    import Pagination from "$lib/components/Pagination.svelte";
    import ArrowButton from "$lib/components/ArrowButton.svelte";
    import '$lib/styles/components/card.scss';

    let currentSceneIndex: number;
    let expandCard = false;
    let style = 'backgroundRotate'
    const scenesContent = get(scenesContentStore)
    $: content = scenesContent[currentSceneIndex]


    //Subscribe currentSceneIndex for display content
    const unsubscribe = currentSceneIndexStore.subscribe((index) => {
        currentSceneIndex = index
    });

    function handleExpandCard(){
        expandCard = !expandCard
        if(expandCard){
            style = 'backgroundRotateExpand'
        }else{
            style = 'backgroundRotateNotExpand'
        }
    }

    export let isHomePage = true
</script>

{#if isHomePage}
    <div class={`${style} backgroundRotate`}>
        <div class="component">
            <div class="titleContainer">
                <h3 class="text titleCard">{content.title}</h3>
                <Pagination currentIndex={currentSceneIndex}/>
            </div>
            {#if expandCard}
                <p class="content">{content.content}</p>
            {/if}
            <div class="buttonContainer">
                {#if !expandCard}
                    <p on:click={() => handleExpandCard()} class="text subTitle">{content.subTitle}</p>
                {/if}
                <div class="buttons">
                    <ArrowButton onClick={() => unRotateScene()} icon={faChevronLeft} primaryColor='#FFFFFF' scale={1.5} />
                    <ArrowButton onClick={() => rotateScene()} icon={faChevronRight} primaryColor="#FFFFFF" scale={1.5} />
                </div>
            </div>
        </div>
        <img src={content.image} alt="icon de la scène" class="image"/>
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