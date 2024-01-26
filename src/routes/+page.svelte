<script lang="ts">
    import {createScene} from "$lib/three";
    import Title from "$lib/components/Title.svelte";
    import {
        loadModel, rotateScene, unRotateScene,
        zoomCamera
    } from "$lib/functions";
    import {onMount} from "svelte";
    import '$lib/styles/colors.scss';
    import '$lib/styles/fonts.scss';
    import '$lib/styles/style.scss';
    import '$lib/styles/components/card.scss';
    import Card from "$lib/components/Card.svelte";
    import PrimaryButton from "$lib/components/PrimaryButton.svelte";
    import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
    import Pagination from "$lib/components/Pagination.svelte";
    import ArrowButton from "$lib/components/ArrowButton.svelte";
    import Header from "$lib/components/Header.svelte";
    import {get} from "svelte/store";
    import {currentSceneIndexStore, scenesContentStore} from "$lib/stores";


    let canvas;
    let isHomePage = true;

    function startExperience(){
        isHomePage = false
        zoomCamera()
    }

    let currentSceneIndex: number;
    let expandCard = false;
    const scenesContent = get(scenesContentStore)
    $: content = scenesContent[currentSceneIndex]
    $: componentStyle = expandCard ? 'componentExpand' : 'componentNotExpand'
    $: buttonContainerStyle = expandCard ? 'buttonContainerCenter' : 'buttonContainerSpaceBetween'


    //Subscribe currentSceneIndex for display content
    const unsubscribe = currentSceneIndexStore.subscribe((index) => {
        currentSceneIndex = index
    });

    function handleExpandCard(){
        expandCard = !expandCard;
    }

    onMount(() => {
        loadModel()
        createScene(canvas)
    })
</script>
<div class="background">
    <Header isHomePage={isHomePage}/>
    <div class="title">
        <Title isHomePage={isHomePage}/>
    </div>
    <canvas id="three" bind:this={canvas}></canvas>
    {#if isHomePage}
        <div class="absolute">
            <div class="primaryButton">
                <PrimaryButton title="Débuter l'histoire" onClick={() => startExperience()} />
            </div>
            <div class="homepageLinks uppercase">
                <a href="/helps">
                    <label>Soutenir</label>
                </a>
                <label>-</label>
                <a href="/about">
                    <label>A propos</label>
                </a>
            </div>
        </div>
    {:else }
        <div class="card">
            <Card isExpend={expandCard} onCloseModal={() => handleExpandCard()}>
                <div class={`component ${componentStyle}`}>
                    <div class="titleContainer">
                        <h2 class="text titleCard">{content.title}</h2>
                        <Pagination currentIndex={currentSceneIndex} array={scenesContent}/>
                    </div>
                    {#if expandCard}
                        <p class="content">{content.content}</p>
                    {/if}
                    <div class={`buttonContainer ${buttonContainerStyle}`}>
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
            </Card>
        </div>
    {/if}
</div>
