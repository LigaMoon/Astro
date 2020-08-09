// initialize variables
var renderer, scene, camera, container, parent;
var controls;

// constellation data
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
    

init( );
createConstellation( );
animate();

// create function to set the scene with renderer, camera and interactive controls
function init ( ) {
    // init container
    container = document.getElementById( 'canvas' );
    parent = document.getElementById( 'model-container' );
    parent.appendChild( container );

    // init renderer
    renderer = new THREE.WebGLRenderer( {antialias: true} );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( 400, 400 );
    container.appendChild( renderer.domElement );

    // init scene
    scene = new THREE.Scene( );
    scene.background = new THREE.Color( 0x131A27 );

    // init camera
    camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );
    camera.position.set( 0, 0, 8 );
    camera.lookAt( scene.position );

    // init interactive controls
    controls = new THREE.OrbitControls( camera, container );
    // controls.enableZoom = false;
}

// function to create constellations with spheres, lines and points
function createConstellation( ) {
    // add white light
    var light = new THREE.AmbientLight( 0xffffff, 0.7 );
    scene.add( light );

    // create an array for constellation coordinates to be adde
    var constellation = [ ];

    // iterate through coordinates and add do the array, create sphere at these coordinates
    for( let i = 0; i < capricornus.length; i ++ ) {
        constellation.push( new THREE.Vector3( capricornus[i].coord[0], capricornus[i].coord[1], capricornus[i].coord[2] ) );
        var geometrySphere = new THREE.SphereGeometry( 0.2, 32, 32 );
    }
    
    // add material to each sphere
    for( let i = 0; i < constellation.length ; i++ ) {
        var sphere = new THREE.Mesh( geometrySphere, new THREE.MeshLambertMaterial( { color: 0xFFFFD6 } ) );
        sphere.position.set( constellation[i].x, constellation[i].y, constellation[i].z );
        scene.add( sphere );   
    }

    // add line and point geometry to connect the stars
    var geometry = new THREE.BufferGeometry().setFromPoints(constellation);
    var materialPoint = new THREE.PointsMaterial({color: 0xffffff, size: 0.01});
    var materialLine = new THREE.LineBasicMaterial({color: 0xdddddd, transparent: true});
    materialLine.opacity = 0.3;
    var points = new THREE.Points(geometry, materialPoint);
    var line = new THREE.Line(geometry, materialLine);
    scene.add(points);
    scene.add(line);
}

// add function to render created geometry
function animate( ) {
    renderer.render( scene, camera );
    requestAnimationFrame( animate );
}