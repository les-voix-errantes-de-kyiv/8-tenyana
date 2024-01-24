<script lang="ts">
    import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
    import {get} from "svelte/store";
    import {currentSceneIndexStore, scenesContentStore} from "$lib/stores";
    import {rotateScene, unRotateScene} from "$lib/functions";
    import Pagination from "$lib/components/Pagination.svelte";
    import ArrowButton from "$lib/components/ArrowButton.svelte";
    import '$lib/styles/components/card.scss';

    let currentSceneIndex;
    const scenesContent = get(scenesContentStore)
    $: content = scenesContent[currentSceneIndex]


    //Subscribe currentSceneIndex for display content
    const unsubscribe = currentSceneIndexStore.subscribe((index) => {
        currentSceneIndex = index
    });

</script>

<div class="backgroundRotate">
    <div class="component">
        <div class="titleContainer">
            <h3 class="text titleCard">{content.title}</h3>
            <Pagination currentIndex={currentSceneIndex}/>
    <!--        <p>{content.content}</p>-->
        </div>
        <div class="buttonContainer">
            <p class="text subTitle">{content.subTitle}</p>
            <div class="buttons">
                <ArrowButton onClick={() => unRotateScene()} icon={faChevronLeft} primaryColor='#FFFFFF' scale={1.5} />
                <ArrowButton onClick={() => rotateScene()} icon={faChevronRight} primaryColor="#FFFFFF" scale={1.5} />
            </div>
        </div>
    </div>
<!--    <img src={content.image} alt="icon de la scène" class="image"/>-->
</div>
<div class="backgroundBehind"></div>
