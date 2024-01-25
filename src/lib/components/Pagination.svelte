<script lang="ts">
    import '$lib/styles/components/pagination.scss'

    export let currentIndex = 0;
    export let array;

</script>

<div class="container">
    {#each array as _, index}
        {#if index === currentIndex}
            <div class="selectedItem item"></div>
        {:else}
            <div class="item otherItem"></div>
        {/if}
    {/each}
</div>
