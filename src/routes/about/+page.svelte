<script lang="ts">
    import '$lib/styles/colors.scss';
    import '$lib/styles/fonts.scss';
    import '$lib/styles/aboutPage.scss'
    import {onMount} from "svelte";
    import {createAboutScene} from "$lib/three";
    import { loadModel} from "$lib/functions";


    let canvas: HTMLCanvasElement;

    onMount(() => {
        createAboutScene(canvas);
        loadModel()
    })

</script>
<div class="container">
    <div class="title">
        <!-- <Title isHomePage={false}/> -->
    </div>
    <div class="text">
        <h2 class="uppercase">À propos</h2>
        <p>D’après la véritable histoire de Tetyana, une femme forte et indépendante, qui a subi un parcours migratoire déchirant, quittant son mari et sa mère, pour assurer un futur plus stable à son fils.</p>
        <p>En créant cette expérience immersive, nous espérons attirer l'attention et le soutien de ceux qui pourraient aider la cause des femmes ukrainiennes, que ce soit par l’intermédiaire d’institutions, d’associations ou de bénévoles.</p>
        <p>Si vous souhaitez contacter Tetyana : LinkedIn : <a class="link" href="https://www.linkedin.com/in/tetyana-gerasymchuk-08b8b913a/">Tetyana Gerasymchuk</a> </p>
        <div class="text-center">
            <p>Un projet étudiant réalisé par :</p>
            <div class="uppercase">
                <p>Auréliane Dor</p>
                <p>Maxime Lust le giga BG</p>
                <p>Leïly coquard misono la DA en or</p>
                <p>jason nago le 3D artiste fou</p>
                <p>safiya seddiki la grosse nulloss</p>
            </div>
        </div>
        <div class="logo">
            <img src="/assets/mmi.svg" alt="Logo mmi"/>
            <img src="/assets/maisonUkr.svg" alt="Logo Maison urkrainienne" />
        </div>
    </div>
    <div class="canvas">
        <canvas id="three" bind:this={canvas}></canvas>
    </div>
</div>
