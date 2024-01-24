<script lang="ts">
    import type {IconDefinition} from "@fortawesome/free-brands-svg-icons";
    import Fa from 'svelte-fa';
    import '$lib/styles/components/arrowButton.scss'

    export let onClick: () => void
    export let icon: IconDefinition
    export let primaryColor: string
    export let scale: number

</script>

<button on:click={() => onClick()} class="button">
    <Fa icon={icon} primaryColor={primaryColor} scale={scale}/>
</button>
