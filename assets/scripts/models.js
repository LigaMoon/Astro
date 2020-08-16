// initialize variables
var renderer, scene, camera, container, parent;
var controls;
var mouse = new THREE.Vector2( );
var raycaster, intersects, INTERSECTED;
var constellationData, cnostellationName, constellationDistance;

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
    }
];
var aquarius = [
    {
        coord: [4.3, -0.1, -0.5],
        name: "Albali",
        type: "Red Giant Star"
    },
    {
        coord: [2.4, 1.8, -4.0],
        name: "Sadalsuud",
        type: "Yellow Supergiant Star"
    },
    {
        coord: [-0.2, 3.4, -4.0],
        name: "Sadalmelik",
        type: "Yellow Supergiant Star"
    },
    {
        coord: [-1.4, 1.9, -0.5],
        name: "Sadachbia",
        type: "Binary Star System"
    },
    {
        coord: [-0.75, 0.4, -0.6],
        name: "Ancha",
        type: "Yellow-White Subginat Star"
    },
    {
        coord: [-0.01, -1.0, -0.5],
        name: "Iota Aquarii",
        type: "Blue-White Dwarf Star"
    },
    {
        coord: [-0.75, 0.4, -0.6],
        name: "Ancha",
        type: "Yellow-White Subginat Star"
    },
    {
        coord: [-1.4, 1.9, -0.5],
        name: "Sadachbia",
        type: "Binary Star System"
    },
    {
        coord: [-2.1, 2.23, 0],
        name: "Sadaltager",
        type: "Binary Star System"
    },
    {
        coord: [-2.9, 0.4, -0.5],
        name: "Lambda Aquarii",
        type: "Red Giant Star"
    },
    {
        coord: [-2.8, -1.3, -1.5],
        name: "Tau-1 Aquarii",
        type: "Orange Giant Star"
    },
    {
        coord: [-2.89, -1.9, -0.5],
        name: "Skat",
        type: "Blue Subgiant Star"
    },
    {
        coord: [-3.7, -3.3, -0.5],
        name: "88-Aquarii",
        type: "Orange Giant Star"
    }
];
var pisces = [
    {
        coord: [2.5, -1.6, 0.0],
        name: "Iota Piscium",
        type: "Yellow-White Dwarf Star"
    },
    {
        coord: [3.7, -1.3, -1.0],
        name: "Theta Piscium",
        type: "Orange Giant Star"
    },
    {
        coord: [4.0, -2.0, -0.9],
        name: "Gamma Piscium",
        type: "Yellow Giant Star"
    },
    {
        coord: [3.5, -2.5, -1.0],
        name: "Kappa Piscium",
        type: "Multiple Star System"
    },
    {
        coord: [2.7, -2.4, -0.7],
        name: "Lambda Piscium",
        type: "Blue-White Dwarf Star"
    },
    {
        coord: [2.5, -1.6, 0.0],
        name: "Iota Piscium",
        type: "Yellow-White Dwarf Star"
    },
    {
        coord: [1.85, -1.4, -0.7],
        name: "Omega Piscium",
        type: "Yellow-White Subgiant Star"
    },
    {
        coord: [-0.6, -1.7, -4.0],
        name: "Delta Piscium",
        type: "Binary Star System"
    },
    {
        coord: [-1.3, -1.2, -1.0],
        name: "Epsilon Piscium",
        type: "Orange Giant Star"
    },
    {
        coord: [-2.62, -1.5, -1.5],
        name: "Mu Piscium",
        type: "Multiple Star System"
    },
    {
        coord: [-3.2, -1.6, -2.0],
        name: "Nu Piscium",
        type: "Orange Giant Star"
    },
    {
        coord: [-3.8, -2.0, -1.0],
        name: "Xi Piscium",
        type: "Binary Star System"
    },
    {
        coord: [-4.2, -2.1, -0.3],
        name: "Alrischa",
        type: "Binary Star System"
    },
    {
        coord: [-3.35, -0.85, -1.5],
        name: "Omicron Piscium",
        type: "Yellow Giant Star"
    },
    {
        coord: [-2.6, 0.36, -2.0],
        name: "Kallat Nunu",
        type: "Yellow Giant Star"
    },
    {
        coord: [-1.6, 2.0, -3.0],
        name: "Chi Piscium",
        type: "Orange Giant Star"
    },
    {
        coord: [-1.65, 3.0, -3.7],
        name: "Phi Piscium",
        type: "Binary Star System"
    },
    {
        coord: [-1.85, 3.5, -3.0],
        name: "Tau Piscium",
        type: "Orange Giant Star"
    },
    {
        coord: [-1.5, 4.2, -3.7],
        name: "Upsilon Piscium",
        type: "Blue-White Dwarf Star"
    },
    {
        coord: [-1.65, 3.0, -3.7],
        name: "Phi Piscium",
        type: "Binary Star System"
    }
];
var aries = [
    {
        coord: [3.8, -1.65, -1.0],
        name: "Mesarthim",
        type: "Binary Star System"
    },
    {
        coord: [3.4, -0.9, 0],
        name: "Sheratan",
        type: "Blue-White Subgiant Star"
    },
    {
        coord: [2.25, 0, 0],
        name: "Hamal",
        type: "Orange Giant Star"
    },
    {
        coord: [-1.4, 2.8, -2.0],
        name: "41 Arietis",
        type: "Blue-White Dwarf Star"
    },
    {
        coord: [2.25, 0, 0],
        name: "Hamal",
        type: "Orange Giant Star"
    },
    {
        coord: [-2.2, -0.85, -2.0],
        name: "Epsilon Arietis",
        type: "Binary Star System"
    },
    {
        coord: [-3.8, -0.9, -3.0],
        name: "Zeta Arietis",
        type: "White Dwarf Star"
    }
];
var taurus = [
    {
        coord: [-3.7, 3.15, -1.0],
        name: "Elnath",
        type: "Blue-White Dwarf Star"
    },
    {
        coord: [-0.9, 1.4, -3.5],
        name: "Tau Tauri",
        type: "Triple Star System"
    },
    {
        coord: [0.01, 0.3, -1.0],
        name: "Ain",
        type: "Orange Giant Star"
    },
    {
        coord: [0.4, -0.2, -1.0],
        name: "Hyadum II",
        type: "Orange Giant Star"
    },
    {
        coord: [0.6, -0.7, -1.0],
        name: "Hyadum I",
        type: "Yellow Giant Star"
    },
    {
        coord: [-0.01, -0.65, -1.0],
        name: "Theta Tauri",
        type: "Binary Star System"
    },
    {
        coord: [-0.5, -0.5, 0],
        name: "Aldebaran",
        type: "Orange Giant Star"
    },
    {
        coord: [-4.8, 1.05, -4.0],
        name: "Zeta Tauri",
        type: "Binary Star System"
    },
    {
        coord: [-0.5, -0.5, 0],
        name: "Aldebaran",
        type: "Orange Giant Star"
    },
    {
        coord: [-0.01, -0.65, -1.0],
        name: "Theta Tauri",
        type: "Binary Star System"
    },
    {
        coord: [0.6, -0.7, -1.0],
        name: "Hyadum I",
        type: "Yellow Giant Star"
    },
    {
        coord: [1.95, -1.55, -3.5],
        name: "Lambda Tauri",
        type: "Triple Star System"
    },
    {
        coord: [0.1, -2.6, -4.0],
        name: "Mu Tauri",
        type: "Blue-White Subgiant Star"
    },
    {
        coord: [1.8, -3.4, -4.0],
        name: "Nu Tauri",
        type: "White Dwarf Star"
    },
    {
        coord: [0.1, -2.6, -4.0],
        name: "Mu Tauri",
        type: "Blue-White Subgiant Star"
    },
    {
        coord: [1.95, -1.55, -3.5],
        name: "Lambda Tauri",
        type: "Triple Star System"
    },
    {
        coord: [4.05, -1.3, -3.0],
        name: "unknown"
    },
    {
        coord: [4.4, -2.2, -2.0],
        name: "Xi Tauri",
        type: "Triple Star System"
    },
    {
        coord: [4.55, -2.6, -2.0],
        name: "Omicron Tauri",
        type: "Yellow Giant Star"
    }
];
var gemini = [
    {
        coord: [3.4, -0.2, -1.0],
        name: "Eta Geminorum",
        type: "Red Giant Star"
    },
    {
        coord: [2.85, -0.2, -0.7],
        name: "Tejat Posterior",
        type: "Red Giant Star"
    },
    {
        coord: [1.4, 0.45, -2.5],
        name: "Mebsuta",
        type: "Blue Supergiant Star"
    },
    {
        coord: [-0.4, 1.95, -1.0],
        name: "Tau Geminorum",
        type: "Orange Giant Star"
    },
    {
        coord: [-1.9, 2.5, 0],
        name: "Castor",
        type: "Multiple Star System"
    },
    {
        coord: [-2.65, 1.4, 0],
        name: "Pollux",
        type: "Orange Giant Star"
    },
    {
        coord: [-2.7, 0.3, -0.0],
        name: "Kappa Geminorum",
        type: "White Dwarf Star"
    },
    {
        coord: [-1.1, -0.5, -0.2],
        name: "Wasat",
        type: "Blue-White Subdwarf Star"
    },
    {
        coord: [0.01, -0.9, -4.0],
        name: "Mekbuda",
        type: "Yellow Supergiant Star"
    },
    {
        coord: [1.9, -2.1, -0.4],
        name: "Alhena",
        type: "Blue Subdwarf Star"
    },
    {
        coord: [1.37, -3.2, -0.2],
        name: "Alzirr",
        type: "Blue-White Subdwarf Star"
    }
];
var cancer = [
    {
        coord: [-0.2, 3.4, -3.0],
        name: "HIP 43103",
        type: "Orange Giant Star"
    },
    {
        coord: [0.1, 1.0, -2.0],
        name: "Asellus Borealis",
        type: "Blue Subgiant Star"
    },
    {
        coord: [0.01, -0.15, 0],
        name: "Asellus Australis",
        type: "Orange Giant Star"
    },
    {
        coord: [-1.2, -2.2, -2.0],
        name: "Acubens",
        type: "Multiple Star System"
    },
    {
        coord: [0.01, -0.15, 0],
        name: "Asellus Australis",
        type: "Orange Giant Star"
    },
    {
        coord: [2.25, -3.05, -3.0],
        name: "Altarf",
        type: "Orange Giant Star"
    }
];
var leo = [
    {
        coord: [4.05, 1.85, -1.0],
        name: "Ras Elased Australis",
        type: "Yellow Giant Star"
    },
    {
        coord: [3.5, 2.5, -0.5],
        name: "Ras Elased Borealis",
        type: "Orange Giant Star"
    },
    {
        coord: [1.95, 1.6, -1.0],
        name: "Adhafera",
        type: "Blue-White Giant Star"
    },
    {
        coord: [1.8, 0.5, -0.5],
        name: "Algiebra",
        type: "Binary Star System"
    },
    {
        coord: [4.25, -0.35, -4.0],
        name: "Eta Leonis",
        type: "White Supergiant Star"
    },
    {
        coord: [2.7, -1.8, 0],
        name: "Regulus",
        type: "Multiple Star System"
    },
    {
        coord: [-2.01, -0.8, -0.5],
        name: "Chertan",
        type: "Blue-White Subgiant Star"
    },
    {
        coord: [-2.0, 0.7, -0.2],
        name: "Zosma",
        type: "Blue-White Subgiant Star"
    },
    {
        coord: [-4.5, -0.9, 0],
        name: "Denebola",
        type: "Blue-White Subgiant Star"
    },
    {
        coord: [-2.01, -0.8, -0.5],
        name: "Chertan",
        type: "Blue-White Subgiant Star"
    }
];
var virgo = [
    {
        coord: [4.8, 0.7, -3.5],
        name: "Zavijava",
        type: "Yellow-White Dwarf Star"
    },
    {
        coord: [1.7, -0.5, -4.0],
        name: "Zaniah",
        type: "Triple Star System"
    },
    {
        coord: [0.15, -0.2, 0],
        name: "Porrima",
        type: "Binary Star System"
    },
    {
        coord: [-0.85, 1.15, -2.0],
        name: "Auva",
        type: "Red Giant Star"
    },
    {
        coord: [-1.3, 3.2, -1.0],
        name: "Vindemiatrix",
        type: "Yellow-White Giant Star"
    },
    {
        coord: [-0.85, 1.15, -2.0],
        name: "Auva",
        type: "Red Giant Star"
    },
    {
        coord: [0.15, -0.2, 0],
        name: "Porrima",
        type: "Binary Star System"
    },
    {
        coord: [-1.9, -1.3, -1.0],
        name: "unknown",
        type: "unknown"
    },
    {
        coord: [-3.65, 0.1, -0.5],
        name: "Heze",
        type: "Blue Subgiant Star"
    },
    {
        coord: [-1.9, -1.3, -1.0],
        name: "unknown",
        type: "unknown"
    },
    {
        coord: [-2.9, -2.9, -2.0],
        name: "Spica",
        type: "Blue Giant Star"
    },
];
var libra = [
    {
        coord: [1.45, -2.6, -3.0],
        name: "Brachium",
        type: "Red Giant Star"
    },
    {
        coord: [2.8, 1.3, 0],
        name: "Zuben Elgenubi",
        type: "Multiple Star System"
    },
    {
        coord: [0.2, 4.15, -2.0],
        name: "Zuben Elschemali",
        type: "Blue-White Dwarf Star"
    },
    {
        coord: [-1.6, 1.8, -2.5],
        name: "Zuben Elakrab",
        type: "Orange Giant Star"
    },
    {
        coord: [2.8, 1.3, 0],
        name: "Zuben Elgenubi",
        type: "Multiple Star System"
    },
    {
        coord: [-1.6, 1.8, -2.5],
        name: "Zuben Elakrab",
        type: "Orange Giant Star"
    },
    {
        coord: [-1.5, -3.85, -1.0],
        name: "Upsilon Librae",
        type: "Orange Giant Star"
    },
    {
        coord: [-1.65, -4.55, -1.0],
        name: "Tau Librae",
        type: "Blue-White Dwarf Star"
    }
];
var scorpius = [
    {
        coord: [-3.43, -2.0, -2.0],
        name: "Shaula",
        type: "Triple Star System"
    },
    {
        coord: [-3.9, -2.7, -1.5],
        name: "Girtab",
        type: "Binary Star System"
    },
    {
        coord: [-5.25, -4.2, -4.0],
        name: "Apollyon",
        type: "Yellow-White Supergiant Star"
    },
    {
        coord: [-3.4, -4.2, -1.0],
        name: "Sargas",
        type: "Yellow Giant Star"
    },
    {
        coord: [-1.65, -4.1, 0],
        name: "Eta Scorpii",
        type: "Yellow-White Subgiant Star"
    },
    {
        coord: [-0.45, -5.3, -4.0],
        name: "HIP 8267",
        type: "Blue Subgiant Star"
    },
    {
        coord: [-0.3, -2.1, -1.5],
        name: "Mu-1 Scorpii",
        type: "Binary Star System"
    },
    {
        coord: [-0.15, -0.7, 0],
        name: "Wei",
        type: "Orange Giant Star"
    },
    {
        coord: [1.0, 1.6, -1.5],
        name: "Alniyat",
        type: "Blue Subgiant Star"
    },
    {
        coord: [1.6, 2.2, -2.0],
        name: "Antares",
        type: "Red Supergiant Star"
    },
    {
        coord: [2.3, 2.5, -2.0],
        name: "Alniyat",
        type: "Multiple Star System"
    },
    {
        coord: [3.8, 4.9, -2.5],
        name: "Acrab",
        type: "Binary Star System"
    },
    {
        coord: [2.3, 2.5, -2.0],
        name: "Alniyat",
        type: "Multiple Star System"
    },
    {
        coord: [4.2, 3.5, -2.0],
        name: "Dschubba",
        type: "Binary Star System"
    },
    {
        coord: [2.3, 2.5, -2.0],
        name: "Alniyat",
        type: "Multiple Star System"
    },
    {
        coord: [4.19, 2.2, -1.5],
        name: "Pi Scorpii",
        type: "Triple Star System"
    }
];
var sagittarius = [
    {
        coord: [2.3, -4.3, -0.5],
        name: "Sephdar",
        type: "Binary Star System"
    },
    {
        coord: [1.7, -3.25, -0.5],
        name: "Kaus Australis",
        type: "Binary Star System"
    },
    {
        coord: [2.1, -1.15, -1.5],
        name: "Kaus Media",
        type: "Double Star"
    },
    {
        coord: [3.55, -1.45, 0],
        name: "Alnasl",
        type: "Orange Giant Star"
    },
    {
        coord: [2.1, -1.15, -1.5],
        name: "Kaus Media",
        type: "Double Star"
    },
    {
        coord: [1.4, 0.9, 0],
        name: "Kaus Borealis",
        type: "Orange Giant Star"
    },
    {
        coord: [5.0, 4.0, -4.0],
        name: "Polis",
        type: "Multiple Star system"
    },
    {
        coord: [1.4, 0.9, 0],
        name: "Kaus Borealis",
        type: "Orange Giant Star"
    },
    {
        coord: [-0.4, 0.15, -1.0],
        name: "Phi Sagittarii",
        type: "Blue Giant Star"
    },
    {
        coord: [-1.4, 0.4, -1.0],
        name: "Nunki",
        type: "Blue Subgiant Star"
    },
    {
        coord: [-2.55, -0.3, -0.5],
        name: "Tau Sagittarii",
        type: "Orange Giant Star"
    },
    {
        coord: [-2.05, -1.3, 0],
        name: "Ascella",
        type: "Binary Star System"
    },
    {
        coord: [-2.55, -0.3, -0.5],
        name: "Tau Sagittarii",
        type: "Orange Giant Star"
    },
    {
        coord: [-1.4, 0.4, -1.0],
        name: "Nunki",
        type: "Blue Subgiant Star"
    },
    {
        coord: [-2.5, 2.4, -0.5],
        name: "Omicron Sagittarii",
        type: "Binary Star System"
    },
    {
        coord: [-3.7, 3.5, -2.0],
        name: "Albaldah",
        type: "Triple Star System"
    },
    {
        coord: [-4.45, 4.1, -0.5],
        name: "Rho-1 Sagittarii",
        type: "Blue-White Subgiant Star"
    }
];

