<script lang="ts">
    import '$lib/styles/components/primary-button.scss';
    export let title = "Lorem Ipsum";
    export let onClick = () => {};
</script>

<button class="primary-button uppercase" on:click={() => onClick()}>{title}</button>
