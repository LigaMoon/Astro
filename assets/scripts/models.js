// creating the scene by initialising the scene, camera and renderer
// adding canvas to the model div
var container = document.getElementById( 'canvas' );
var parent = document.getElementById( 'model-container' );
parent.appendChild( container );

// creating the renderer, setting the resolution and renderer size
var renderer = new THREE.WebGLRenderer( );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( 400, 400 );
container.appendChild( renderer.domElement );

// creating the scene and setting it's background color
var scene = new THREE.Scene( );
scene.background = new THREE.Color( 0x131A27 );

// creating the camera view and position that it is looking at
var camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );
camera.position.set( 0, 0, 8 );
camera.lookAt( scene.position );

//Creating white light so the object can be seen and add it to the scene
var light = new THREE.AmbientLight( 0xffffff, 0.7 );
scene.add( light );

// add coordinates, star name and star type for one constellation
var capricornus = [
    {
        coord: [3.3, 2.1, -0.5],
        name: "Algiedi Prima",
        type: "Double Star"
    },
    {
        coord: [3.4, 1.8, -2.0],
        name: "Dabih",
        type: "Multiple Star System"
    },
    {
        coord: [1.3, -2.0, 0],
        name: "Psi Capricorni",
        type: "Yellow-White Dwarf Star"
    },
    {
        coord: [1.1, -4.2, -5],
        name: "Omega Algiedi",
        type: "Red Giant Star"
    },
    {
        coord: [-1.9, -1.5, -2],
        name: "Yen",
        type: "Double Star"
    },
    {
        coord: [-3.7, 1.3, 0],
        name: "Deneb Algedi",
        type: "Binary Star System"
    },
    {
        coord: [-3.1, 1.1, -0.6],
        name: "Nashira",
        type: "Blue-White Giant Star"
    },
    {
        coord: [-1.6, 1.1, -0.7],
        name: "Iota Capricorni",
        type: "Yellow Giant Star"
    },
    {
        coord: [-0.3, 1.0, -0.6],
        name: "Dorsum",
        type: "White Dwarf Star"
    },
    {
        coord: [3.4, 1.8, -2.0],
        name: "Dabih",
        type: "Multiple Star System"
    }];

// create an array for constellation coordinates to be added to and used to display
var constellation = [ ];

// create sphere geometry for stars to be created at each coordinate
for( let i = 0; i < capricornus.length; i ++ ) {
    constellation.push( new THREE.Vector3( capricornus[i].coord[0], capricornus[i].coord[1], capricornus[i].coord[2] ) );
    var geometrySphere = new THREE.SphereGeometry( 0.2, 32, 32 );
}


// add material to each sphere and add all to the scene tobe visible
for( let i = 0; i < constellation.length ; i++ ) {
    var sphere = new THREE.Mesh( geometrySphere, new THREE.MeshLambertMaterial( { color: 0xFFFFD6 } ) );
    sphere.position.set( constellation[i].x, constellation[i].y, constellation[i].z );
    scene.add( sphere );   
}

// add function to render created geometry
function animate( ) {
    renderer.render( scene, camera );
    requestAnimationFrame( animate );
}

animate();