<script lang="ts">
    import {createScene} from "$lib/three";
    import Title from "$lib/components/Title.svelte";
    import {
        loadModel,
        placeIslandModel,
        placePlaneModel,
        placePlateformeModel1,
        placePlateformeModel2,
        placePlateformeModel3,
        placePlateformeModel4,
        zoomCamera
    } from "$lib/functions";
    import {onMount} from "svelte";
    import type {GLTF} from "three/examples/jsm/loaders/GLTFLoader.js";
    import '$lib/styles/colors.scss';
    import '$lib/styles/fonts.scss';
    import '$lib/styles/style.scss';
    import Card from "$lib/components/Card.svelte";
    import PrimaryButton from "$lib/components/PrimaryButton.svelte";

    let canvas;
    let isHomePage = true;

    function startExperience(){
        isHomePage = false
        zoomCamera()
    }

    onMount(() => {
        createScene(canvas)
        loadModel('/assets/Avion.glb').then((model: GLTF) => {
            placePlaneModel(model)
        })
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
            <Card />
        </div>
    {/if}
</div>