// add all constellations as objects into one array
var constellations = [
    {constName: "capricornus", data: capricornus, distance: 39},
    {constName: "aquarius", data: aquarius, distance: 158},
    {constName:"pisces", data: pisces, distance: 294},
    {constName:"aries", data: aries, distance: 776},
    {constName:"taurus", data: taurus, distance: 490},
    {constName:"gemini", data: gemini, distance: 550},
    {constName:"cancer", data: cancer, distance: 590},
    {constName:"leo", data: leo, distance: 247},
    {constName:"virgo", data: virgo, distance: 260},
    {constName:"libra", data: libra, distance: 85},
    {constName:"scorpius", data: scorpius, distance: 437},
    {constName:"sagittarius", data: sagittarius, distance: 143}
];    

var container = document.getElementById( 'canvas' );
var modelName = document.querySelector( '.model-name' );
let button = document.getElementsByClassName( 'graphic-button' );

// init( );
reset ( );
buttons( );

function reset ( ) {
    let instructions = `<ol>
            <li>Click on constellation buttons above to select a model.</li>
            <li>Rotate it by using your mouse/trackpad/fingers to view it in 3D.</li>
            <li>Click on any star to learn more.</li>
            <li>Enjoy!</li>
        </ol>`;

    let instructionsHeading = `Instr<span class="sub-cursive-size lowercase heading-cursive">uctions</span>`

    container.innerHTML = instructions;
    modelName.innerHTML = instructionsHeading;
    
    document.getElementById( 'reset' ).addEventListener( 'click' , reset, false);
}

