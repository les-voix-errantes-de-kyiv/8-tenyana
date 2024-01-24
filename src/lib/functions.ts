import { type WebGLRenderer } from 'three';
import {
	sceneStore,
	cameraStore,
	ambientLightStore,
	gltfLoaderStore,
	planeMeshStore,
	islandMeshStore,
	islandAndSceneGroupStore,
	scenesContentStore,
	currentSceneIndexStore,
	plateformeMeshStore1,
	plateformeMeshStore2,
	plateformeMeshStore3,
	plateformeMeshStore4,
	spotLightStore
} from '$lib/stores';
import { get } from 'svelte/store';
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap';

const scene = get(sceneStore);
const camera = get(cameraStore);
const ambientLight = get(ambientLightStore);
const spotLight = get(spotLightStore);
const islandMesh = get(islandMeshStore);
const plateformeMesh1 = get(plateformeMeshStore1);
const plateformeMesh2 = get(plateformeMeshStore2);
const plateformeMesh3 = get(plateformeMeshStore3);
const plateformeMesh4 = get(plateformeMeshStore4);
const islandAndSceneGroup = get(islandAndSceneGroupStore);
const sceneContent = get(scenesContentStore);

export const initCameraScene = () => {
	camera.position.set(32, 13, -3);
	camera.lookAt(islandMesh.position);
};

export function zoomCamera() {
	camera.position.set(25, 8.8, 0);
	camera.lookAt(islandMesh.position);
}

export function resize(renderer: WebGLRenderer) {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
}

export function initObjectScene() {
	scene.add(ambientLight);
	scene.add(spotLight);
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

export function placePlateformeModel1(model: GLTF) {
	const meshModel = model.scene.children[0];
	plateformeMesh1.add(meshModel);
}

export function placePlateformeModel2(model: GLTF) {
	const meshModel = model.scene.children[0];
	plateformeMesh2.add(meshModel);
}

export function placePlateformeModel3(model: GLTF) {
	const meshModel = model.scene.children[0];
	plateformeMesh3.add(meshModel);
}

export function placePlateformeModel4(model: GLTF) {
	const meshModel = model.scene.children[0];
	plateformeMesh4.add(meshModel);
}

export function loadModel(url: string) {
	const gltfLoader = get(gltfLoaderStore);
	return gltfLoader.loadAsync(url);
}

export function makeGroup() {
	islandAndSceneGroup.add(islandMesh);
	islandAndSceneGroup.add(plateformeMesh1);
	islandAndSceneGroup.add(plateformeMesh2);
	islandAndSceneGroup.add(plateformeMesh3);
	islandAndSceneGroup.add(plateformeMesh4);
	scene.add(islandAndSceneGroup);
}

export function rotateScene() {
	gsap.to(islandAndSceneGroup.rotation, {
		y: Math.PI * -0.5 + islandAndSceneGroup.rotation.y,
		duration: 1,
		ease: 'power2.inOut'
	});
	zoomCamera();
	onPressRight();
	camera.lookAt(islandMesh.position);
}

export function unRotateScene() {
	gsap.to(islandAndSceneGroup.rotation, {
		y: Math.PI * 0.5 + islandAndSceneGroup.rotation.y,
		duration: 1,
		ease: 'power2.inOut'
	});
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
