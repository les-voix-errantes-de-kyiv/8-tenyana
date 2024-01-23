<script lang="ts">
    import {createScene} from "$lib/three";
    import {
        loadModel,
        placeIslandModel,
        placePlaneModel,
        placeSceneModel,
        rotateScene,
        unRotateScene
    } from "$lib/functions";
    import {onMount} from "svelte";
    import type {GLTF} from "three/examples/jsm/loaders/GLTFLoader.js";
    import '$lib/styles/colors.scss';
    import '$lib/styles/fonts.scss';
    import '$lib/styles/style.scss';
    // import {currentSceneIndexStore, scenesContentStore} from "$lib/stores";

    let canvas;
    // let currentSceneIndex;

    //Subscribe currentSceneIndex for display content
    // const unsubscribe = currentSceneIndexStore.subscribe((index) => {
    //     currentSceneIndex = index
    // });


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
    <canvas id="three" bind:this={canvas}></canvas>
    <div class="buttons">
        <button on:click={() => unRotateScene()}>
            <svg class="before-button-svg" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 15L1 8M1 8L8 1M1 8L19 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <button on:click={() => rotateScene()}>
            <svg class="after-button-svg" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 15L1 8M1 8L8 1M1 8L19 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    </div>
</div>