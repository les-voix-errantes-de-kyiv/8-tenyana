import {Scene, WebGLRenderer, PerspectiveCamera, Mesh, AmbientLight} from 'three'
import {writable, get} from "svelte/store";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
import{geometryBox, material} from "$lib/objects";

export const sceneStore = writable(new Scene());
export const rendererStore = writable(new WebGLRenderer())
export const cameraStore = writable(
    new PerspectiveCamera(
        45,
        typeof window !== 'undefined' ? window.innerWidth / window.innerHeight : 0,
        1,
        1000
    )
);
// const camera = get(cameraStore)
// export const controlsStore = writable(
//     new OrbitControls(camera)
// )
export const boxStore = writable(new Mesh(geometryBox, material))
export const ambientLightStore = writable(new AmbientLight(0xffffff))

