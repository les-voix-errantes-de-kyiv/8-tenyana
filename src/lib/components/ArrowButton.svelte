<script lang="ts">
    import type {IconDefinition} from "@fortawesome/free-brands-svg-icons";
    import '$lib/styles/components/arrowButton.scss'
    import {Fa} from "svelte-fa";

    export let onClick: () => void
    export let icon: IconDefinition
    export let primaryColor: string
    export let scale: number

    function handlePropagation(event: Event, callback: () => void){
        event.stopPropagation()
        callback()
    }


</script>

<button on:click={(event) => handlePropagation(event, onClick)} class="button">
    <Fa icon={icon} primaryColor={primaryColor} scale={scale}/>
</button>
