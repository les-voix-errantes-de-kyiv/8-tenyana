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
    import '../lib/styles/colors.scss';
    import '../lib/styles/fonts.scss';
    import '../lib/styles/style.scss';
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

<style>
    .buttons {
        position: relative;
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 10px;
    }
    button {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        bottom: 40px;
        transform: translateX(-50%);
        background-color: transparent;
        color: white;
        border: 1px solid white;
        padding: 10px;
        cursor: pointer;
    }
    button:hover {
        background-color: white;
        color: black;
    }
    button:first-child {
        left: 45%;
    }
    button:last-child {
        left: 55%;
    }
    .after-button-svg {
        transform: rotate(180deg);
    }
    .background{
        background: rgb(66,113,203);
        background: linear-gradient(180deg, rgba(66,113,203,1) 0%, rgba(144,157,225,1) 22%, rgba(240,218,231,1) 62%, rgba(252,250,236,1) 100%);
    }
</style>
