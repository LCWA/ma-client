import React, { Component } from 'react';
//import { THREE } from "three/build/three.js"
import ReactDOM from "react-dom";
import * as THREE from "three";
//import {OrbitControls} from "three/examples/js/controls/OrbitControls";
import OrbitControls from 'orbit-controls-es6';

class Spinning extends Component {
    componentDidMount() {

                var scene = new THREE.Scene();
                var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

                var renderer = new THREE.WebGLRenderer();
                renderer.setSize(window.innerWidth, window.innerHeight);
                //document.body.appendChild(renderer.domElement);
                this.mount.appendChild( renderer.domElement );
                window.addEventListener('resize', function(){

                    var width = window.innerHeight;
                    var height = window.innerHeight;

                    renderer.setSize(width, height);
                    camera.aspect = width/height;
                    camera.updateProjectionMatrix();
                });

                //var controls = new THREE.OrbitControls(camera, renderer.domElement);

                //const controls = new OrbitControls(camera, renderer.domElement);
                this.controls = new OrbitControls(camera, renderer.domElement);
                var geometry = new THREE.SphereGeometry( 1, 8, 8 );
                var material = new THREE.MeshBasicMaterial( {color: 0x00ff00, wireframe: true} );
                var sphere = new THREE.Mesh( geometry, material );
                scene.add( sphere );
                
                camera.position.z = 1;

                var update = function(){
                    sphere.rotation.x += 0.01;
                    sphere.rotation.y += 0.0005;
                };

                var render = function(){
                    renderer.render(scene, camera);
                }

                var GameLoop = function(){
                    requestAnimationFrame(GameLoop);

                    update();
                    render();
                };

                GameLoop();
            }
            render() {
                return (
                  <div ref={ref => (this.mount = ref)} />
                )
            }
        
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Spinning/>, rootElement);
export default Spinning;
