import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const roomGeometry = new THREE.BoxGeometry(10,10,10);
const roomMaterial = new THREE.MeshBasicMaterial({color: 0x87CEEB, side: THREE.BackSide});
const room = new THREE.Mesh(roomGeometry,roomMaterial);

camera.position.z = 15;
scene.add(room);
room.rotateY(90);

function animate() {
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );