import * as THREE from '/build/three.module.js';
import {OrbitControls} from '/jsm/controls/OrbitControls.js';
let camera, scene, renderer, sphere, sphere1, sphere2, sphere3, sphere4, sphere5, orbit1, orbit2, cube, cube1, cube2, cube3, cube4, controls;

// function init() {
    scene = new THREE.Scene();


    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    controls = new OrbitControls(camera, renderer.domElement);

   

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const texture = new THREE.TextureLoader().load('textures/hydrogen.png');
    const material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide} );
    
    cube = new THREE.Mesh( geometry, material );
    cube.position.set(-15.5, 1, 0);

    scene.add( cube );

    
    const texture1 = new THREE.TextureLoader().load('textures/helium.png');
    const material1 = new THREE.MeshBasicMaterial( {map: texture1} );
    cube1 = new THREE.Mesh( geometry, material1 );
    cube1.position.set(-10.5, 1, 0)
//mesh to create a cube 
    scene.add( cube1 );

    const texture2 = new THREE.TextureLoader().load('textures/lithium.png');
    const material2 = new THREE.MeshBasicMaterial( {map: texture2} );
    cube2 = new THREE.Mesh( geometry, material2 );
    cube2.position.set(-15.5, 0, 0);
//mesh to create a cube 
    scene.add( cube2 );

   
    const texture3 = new THREE.TextureLoader().load('textures/beryllium.png');
    const material3 = new THREE.MeshBasicMaterial( {map: texture3} );
    cube3 = new THREE.Mesh( geometry, material3 );
    cube3.position.set(-14.5, 0, 0);
//mesh to create a cube 
    scene.add( cube3 );

    
    const texture4 = new THREE.TextureLoader().load('textures/boron.png');
    const material4 = new THREE.MeshBasicMaterial( {map: texture4} );
    cube4 = new THREE.Mesh( geometry, material4 );
    cube4.position.set(-13.5, 0 ,0);
//mesh to create a cube 
    scene.add( cube4 );

    

    camera.position.z = 15;
    
// }

function hydrogen() {
    scene.clear();
    scene.add( cube );
    scene.add( cube1 );
    scene.add( cube2 );
    scene.add( cube3 );
    scene.add( cube4 );
    element();
    const geometryh1 = new THREE.RingGeometry( 5, 5.1, 32 );
    const materialh1 = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
    orbit1 = new THREE.Mesh( geometryh1, materialh1 );
    
    const geometryh = new THREE.SphereGeometry( 2, 100, 100 );
    const textureh = new THREE.TextureLoader().load('textures/red.jpg');
    const materialh = new THREE.MeshBasicMaterial( {map: textureh} );
    // const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    sphere = new THREE.Mesh( geometryh, materialh );

    const geometryh2 = new THREE.SphereGeometry( 1, 80, 100 );
    const textureh2 = new THREE.TextureLoader().load('textures/grey.jpg');
    const materialh2 = new THREE.MeshBasicMaterial( {map: textureh2} );
    // const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    sphere1 = new THREE.Mesh( geometryh2, materialh2 );
    sphere1.position.set(-4.5, 1, 0);

    

    const group = new THREE.Group();
    group.add(sphere);
    group.add(sphere1);
   
    group.add(orbit1);
    


    scene.add( group );

    camera.position.z = 20;
  
    
}

function helium() {
    scene.clear();
    scene.add( cube );
    scene.add( cube1 );
    scene.add( cube2 );
    scene.add( cube3 );
    scene.add( cube4 );
    element();

    const geometry1 = new THREE.RingGeometry( 5, 5.1, 32 );
    const material1 = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
    orbit1 = new THREE.Mesh( geometry1, material1 );
    

    const geometry = new THREE.SphereGeometry( 2, 100, 100 );
    const texture = new THREE.TextureLoader().load('textures/red.jpg');
    const material = new THREE.MeshBasicMaterial( {map: texture} );
    // const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    sphere = new THREE.Mesh( geometry, material );

    const geometry2 = new THREE.SphereGeometry( 1, 80, 100 );
    const texture2 = new THREE.TextureLoader().load('textures/grey.jpg');
    const material2 = new THREE.MeshBasicMaterial( {map: texture2} );
    // const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    sphere1 = new THREE.Mesh( geometry2, material2 );
    sphere1.position.set(-4.5, 1, 0);

    sphere2 = new THREE.Mesh( geometry2, material2 );
    sphere2.position.set(4, 0, 4);

    const group = new THREE.Group();
    group.add(sphere);
    group.add(sphere1);
    group.add(sphere2);
    
    group.add(orbit1);
    


    scene.add( group );
    // element();

    camera.position.z = 20;
}

