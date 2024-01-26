import {
	Scene,
	PerspectiveCamera,
	Mesh,
	AmbientLight,
	Group,
	SpotLight,
	DirectionalLight
} from 'three';
import { readable, writable } from 'svelte/store';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

type ScenesContent = {
	title: string;
	subTitle: string;
	content: string;
	image: string;
};

type AboutContent = {
	name: string;
	address: string;
	link: string;
	text: string;
	mail?: string;
	phone?: string;
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
export const directionalLightStore1 = writable(new DirectionalLight());
export const directionalLightStore2 = writable(new DirectionalLight());
export const directionalLightStore3 = writable(new DirectionalLight());
export const gltfLoaderStore = writable(new GLTFLoader());
export const islandAndSceneGroupStore = writable(new Group());
export const islandMeshStore = writable(new Mesh());
export const scenesContentStore = readable<ScenesContent[]>([
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
export const aboutContentStore = readable<AboutContent[]>([
	{
		name: 'La maison Ukrainienne',
		link: 'Lien Hello Asso Maison Urkrainienne',
		address: '55 Av. du Maréchal de Lattre de Tassigny, 33700 Mérignac',
		mail: 'contact@lamaisonukrainienne.org',
		text: "La Maison Ukrainienne est une association à Bordeaux qui soutient l'intégration des femmes ukrainiennes en offrant des programmes linguistiques et culturels. "
	},
	{
		name: 'ukraine amitié',
		link: 'http://www.ukraineamitie.free.fr/',
		address: '19 rue Père Louis de Jabrun - 33000 Bordeaux',
		mail: 'ukraine.amitie@gmail.com',
		phone: '07 80 18 87 87',
		text: "Ukraine Amitié est une organisation qui promeut les liens d'amitié et d'entraide entre les Ukrainiens."
	},
	{
		name: 'france horizon',
		link: 'https://www.france-horizon.fr/',
		address: 'FRANCE HORIZON - CHRS PESSAC - 33600',
		phone: '05 57 89 09 09',
		text: "France Horizon est une association engagée dans l'accompagnement des migrants et des réfugiés, travaillant pour faciliter leur intégration à travers des programmes d'accueil, de logement, et de soutien social."
	},
	{
		name: 'la croix rouge',
		link: 'https://www.croix-rouge.fr/',
		address: '22-25 Rue des Terres Neuves, 33130 Bègles',
		phone: '05 57 87 64 46',
		text: "La Croix-Rouge est une organisation humanitaire, œuvrant pour le soutien et l'assistance aux personnes vulnérables, y compris les migrants, à travers des programmes d'urgence, d'accueil, et d'accompagnement social."
	}
]);

export const dracoLoaderStore = writable(new DRACOLoader());

export const aboutSceneStore = writable(new Scene());
export const aboutIslandMeshStore = writable(new Mesh());
export const aboutIslandMeshGroupStore = writable(new Group());
export const aboutPlateformeMeshStore1 = writable(new Mesh());
export const aboutPlateformeMeshStore2 = writable(new Mesh());
export const aboutPlateformeMeshStore3 = writable(new Mesh());
export const aboutPlateformeMeshStore4 = writable(new Mesh());
