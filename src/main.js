import * as THREE from 'three';
// import { createServer } from 'vite';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// e7e9fe code for color i want later
const light = new THREE.DirectionalLight(0xFFFFFF, 1);
light.position.set(5, 15, 5).normalize();
scene.add(light);

let horizontalRotation = -Math.PI/2;

function createMaterial(color) {
  return new THREE.MeshStandardMaterial({ color });
}

function createRoom() {
	const roomMaterial = createMaterial(0xffffff);

	const floorGeometry = new THREE.PlaneGeometry(20, 20);
	const floor = new THREE.Mesh(floorGeometry, roomMaterial);
	floor.rotation.x = horizontalRotation;
	scene.add(floor);

	const backWall = new THREE.Mesh(new THREE.BoxGeometry(20, 10, 0.1), roomMaterial);
	backWall.position.set(0, 5, -10);
	scene.add(backWall);

	const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.1, 10, 20), roomMaterial);
	leftWall.position.set(-10, 5, 0);
	scene.add(leftWall);
}

function createBed() {
	const bedGeometry = new THREE.BoxGeometry(10,5,1);
	const bedMaterial = createMaterial(0xffffff);
	const bedFrame = new THREE.Mesh(bedGeometry,bedMaterial);

	const bedLegGeometry = new THREE.BoxGeometry(1,2,1);
	const bedLeg1 = new THREE.Mesh(bedLegGeometry,bedMaterial);

	const bedMattressMaterial = createMaterial(0xa174d4);
	const bedMattressGeometry = new THREE.BoxGeometry(9.9,4.8,0.5);
	const bedMattress = new THREE.Mesh(bedMattressGeometry,bedMattressMaterial);

	const bedLeg2 = bedLeg1.clone();
	const bedLeg3 = bedLeg1.clone();

	bedFrame.rotation.x = horizontalRotation;
	bedMattress.rotation.x = horizontalRotation;

	bedFrame.position.set(-5,1,5);
	bedMattress.position.set(-5,2,5);
	bedLeg1.position.set(-9.3,0,7);
	bedLeg2.position.set(-1,0,7);
	bedLeg3.position.set(-1,0,3);

	scene.add(bedLeg1);
	scene.add(bedLeg2);
	scene.add(bedLeg3);
	scene.add(bedMattress);
	scene.add(bedFrame);
	createPillow();
}

function createPillow() {
	const pillowMaterial = createMaterial(0xfa9cd9);
	const pillow = new THREE.Mesh(new THREE.BoxGeometry(3, 4, 0.3), pillowMaterial);

	pillow.rotation.x = horizontalRotation;
	pillow.position.set(-7,2.5,5);

	scene.add(pillow);
}

function animate() {
	createRoom();
	createBed();
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );

camera.position.z = 15;
camera.position.y = 15;
camera.position.x = 15;
camera.lookAt(0, 0, 0);