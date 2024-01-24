<script lang="ts">
    import {createScene} from "$lib/three";
    import Title from "$lib/components/Title.svelte";
    import {
        loadModel,
        placeIslandModel,
        placePlaneModel,
        placeSceneModel,
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
        loadModel('/assets/Island.glb').then((island: GLTF) => {
            placeIslandModel(island)
        })
        loadModel('/assets/scene.glb').then((scene: GLTF) => {
            placeSceneModel(scene)
        })
    })
</script>
<div class="background">
    <Title isHomePage={isHomePage}/>
    <canvas id="three" bind:this={canvas}></canvas>
    {#if isHomePage}
        <PrimaryButton title="Débuter l'histoire" onClick={() => startExperience()} />
    {:else }
        <Card />
    {/if}
</div>