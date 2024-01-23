import { type WebGLRenderer } from 'three';
import {
	sceneStore,
	cameraStore,
	ambientLightStore,
	gltfLoaderStore,
	planeMeshStore,
	islandMeshStore,
	sceneMeshStore,
	islandAndSceneGroupStore,
	scenesContentStore,
	currentSceneIndexStore
} from '$lib/stores';
import { get } from 'svelte/store';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = get(sceneStore);
const camera = get(cameraStore);
const ambientLight = get(ambientLightStore);
const islandMesh = get(islandMeshStore);
const sceneMesh = get(sceneMeshStore);
const islandAndSceneGroup = get(islandAndSceneGroupStore);
const sceneContent = get(scenesContentStore);
const planeMESH = get(planeMeshStore);

export const initCameraScene = () => {
	camera.position.set(32, 13, -3);
	camera.lookAt(planeMESH.position);
};

function zoomCamera() {
	camera.position.set(25, 8.8, 0);
}

export function resize(renderer: WebGLRenderer) {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
}

export function initObjectScene() {
	scene.add(ambientLight);
	initCameraScene();
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
	zoomCamera();
	onPressRight();
	camera.lookAt(islandMesh.position);
}
export function unRotateScene() {
	islandAndSceneGroup.rotation.y = Math.PI * -0.25 + islandAndSceneGroup.rotation.y;
	zoomCamera();
	camera.lookAt(islandMesh.position);
	onPressLeft();
}

function onPressRight() {
	const currentSceneIndex = get(currentSceneIndexStore);

	if (currentSceneIndex === sceneContent.length - 1) {
		currentSceneIndexStore.set(0);
		return;
	}
	currentSceneIndexStore.update((index) => index + 1);
}

function onPressLeft() {
	const currentSceneIndex = get(currentSceneIndexStore);
	if (currentSceneIndex === 0) {
		currentSceneIndexStore.set(sceneContent.length - 1);
		return;
	}
	currentSceneIndexStore.update((index) => index - 1);
}
