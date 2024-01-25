import { WebGLRenderer } from 'three';
import { sceneStore, cameraStore, islandMeshStore, islandAndSceneGroupStore } from '$lib/stores';
import { get } from 'svelte/store';
import { initObjectScene, makeGroup, particles, resize } from '$lib/functions';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { addDebug } from '$lib/guiDebug';
// import { addDebug } from '$lib/guiDebug';

const scene = get(sceneStore);
const camera = get(cameraStore);
const islandMesh = get(islandMeshStore);
const islandMeshGroup = get(islandAndSceneGroupStore);

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
	// addDebug();
	particles();
};

function animateAboutScene() {
	islandMeshGroup.rotation.y = islandMeshGroup.rotation.y + Math.PI * 0.005;
	requestAnimationFrame(animateAboutScene);
	renderer.render(scene, camera);
}

export function createAboutScene(el: HTMLCanvasElement) {
	renderer = new WebGLRenderer({ antialias: true, canvas: el, alpha: true });
	renderer.setClearColor(0x000000, 0);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	scene.add(islandMesh);
	resize(renderer);
	animateAboutScene();
	initObjectScene();
	makeGroup();
}

window.addEventListener('resize', () => resize(renderer));
