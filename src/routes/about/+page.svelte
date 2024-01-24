<script lang="ts">
    import Title from "$lib/components/Title.svelte";
    import Card from "$lib/components/Card.svelte";
    import '$lib/styles/colors.scss';
    import '$lib/styles/fonts.scss';
    import '$lib/styles/style.scss';
</script>
<div class="background about">
    <div class="title">
        <!-- <Title isHomePage={false}/> -->
    </div>
    <div class="text">
        <h2 class="uppercase">apporter son soutien</h2>
        <p>Si vous le souhaitez, vous pouvez apporter votre soutien aux femmes ukrainiennes, et pour cela il vous suffit de devenir bénévole ou d’effectuer des dons. Contribuer à aider ces femmes, souvent invisibles aux yeux de la société, c'est participer activement à une société plus inclusive. Ci-dessous, vous trouverez une liste d'associations à Bordeaux qui s'investissent dans l'intégration des femmes ukrainiennes en France.</p>
        <h2 class="uppercase">Associations</h2>
    </div>
    <div class="card">
        <Card isHomePage={false} />
    </div>
</div>