function lithium() {
    scene.clear();
    scene.add( cube );
    scene.add( cube1 );
    scene.add( cube2 );
    scene.add( cube3 );
    scene.add( cube4 );
    element();

    const geometry1 = new THREE.RingGeometry( 5, 5.1, 32 );
    const material1 = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
    orbit1 = new THREE.Mesh( geometry1, material1 );
   

    const geometry3 = new THREE.RingGeometry( 8, 8.1, 32 );
    const material3 = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
    orbit2 = new THREE.Mesh( geometry3, material3 );
    

    const geometry = new THREE.SphereGeometry( 2, 100, 100 );
    const texture = new THREE.TextureLoader().load('textures/red.jpg');
    const material = new THREE.MeshBasicMaterial( {map: texture} );
    // const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    sphere = new THREE.Mesh( geometry, material );

    const geometry2 = new THREE.SphereGeometry( 1, 80, 100 );
    const texture2 = new THREE.TextureLoader().load('textures/grey.jpg');
    const material2 = new THREE.MeshBasicMaterial( {map: texture2} );
    // const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    sphere1 = new THREE.Mesh( geometry2, material2 );
    sphere1.position.set(-4, 0, 4);

    sphere2 = new THREE.Mesh( geometry2, material2 );
    sphere2.position.set(4, 0, 4);

    const geometry4 = new THREE.SphereGeometry( 0.8, 80, 100 );
    const texture4 = new THREE.TextureLoader().load('textures/grey.jpg');
    const material4 = new THREE.MeshBasicMaterial( {map: texture4} );
    sphere3 = new THREE.Mesh( geometry4, material4 );
    sphere3.position.set(0, 5.8, 5.8);

    
    const group = new THREE.Group();
    group.add(sphere);
    group.add(sphere1);
    group.add(sphere2);
    group.add(sphere3);
   
    group.add(orbit1);
    group.add(orbit2);


    scene.add( group );

    camera.position.z = 20;
}

function beryllium() {
    scene.clear();
    scene.add( cube );
    scene.add( cube1 );
    scene.add( cube2 );
    scene.add( cube3 );
    scene.add( cube4 );
    element();
    const geometry1 = new THREE.RingGeometry( 5, 5.1, 32 );
    const material1 = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
    orbit1 = new THREE.Mesh( geometry1, material1 );
    

    const geometry3 = new THREE.RingGeometry( 8, 8.1, 32 );
    const material3 = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
    orbit2 = new THREE.Mesh( geometry3, material3 );
   
   

    const geometry = new THREE.SphereGeometry( 2, 100, 100 );
    const texture = new THREE.TextureLoader().load('textures/red.jpg');
    const material = new THREE.MeshBasicMaterial( {map: texture} );
    // const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    sphere = new THREE.Mesh( geometry, material );

    const geometry2 = new THREE.SphereGeometry( 1, 80, 100 );
    const texture2 = new THREE.TextureLoader().load('textures/grey.jpg');
    const material2 = new THREE.MeshBasicMaterial( {map: texture2} );
    // const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    sphere1 = new THREE.Mesh( geometry2, material2 );
    sphere1.position.set(-4, 0, 4);

    sphere2 = new THREE.Mesh( geometry2, material2 );
    sphere2.position.set(4, 0, 4);

    const geometry4 = new THREE.SphereGeometry( 0.8, 80, 100 );
    const texture4 = new THREE.TextureLoader().load('textures/grey.jpg');
    const material4 = new THREE.MeshBasicMaterial( {map: texture4} );
    sphere3 = new THREE.Mesh( geometry4, material4 );
    sphere3.position.set(0, 5.8, 5.8);

    sphere4 = new THREE.Mesh( geometry4, material4 );
    sphere4.position.set(0, -5.8, 5.8);

    
    const group = new THREE.Group();
    group.add(sphere);
    group.add(sphere1);
    group.add(sphere2);
    group.add(sphere3);
    group.add(sphere4);
    group.add(orbit1);
    group.add(orbit2);


    scene.add( group );

    camera.position.z = 20;
}

