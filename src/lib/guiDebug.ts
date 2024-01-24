import GUI from 'lil-gui';
import { get } from 'svelte/store';
import { islandAndSceneGroupStore, spotLightStore } from '$lib/stores';

const gui = new GUI();
const islandAndSceneGroup = get(islandAndSceneGroupStore);
const spotLight = get(spotLightStore);
const debugLightProps = {};
debugLightProps.color = '#FFFFFF';

export function addDebug() {
	// gui
	// 	.add(islandAndSceneGroup.rotation, 'y')
	// 	.min(0)
	// 	.max(Math.PI * 2);
	const spotLightFolder = gui.addFolder('spotLight');
	spotLightFolder.add(spotLight.position, 'x').name('position x');
	spotLightFolder.add(spotLight.position, 'y').name('position y');
	spotLightFolder.add(spotLight.position, 'z').name('position z');
	spotLightFolder
		.add(spotLight.rotation, 'x')
		.min(0)
		.max(Math.PI * 2)
		.name('rotation x');
	spotLightFolder
		.add(spotLight.rotation, 'y')
		.min(0)
		.max(Math.PI * 2)
		.name('rotation y');
	spotLightFolder
		.add(spotLight.rotation, 'z')
		.min(0)
		.max(Math.PI * 2)
		.name('rotation z');
	spotLightFolder.addColor(debugLightProps, 'color').onChange(() => {
		spotLightStore.update((spotLight) => spotLight.color.set(debugLightProps.color));
	});
	spotLightFolder.add(spotLight, 'intensity').min(0).max(1).name('intensity');
}
