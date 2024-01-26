<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import '$lib/styles/colors.scss';
    import '$lib/styles/fonts.scss';
    import '$lib/styles/helpPage.scss';
    import '$lib/styles/components/card.scss'
    import {get} from "svelte/store";
    import {aboutContentStore} from "$lib/stores";
    import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
    import ArrowButton from "$lib/components/ArrowButton.svelte";
    import Pagination from "$lib/components/Pagination.svelte";
    import Header from "$lib/components/Header.svelte";

    let currentIndex = 0;

    const aboutContents = get(aboutContentStore)

    $: content = aboutContents[currentIndex]


    function onPressLeft(){
        if(currentIndex === 0){
            currentIndex = aboutContents.length - 1
            return
        }
        currentIndex = currentIndex - 1
    }

    function onPressRight(){
        if(currentIndex === aboutContents.length - 1){
            currentIndex = 0
            return
        }
        currentIndex = currentIndex + 1
    }

</script>
<div class="background aboutPage">
    <div class="title">
        <Header isHomePage={true}/>
    </div>
    <div class="containerAbout">
        <div class="text">
            <h2 class="uppercase">apporter son soutien</h2>
            <p>Si vous le souhaitez, vous pouvez apporter votre soutien aux femmes ukrainiennes, et pour cela il vous suffit de devenir bénévole ou d’effectuer des dons. Contribuer à aider ces femmes, souvent invisibles aux yeux de la société, c'est participer activement à une société plus inclusive. Ci-dessous, vous trouverez une liste d'associations à Bordeaux qui s'investissent dans l'intégration des femmes ukrainiennes en France.</p>
            <h2 class="uppercase">Associations</h2>
        </div>
        <div class="cardAbout">
            <Card isHomePage={false}>
                <div class="component aboutComponent">
                    <div class="titleContainer">
                        <ArrowButton icon={faChevronLeft} primaryColor="#FFFFFF" scale={1.5} onClick={() => onPressLeft()}/>
                        <h3 >{content.name}</h3>
                        <ArrowButton icon={faChevronRight} primaryColor="#FFFFFF" scale={1.5} onClick={() => onPressRight()}/>
                    </div>
                    <div class="pagination">
                        <Pagination currentIndex={currentIndex} array={aboutContents} />
                    </div>
                    <div class="contentContainer">
                        <div class="contentWithIcon">
                            <img src="/assets/website.svg" alt="icon internet"/>
                            <a target="_blank" class="link" href={content.link}>{content.link}</a>
                        </div>
                        <div class="contentWithIcon">
                            <img src="/assets/adress.svg" alt="icon adresse"/>
                            <p>{content.address}</p>
                        </div>
                        {#if content.mail}
                            <div class="contentWithIcon">
                                <img src="/assets/email.svg" alt="icon email"/>
                                <a href={`mailto:${content.mail}`}>{content.mail}</a>
                            </div>
                        {/if}
                        {#if content.phone}
                            <div class="contentWithIcon">
                                <img src="/assets/phone.svg" alt="icon téléphone"/>
                                <a href={`tel:${content.phone}`}>{content.phone}</a>
                            </div>
                        {/if}
                        <p>{content.text}</p>
                    </div>
                </div>
            </Card>
        </div>
    </div>
</div>
