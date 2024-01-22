import type { WebGLRenderer } from 'three';
import {
	sceneStore,
	cameraStore,
	ambientLightStore,
	gltfLoaderStore,
	planeMeshStore,
	islandMeshStore,
	sceneMeshStore,
	islandAndSceneGroupStore
} from '$lib/stores';
import { get } from 'svelte/store';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = get(sceneStore);
const camera = get(cameraStore);
const ambientLight = get(ambientLightStore);
const islandMesh = get(islandMeshStore);
const sceneMesh = get(sceneMeshStore);
const islandAndSceneGroup = get(islandAndSceneGroupStore);

export function resize(renderer: WebGLRenderer) {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
}

export function initObjectScene() {
	scene.add(ambientLight);
	camera.position.z = 30;
}

export function placePlaneModel(model: GLTF) {
	const meshModel = model.scene.children[0];
	const planeMesh = get(planeMeshStore);
	planeMesh.add(meshModel);
	scene.add(planeMesh);
}

export function placeIslandModel(model: GLTF) {
	const meshModel = model.scene.children[0];
	islandMesh.add(meshModel);
}

export function placeSceneModel(model: GLTF) {
	const meshModel = model.scene.children[0];
	sceneMesh.add(meshModel);
}

export function loadModel(url: string) {
	const gltfLoader = get(gltfLoaderStore);
	return gltfLoader.loadAsync(url);
}

export function makeGroup() {
	islandAndSceneGroup.add(islandMesh);
	islandAndSceneGroup.add(sceneMesh);
	scene.add(islandAndSceneGroup);
}

export function rotateScene() {
	islandAndSceneGroup.rotation.y = Math.PI * 0.25 + islandAndSceneGroup.rotation.y;
}
export function unRotateScene() {
	islandAndSceneGroup.rotation.y = Math.PI * -0.25 + islandAndSceneGroup.rotation.y;
}
