// creating the scene by initialising the scene, camera and renderer
// adding canvas to the model div
var container = document.getElementById( 'canvas' );
document.body.appendChild( container );

// creating the renderer, setting the resolution and renderer size
var renderer = new THREE.WebGLRenderer( );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( 400, 400 );
container.appendChild( renderer.domElement );

// creating the scene and setting it's background color
var scene = new THREE.Scene( );
scene.background = new THREE.Color( 0x131A27 );

// creating the camera view and position that it is looking at
var camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
camera.position.set(0, 0, 8);
camera.lookAt(scene.position);

