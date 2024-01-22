import {
    WebGLRenderer
} from 'three';
import {sceneStore, cameraStore, boxStore} from "$lib/stores";
import {get} from 'svelte/store'
import {initObjectScene, resize} from "$lib/functions";

const scene = get(sceneStore);
const camera = get(cameraStore)
const cube = get(boxStore)

let renderer: WebGLRenderer;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

export const createScene = (el:HTMLCanvasElement) => {
    renderer = new WebGLRenderer({ antialias: true, canvas: el });
    resize(renderer);
    animate();
    initObjectScene()
};

window.addEventListener('resize', () => resize(renderer));
