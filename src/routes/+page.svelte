<script lang="ts">
    import {createScene} from "$lib/three";
    import Title from "$lib/components/Title.svelte";
    import {
        loadModel,
        placeIslandModel,
        placePlateformeModel1,
        placePlateformeModel2,
        placePlateformeModel3,
        placePlateformeModel4, rotateScene, unRotateScene,
        zoomCamera
    } from "$lib/functions";
    import {onMount} from "svelte";
    import type {GLTF} from "three/examples/jsm/loaders/GLTFLoader.js";
    import '$lib/styles/colors.scss';
    import '$lib/styles/fonts.scss';
    import '$lib/styles/style.scss';
    import Card from "$lib/components/Card.svelte";
    import PrimaryButton from "$lib/components/PrimaryButton.svelte";
    import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
    import Pagination from "$lib/components/Pagination.svelte";
    import ArrowButton from "$lib/components/ArrowButton.svelte";
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

    onMount(() => {
        createScene(canvas)
        loadModel('/assets/IslandV2.glb').then((island: GLTF) => {
            placeIslandModel(island)
        })
        loadModel('/assets/Plateforme_1.glb').then((plateforme: GLTF) => {
            placePlateformeModel1(plateforme)
        })
        loadModel('/assets/Plateforme_2.glb').then((plateforme: GLTF) => {
            placePlateformeModel2(plateforme)
        })
        loadModel('/assets/Plateforme_3.glb').then((plateforme: GLTF) => {
            placePlateformeModel3(plateforme)
        })
        loadModel('/assets/Plateforme_4.glb').then((plateforme: GLTF) => {
            placePlateformeModel4(plateforme)
        })
    })
</script>
<div class="background">
    <div class="title">
        <Title isHomePage={isHomePage}/>
    </div>
    <canvas id="three" bind:this={canvas}></canvas>
    {#if isHomePage}
        <div class="primaryButton">
            <PrimaryButton title="Débuter l'histoire" onClick={() => startExperience()} />
        </div>
        <div class="homepageLinks uppercase">
            <a href="/">
                <label>Soutenir</label>
            </a>
            <label>-</label>
            <a href="/about">
                <label>A propos</label>
            </a>
        </div>
    {:else }
        <div class="card">
            <Card style={style}>
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
            </Card>
        </div>
    {/if}
</div>
