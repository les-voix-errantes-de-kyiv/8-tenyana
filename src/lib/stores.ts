import { Scene, PerspectiveCamera, Mesh, AmbientLight, Group, SpotLight } from 'three';
import { readable, writable } from 'svelte/store';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

type ScencesContent = {
	title: string;
	subTitle: string;
	content: string;
	image: string;
};

export const sceneStore = writable(new Scene());
export const cameraStore = writable(
	new PerspectiveCamera(
		75,
		typeof window !== 'undefined' ? window.innerWidth / window.innerHeight : 0,
		1,
		1000
	)
);
export const currentSceneIndexStore = writable(0);
export const ambientLightStore = writable(new AmbientLight(0xffffff));
export const spotLightStore = writable(new SpotLight());
export const gltfLoaderStore = writable(new GLTFLoader());
export const islandAndSceneGroupStore = writable(new Group());
export const planeMeshStore = writable(new Mesh());
export const islandMeshStore = writable(new Mesh());
export const sceneMeshStore = writable(new Mesh());
export const scenesContentStore = readable<ScencesContent[]>([
	{
		title: 'Ukraine - 1',
		subTitle: 'Avant la guerre',
		content:
			"Avant que les frappes et que les horreurs ne s'abattent en Ukraine, Tetyana mène une vie paisible à Kyiv, aux côtés de son mari et de son fils. En Ukraine, elle travaille depuis 15 ans dans le secteur de l’aérien et du tourisme, occupant le poste d’agente de réservation dans une office de tourisme à Kyiv. En dehors de ses heures de travail, Tetyana a ses rituels et ses passions. Par exemple, elle adore voyager, au moins deux ou trois fois par an. Le sport, en particulier la course, fait partie intégrante de sa vie. Entourée de sa famille et de ses proches, elle est en phase avec sa vie.",
		image: '/assets/ukraine1.png'
	},
	{
		title: 'Ukraine - 2',
		subTitle: 'Pendant la guerre',
		content:
			'Alors que les premiers bombardements surviennent à proximité de l’aéroport de Kyiv, Tetyana peut apercevoir les pistes bombardées. Contrainte de fuir, elle se rend chez le parrain de son fils, situé à 30 kilomètres des dégâts.\n' +
			'\n' +
			"À cette période, elle est constamment en contact avec des amis étrangers qui insistent pour qu'elle et son fils les rejoignent. La mère de Tetyana, elle, est terriblement malade, résidant à 200 kilomètres, la route lui est bloquée. \n" +
			'\n' +
			'Tetyana est alors contrainte de répondre au plus terrible des dilemmes, choisir entre sa mère et son fils. Après de longues discussions avec sa mère, Tetyana se rend à l’évidence, elle n’a aucun choix que de quitter sa mère afin de garantir un futur et une stabilité pour son fils.',
		image: '/assets/ukraine2.png'
	},
	{
		title: ' De l’est à l’ouest',
		subTitle: 'Le périple ',
		content:
			"Après les premiers bombardements, c’est avec précipitation qu’elle prend la décision de quitter son pays natal. Avec seulement trois chaussettes et t-shirt, elle prend la voiture avec son mari et son fils jusqu’à la frontière. Ils font une pause chez un ami pour se reposer avant d'atteindre la frontière entre l'Ukraine et la Hongrie, où ils prennent le train en direction de la Slovénie où ils restent un peu plus de deux semaines chez des amis.\n" +
			'\n' +
			"Puis, ils se rendent en Suisse, où elle retrouve un réconfort chez sa meilleure amie. Le voyage les mène ensuite à Paris, puis à Bordeaux. Arrivés à Bordeaux, ils contactent la Croix-Rouge pour signaler leur arrivée en France et ils sont accueillis par une famille d'accueil. Un périple tumultueux qui n’a pas été sans impact, marquant profondément leur parcours.",
		image: '/assets/travel.png'
	},
	{
		title: 'Bordeaux',
		subTitle: 'Une nouvelle vie',
		content:
			"À son arrivée à Bordeaux, Tetyana trouve de la chaleur et du réconfort auprès de sa famille d’accueil. Sa priorité est de commencer l’apprentissage du français pour mieux s’intégrer, un véritable défi pour elle. Un défi, qu'elle a par ailleurs relevé avec brio grâce à de nombreux cours intensifs. La route vers l'indépendance s'est révélée être une quête essentielle pour Tetyana.\n" +
			'\n' +
			"Mais malheureusement, cela ne figure pas être aussi simple, car après de nombreuses candidatures refusées, sans réponse, elle perd espoir. Vient un jour où son acharnement et sa détermination ont finalement porté leurs fruits lorsqu'elle a décroché un poste en tant qu'agente d’exploitation à l’aéroport. \n" +
			'\n' +
			"Cette opportunité a été une lueur d'espoir, une occasion de reprendre le contrôle de sa vie. L’intégration de son fils, occupe également une place centrale dans sa vie. L'intégration de son fils, étudiant en éco-gestion à l'université Montesquieu, a également été au cœur de ses préoccupations. Tetyana observe avec fierté la réussite scolaire de son fils. \n" +
			'\n' +
			"Son récit résonne comme la résilience d'une femme qui a su transformer les obstacles en opportunités, qui a trouvé la force de se reconstruire dans un nouveau pays.",
		image: '/assets/france.png'
	}
]);
export const plateformeMeshStore1 = writable(new Mesh());
export const plateformeMeshStore2 = writable(new Mesh());
export const plateformeMeshStore3 = writable(new Mesh());
export const plateformeMeshStore4 = writable(new Mesh());
