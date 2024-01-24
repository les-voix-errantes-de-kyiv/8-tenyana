import { Scene, PerspectiveCamera, Mesh, AmbientLight, Group } from 'three';
import { readable, writable } from 'svelte/store';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const sceneStore = writable(new Scene());
export const cameraStore = writable(
	new PerspectiveCamera(
		75,
		typeof window !== 'undefined' ? window.innerWidth / window.innerHeight : 0,
		1,
		1000
	)
);
export const ambientLightStore = writable(new AmbientLight(0xffffff));
export const gltfLoaderStore = writable(new GLTFLoader());
export const islandAndSceneGroupStore = writable(new Group());
export const planeMeshStore = writable(new Mesh());
export const islandMeshStore = writable(new Mesh());
export const sceneMeshStore = writable(new Mesh());
export const scenesContentStore = readable<{ title: string; subTitle: string }[]>([
	{ title: 'Ukraine', subTitle: 'Le calme avant...' },
	{ title: 'scene 2', subTitle: 'Le calme avant...' },
	{ title: 'scene 3', subTitle: 'Le calme avant...' },
	{ title: 'scene 4', subTitle: 'Le calme avant...' },
	{ title: 'scene 5', subTitle: 'Le calme avant...' }
]);
export const currentSceneIndexStore = writable(0);
