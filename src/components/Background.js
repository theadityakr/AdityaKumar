import { useEffect } from "react";
import * as THREE from 'three';
import { OrbitControls} from  'three/examples/jsm/controls/OrbitControls';
import Theme from "./Theme";

const Background = () => {

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(100,window.innerWidth/window.innerHeight,0.1,100);
        const renderer = new THREE.WebGL1Renderer({
            antialias: true,
            canvas: document.querySelector('#BackgroundCanvas'),
        });
        renderer.render(scene,camera);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth,window.innerHeight);
        camera.position.setZ(10);
        camera.position.setX(15);
        
        const geometry = new THREE.SphereGeometry(15, 64, 32,100)
        const material = new THREE.MeshBasicMaterial({color:0xffffff});
        const sphere = new THREE.Mesh(geometry,material);

        scene.add(sphere);

        const light = new THREE.AmbientLight(0xffffff);
        light.position.set(20,20,20);
        scene.add(light)

        const lightHelper  =  new THREE.PointLightHelper(light);
        const gridHelper = new THREE.GridHelper(200,50)
        scene.add(lightHelper,gridHelper)
        
        const controls = new OrbitControls(camera,renderer.domElement)

        function animate() {
            requestAnimationFrame(animate);
            // sphere.rotation.x +=0.01;
            // sphere.rotation.y +=0.005;
            // sphere.rotation.z +=0.01;
            
            controls.update();
            renderer.render(scene,camera);
        }
        animate()
    });
    return (
        <div id = 'Background'>
            <canvas id='BackgroundCanvas' ></canvas>
        </div>
            
    );
};

export default Background;