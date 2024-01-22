<script lang="ts">
    import {createScene} from "$lib/three";
    import {loadModel, placeModel} from "$lib/functions";
    import {onMount} from "svelte";
    import type {GLTF} from "three/examples/jsm/loaders/GLTFLoader.js";

    let canvas;

    onMount(() => {
        createScene(canvas)
        loadModel('/assets/Avion.glb').then((model: GLTF) => {
            placeModel(model)
        })
        loadModel('/assets/Island.glb').then((model: GLTF) => {
            placeModel(model)
        })
        loadModel('/assets/scene.glb').then((model: GLTF) => {
            placeModel(model)
        })
    })
</script>

<main>

</main>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<canvas id="three" bind:this={canvas}></canvas>
<div class="buttons">
    <button>
        <svg class="before-button-svg" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 15L1 8M1 8L8 1M1 8L19 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
    <button>
        <svg class="after-button-svg" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 15L1 8M1 8L8 1M1 8L19 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </button>
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
</style>