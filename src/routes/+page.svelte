<script lang="ts">
    import {createScene} from "$lib/three";
    import {onMount} from "svelte";

    let canvas;

    onMount(() => {
        createScene(canvas)
    })
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<canvas id="three" bind:this={canvas}></canvas>
