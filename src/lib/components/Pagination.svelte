<script lang="ts">
    import {scenesContentStore} from "$lib/stores";
    import {get} from "svelte/store";
    import '$lib/styles/pagination.scss'

    export let currentIndex = 0

    const scenes = get(scenesContentStore);
    console.log(currentIndex, )
</script>

<div class="container">
    {#each scenes as index}
        {#if index === currentIndex}
            <div class="selectedItem item"></div>
        {:else}
            <div class="item otherItem"></div>
        {/if}
    {/each}
</div>
