<script lang="ts">
    import {currentSceneIndexStore, scenesContentStore} from "$lib/stores";
    import {get} from "svelte/store";
    import {rotateScene, unRotateScene} from "$lib/functions";

    let currentSceneIndex;
    const scenesContent = get(scenesContentStore)
    $: content = scenesContent[currentSceneIndex]

    //Subscribe currentSceneIndex for display content
    const unsubscribe = currentSceneIndexStore.subscribe((index) => {
        currentSceneIndex = index
    });
</script>

<div>
    <h3>{content.title}</h3>
    <p>{content.subTitle}</p>
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
</style>
