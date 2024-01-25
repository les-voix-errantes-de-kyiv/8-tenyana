<script lang="ts">
    import '$lib/styles/components/card.scss';
    import PrimaryButton from "$lib/components/PrimaryButton.svelte";
    import {Fa} from "svelte-fa";
    import {faChevronDown} from "@fortawesome/free-solid-svg-icons";


    export let isHomePage = true
    export let isExpend: boolean
    export let onCloseModal: () => void

    $: style = isExpend ? 'backgroundRotateExpand' : 'backgroundRotateNotExpand'

</script>

{#if isHomePage}
    <div class="closeButton">
        {#if isExpend}
            <PrimaryButton title="Fermer" onClick={() => onCloseModal()}>
                <Fa icon={faChevronDown} primaryColor="#4472CB" />
            </PrimaryButton>
        {/if}
    </div>
    <div class={`${style} backgroundRotate`}>
        <slot />
    </div>
    {#if !isExpend}
        <div class="backgroundBehind"></div>
    {/if}
{:else}
    <div class="aboutBackground">
        <slot />
    </div>
{/if}
