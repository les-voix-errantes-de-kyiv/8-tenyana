<script lang="ts">
    import {currentSceneIndexStore, scenesContentStore} from "$lib/stores";
    import {get} from "svelte/store";
    import {rotateScene, unRotateScene} from "$lib/functions";
    import '$lib/styles/card.scss';
    import Pagination from "$lib/components/Pagination.svelte";

    let currentSceneIndex;
    const scenesContent = get(scenesContentStore)
    $: content = scenesContent[currentSceneIndex]

    //Subscribe currentSceneIndex for display content
    const unsubscribe = currentSceneIndexStore.subscribe((index) => {
        currentSceneIndex = index
    });
</script>

<div class="component">
    <h3 class="text title">{content.title}</h3>
    <Pagination currentIndex={currentSceneIndex}/>
    <p class="text subTitle">{content.subTitle}</p>
    <div class="buttons">
        <button class="animated" on:click={() => unRotateScene()}>
            <svg class="before-button-svg" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 15L1 8M1 8L8 1M1 8L19 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <button class="animated" on:click={() => rotateScene()}>
            <svg class="after-button-svg" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 15L1 8M1 8L8 1M1 8L19 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    </div>
</div>