// create function to set the scene with renderer, camera and interactive controls
function init ( ) {
    // init container
    container.innerHTML = "";
    parent = document.getElementById( 'model-container' );
    parent.appendChild( container );

    // init renderer
    renderer = new THREE.WebGLRenderer( {antialias: true, alpha: true} );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( container.clientWidth, container.clientHeight );
    container.appendChild( renderer.domElement );

    // init raycaster 
    raycaster = new THREE.Raycaster();

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

    window.addEventListener( 'resize', onWindowResize, false );
    window.addEventListener( 'mousemove', raycast, false );
    container.addEventListener( 'click', starDisplay, false );
    container.addEventListener( 'touchstart', onMobileTouch, false );
}

// function to implement button functionality
function buttons( ){
    for( let i = 0; i < button.length; i++ ){
        button[i].addEventListener( "click",function( ){
            init();
            //remove previous constellations objects to have a space for new ones
            while ( scene.children.length > 0 ) {
                scene.remove( scene.children[0] );
            }

            constellationName = constellations[i].constName
            constellationData = constellations[i].data;
            constellationDistance = constellations[i].distance;

            createConstellation( constellationData );
            animate( );
            capitalizeConstName( constellationName );
            constDistance( constellationDistance );
        });
    }
}


// function to create constellations with spheres, lines and points
function createConstellation( constellationData ) {
    // add white light
    var light = new THREE.AmbientLight( 0xffffff, 0.7 );
    scene.add( light );

    // create an array for constellation coordinates to be adde
    var constellation = [ ];

    // iterate through coordinates and add do the array, create sphere at these coordinates
    for( let i = 0; i < constellationData.length; i ++ ) {
        constellation.push( new THREE.Vector3( constellationData[i].coord[0], constellationData[i].coord[1], constellationData[i].coord[2] ) );
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

// On window resize this function renders the model again
function onWindowResize( ){
    renderer.setSize( container.clientWidth, container.clientHeight );
    camera.aspect = 1;
    camera.updateProjectionMatrix( );
} 

// Function to capitalize the first letter of a constellation name and display it when a graphic button is clicked
function capitalizeConstName ( constName ) {
    let firstLetter = constName.slice( 0, 1 );
    let capFirstLetter = firstLetter.toUpperCase( );
    let capName = capFirstLetter + constName.slice( 1, constName.length );

    document.getElementById( 'star-constellation' ).innerText = capName;
}

// Function to update the constellation distance from earth 
function constDistance ( constDist ) {
    let distance = `${constDist} Light-Years*`

    document.getElementById( 'constellation-distance' ).innerText = distance;
}

// initialise normalized coordinates on click or hover for a mouse
function normSetup ( event ){
    // get normalized mouse coordinates and get objects that are rendered
    mouse.x = ( event.offsetX / container.clientWidth ) * 2 - 1;
    mouse.y = - ( event.offsetY / container.clientHeight ) * 2 + 1;

    raycasterSetup( mouse );
}

// initialise normalized coordinates on touch for a mobile device
function normSetupMobile ( event ) {
    // prevents scrolling
    event.preventDefault();
    // get normalized coordinates
    const rect = canvas.getBoundingClientRect();
    let pos =  {
        x: (event.touches[0].clientX - rect.left) * container.offsetWidth  / rect.width,
        y: (event.touches[0].clientY - rect.top) * container.offsetHeight  / rect.height,
    };
    mouse.x = (pos.x / container.offsetWidth ) *  2 - 1;
    mouse.y = (pos.y / container.offsetHeight) * -2 + 1;

    raycasterSetup( mouse );
}

// setup clicked/touched coordinates and scene object coordinates that have been intersected
function raycasterSetup ( mouse ) {
    raycaster.setFromCamera( mouse, camera );
    intersects = raycaster.intersectObjects( scene.children );
}

// compare the mouse coordinates with the object coordinates and change brightness if the correct object intersected
function starBrightness( ) {
    for( let i = 0; i < intersects.length; i++ ){
        if ( intersects[i].object.position.x !== 0 ) {
            if ( INTERSECTED != intersects[i].object ) {
                if ( INTERSECTED ) {
                    INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
                }
                INTERSECTED = intersects[i].object;
                INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex( );
                intersects[i].object.material.emissive.setHex( 0xffffd6 );
            } 
        }
    }
}

// change star data in the container depending which star has been clicked
function starData( ) {
    for( let i = 0; i < intersects.length; i++ ){
        if ( intersects[i].object.type == "Mesh" ) {
            let position = intersects[i].object.position.x;
            for( let i = 0; i < constellationData.length; i++ ){
                if ( constellationData[i].coord[0] == position ) {
                    document.getElementById( 'star-name' ).innerText = constellationData[i].name;
                    document.getElementById( 'star-type' ).innerText = constellationData[i].type;
                }
            }
        }
    }
}


function raycast( event ){
    normSetup( event );
    starBrightness( );
}

function starDisplay( event ) {
    normSetup( event );
    starData( );
}

function onMobileTouch( event ) {
    normSetupMobile( event );
    starBrightness( );
    starData( );
}




