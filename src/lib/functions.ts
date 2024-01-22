import * as THREE from 'three';
import {sceneStore, cameraStore, boxStore, ambientLightStore} from "$lib/stores";
import {get} from "svelte/store";

const scene = get(sceneStore)
const camera = get(cameraStore)
const cube = get(boxStore)
const ambientLight = get(ambientLightStore)

export function resize(renderer: THREE.WebGLRenderer) {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}

export function initObjectScene(){
    scene.add(cube);
    scene.add(ambientLight)
    camera.position.z = 5;
}