function boron() {
    scene.clear();
    scene.add( cube );
    scene.add( cube1 );
    scene.add( cube2 );
    scene.add( cube3 );
    scene.add( cube4 );
    element();
    const geometry1 = new THREE.RingGeometry( 5, 5.1, 32 );
    const material1 = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
    orbit1 = new THREE.Mesh( geometry1, material1 );
    

    const geometry3 = new THREE.RingGeometry( 8, 8.1, 32 );
    const material3 = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
    orbit2 = new THREE.Mesh( geometry3, material3 );
    

    const geometry = new THREE.SphereGeometry( 2, 100, 100 );
    const texture = new THREE.TextureLoader().load('textures/red.jpg');
    const material = new THREE.MeshBasicMaterial( {map: texture} );
    // const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    sphere = new THREE.Mesh( geometry, material );

    const geometry2 = new THREE.SphereGeometry( 1, 80, 100 );
    const texture2 = new THREE.TextureLoader().load('textures/grey.jpg');
    const material2 = new THREE.MeshBasicMaterial( {map: texture2} );
    // const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    sphere1 = new THREE.Mesh( geometry2, material2 );
    sphere1.position.set(-4, 0, 4);

    sphere2 = new THREE.Mesh( geometry2, material2 );
    sphere2.position.set(4, 0, 4);

    const geometry4 = new THREE.SphereGeometry( 0.8, 80, 100 );
    const texture4 = new THREE.TextureLoader().load('textures/grey.jpg');
    const material4 = new THREE.MeshBasicMaterial( {map: texture4} );
    sphere3 = new THREE.Mesh( geometry4, material4 );
    sphere3.position.set(0, 5.8, 5.8);

    sphere4 = new THREE.Mesh( geometry4, material4 );
    sphere4.position.set(0, -5.8, 5.8);

    sphere5 = new THREE.Mesh( geometry4, material4 );
    sphere5.position.set(6, 0, 6);

   
    const group = new THREE.Group();
    group.add(sphere);
    group.add(sphere1);
    group.add(sphere2);
    group.add(sphere3);
    group.add(sphere4);
    group.add(sphere5);
    group.add(orbit1);
    group.add(orbit2);


    scene.add( group );

    camera.position.z = 20;
}


function element(){
    // requestAnimationFrame(element);
    camera.rotation.z += 0.05;
    // renderer.render(scene,camera);
}

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseMove(event) {

  // calculate mouse position in normalized device coordinates
  // (-1 to +1) for both components

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

}
window.addEventListener('click', onMouseMove, false);



// window.addEventListener( 'click', function(){alert("hello");}, false);


function animate(){
    requestAnimationFrame(animate);
    // camera.rotation.z += 0.05;
    raycaster.setFromCamera( mouse, camera );
    // calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects( scene.children );
    //console.log(intersects);
    if (intersects[0]){
        console.log(intersects[0].object.geometry.id);
        if (intersects[0].object.geometry.id == '14') {
            
          console.log('Hydrogen');
          hydrogen();
        }
        else if (intersects[0].object.geometry.id == '4') {
          console.log(intersects[0].object.geometry.id);
          console.log('helium');
          helium();
        }
        else if (intersects[0].object.geometry.id == '6') {
          console.log('lithium');
          lithium();
        }
        else if (intersects[0].object.geometry.id == '8') {
          console.log('beryllium');
          beryllium();
        }
        else if (intersects[0].object.geometry.id == '10') {
          console.log('boron');
          boron();
        }
        else {
          controls.update();
        }
    }
    
    renderer.render(scene,camera);
}
window.addEventListener('click', onMouseMove, false);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  
  
  
  window.addEventListener('resize', onWindowResize, false);

animate();
