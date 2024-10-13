import * as THREE from 'three';
// import { createServer } from 'vite';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// e7e9fe code for color i want later
const light = new THREE.DirectionalLight(0xffffff, 2.5);
light.position.set(5, 15, 5).normalize();
scene.add(light);

let horizontalRotation = -Math.PI/2;

function createMaterial(color) {
  return new THREE.MeshStandardMaterial({ color });
}

function createRoom() {
	const roomMaterial = createMaterial(0x333973);

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
	const bedMaterial = createMaterial(0x343434);
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

function createDesk() {
	const deskMaterial = createMaterial(0x815e46);

	const deskBase = new THREE.Mesh(new THREE.BoxGeometry(7,5,1), deskMaterial);
	const deskLeg1 = new THREE.Mesh(new THREE.BoxGeometry(1,3,1), deskMaterial);
	const deskLeg2 = deskLeg1.clone();
	const deskLeg3 = deskLeg1.clone();

	deskBase.rotation.x = horizontalRotation;

	deskBase.position.set(5,2,-8);
	deskLeg1.position.set(8,0,-9);
	deskLeg2.position.set(8,0,-6);
	deskLeg3.position.set(2.3,0,-6);

	scene.add(deskBase);
	scene.add(deskLeg1);
	scene.add(deskLeg2);
	scene.add(deskLeg3);
}

function createComputer() {
	const pcMaterial = createMaterial(0x343434);

	const pcBase = new THREE.Mesh(new THREE.BoxGeometry(5,3,0.2), pcMaterial);
	const keyboard = new THREE.Mesh(new THREE.BoxGeometry(4,2,0.1), pcMaterial);
	const mouse = new THREE.Mesh(new THREE.BoxGeometry(0.7,1,0.5), pcMaterial);

	keyboard.rotation.x = horizontalRotation;
	mouse.rotation.x = horizontalRotation;

	pcBase.position.set(5,4,-9);
	keyboard.position.set(4.6,2.5,-7.5);
	mouse.position.set(7.5,2.4,-7.5);

	scene.add(pcBase);
	scene.add(keyboard);
	scene.add(mouse);
}

function createCabinet() {
	const cabinetMaterial = createMaterial(0x815e46);

	const cabinet1 = new THREE.Mesh(new THREE.BoxGeometry(3,18,4), cabinetMaterial);
	const cabinet2 = cabinet1.clone();

	cabinet1.position.set(-8,0,-6.5);
	cabinet2.position.set(-8,0,-2.3);

	scene.add(cabinet1);
	scene.add(cabinet2);
}

function createChair() {
	const chairMaterial = createMaterial(0x525252);

	const chairBase = new THREE.Mesh(new THREE.BoxGeometry(2,3.5,2), chairMaterial);
	const chairHead = new THREE.Mesh(new THREE.BoxGeometry(2,2,0.5),chairMaterial);

	chairBase.position.set(5,0,-4);
	chairHead.position.set(6,4,-1.5);

	scene.add(chairBase);
	scene.add(chairHead);
}

function createWindows() {
	const windowMaterial = createMaterial(0xd6f7fc);

	const window1 = new THREE.Mesh(new THREE.BoxGeometry(6,3,0.2),windowMaterial);
	const window2 = window1.clone();

	window2.rotation.y = horizontalRotation;

	window1.position.set(-2,6,-10);
	window2.position.set(-10,6,5);

	scene.add(window1);
	scene.add(window2);
}

function createMat() {
	const matMaterial = createMaterial(0xea9a40);

	const mat = new THREE.Mesh(new THREE.CircleGeometry(5.0), matMaterial);

	mat.rotation.x = horizontalRotation;
	mat.position.set(2,0.1,4.3);

	scene.add(mat);
}

function animate() {
	createRoom();
	createBed();
	createDesk();
	createComputer();
	createCabinet();
	createChair();
	createWindows();
	createMat();
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );

camera.position.z = 15;
camera.position.y = 15;
camera.position.x = 15;
camera.lookAt(0, 0, 0);