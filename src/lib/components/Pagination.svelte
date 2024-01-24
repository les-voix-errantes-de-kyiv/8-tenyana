<script lang="ts">
    import {scenesContentStore} from "$lib/stores";
    import {get} from "svelte/store";
    import '$lib/styles/components/pagination.scss'

    export let currentIndex = 0

    const scenes = get(scenesContentStore);
</script>

<div class="container">
    {#each scenes as _, index}
        {#if index === currentIndex}
            <div class="selectedItem item"></div>
        {:else}
            <div class="item otherItem"></div>
        {/if}
    {/each}
</div>
