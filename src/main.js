import * as THREE from 'three';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const light = new THREE.DirectionalLight(0xCAE8FF, 1);
light.position.set(5, 15, 5).normalize();
scene.add(light);


function createMaterial(color) {
  return new THREE.MeshStandardMaterial({ color });
}

// Floor
const floorGeometry = new THREE.PlaneGeometry(20, 20);
const floorMaterial = createMaterial(0xF5D28B ); 
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

// Walls
const wallMaterial = createMaterial(0xffffff); 

const backWall = new THREE.Mesh(new THREE.BoxGeometry(20, 10, 0.1), wallMaterial);
backWall.position.set(0, 5, -10);
scene.add(backWall);

const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.1, 10, 20), wallMaterial);
leftWall.position.set(-10, 5, 0);
scene.add(leftWall);

function animate() {
	// createRoom();
	// createBed();
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );

camera.position.z = 15;
camera.position.y = 15;
camera.position.x = 15;
camera.lookAt(0, 0, 0);