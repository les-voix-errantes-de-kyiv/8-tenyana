import { WebGLRenderer } from 'three';
import { sceneStore, cameraStore } from '$lib/stores';
import { get } from 'svelte/store';
import { initObjectScene, makeGroup, resize } from '$lib/functions';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { addDebug } from '$lib/guiDebug';
// import { addDebug } from '$lib/guiDebug';

const scene = get(sceneStore);
const camera = get(cameraStore);

let renderer: WebGLRenderer;
let controls: OrbitControls;

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}

export const createScene = (el: HTMLCanvasElement) => {
	renderer = new WebGLRenderer({ antialias: true, canvas: el, alpha: true });
	renderer.setClearColor(0x000000, 0);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	controls = new OrbitControls(camera, renderer.domElement);
	controls.enableDamping = true;
	resize(renderer);
	animate();
	initObjectScene();
	makeGroup();
	addDebug();
};

window.addEventListener('resize', () => resize(renderer));
