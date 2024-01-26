import { WebGLRenderer } from 'three';
import {
	sceneStore,
	cameraStore,
	aboutSceneStore,
	aboutIslandMeshStore,
	aboutIslandMeshGroupStore
} from '$lib/stores';
import { get } from 'svelte/store';
import { initObjectScene, makeGroup, particles, resize } from '$lib/functions';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = get(sceneStore);
const camera = get(cameraStore);

const aboutScene = get(aboutSceneStore);
const aboutIslandMesh = get(aboutIslandMeshStore);
const aboutIslandMeshGroup = get(aboutIslandMeshGroupStore);

let renderer: WebGLRenderer;
// let controls: OrbitControls;

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}

export const createScene = (el: HTMLCanvasElement) => {
	renderer = new WebGLRenderer({ antialias: true, canvas: el, alpha: true });
	renderer.setClearColor(0x000000, 0);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	// controls = new OrbitControls(camera, renderer.domElement);
	// controls.enableDamping = true;
	resize(renderer);
	animate();
	initObjectScene(false);
	makeGroup(false);
	particles();
};

function animateAboutScene() {
	aboutIslandMeshGroup.rotation.y = aboutIslandMeshGroup.rotation.y + Math.PI * 0.002;
	requestAnimationFrame(animateAboutScene);
	renderer.render(aboutScene, camera);
}

export function createAboutScene(el: HTMLCanvasElement) {
	renderer = new WebGLRenderer({ antialias: true, canvas: el, alpha: true });
	renderer.setClearColor(0x000000, 0);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	aboutScene.add(aboutIslandMesh);
	resize(renderer);
	animateAboutScene();
	initObjectScene(true);
	makeGroup(true);
}

window.addEventListener('resize', () => resize(renderer));
