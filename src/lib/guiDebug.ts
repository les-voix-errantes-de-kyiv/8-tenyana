import GUI from 'lil-gui';
import { get } from 'svelte/store';
import { islandAndSceneGroupStore } from '$lib/stores';

const gui = new GUI();
const islandAndSceneGroup = get(islandAndSceneGroupStore);

export function addDebug() {
	gui
		.add(islandAndSceneGroup.rotation, 'y')
		.min(0)
		.max(Math.PI * 2);
}
