import React, { Component } from "react";
import * as THREE from "three";
import OrbitControls from "orbit-controls-es6";

class Spinning extends Component {
  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    var renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    this.mount.appendChild(renderer.domElement);
    window.addEventListener("resize", function() {
      var width = window.innerHeight;
      var height = window.innerHeight;

      renderer.setSize(width / 2, height / 2);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });
    this.controls = new OrbitControls(camera, renderer.domElement);
    var geometry = new THREE.SphereGeometry(1, 8, 8);
    var material = new THREE.MeshBasicMaterial({
      color: 0xff6602,
      wireframe: true
    });
    var sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 1;

    var update = function() {
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.0005;
    };

    var render = function() {
      renderer.render(scene, camera);
    };

    var GameLoop = function() {
      requestAnimationFrame(GameLoop);

      update();
      render();
    };

    GameLoop();
  }
  render() {
    return (
      <div className="spinning-animation" ref={ref => (this.mount = ref)} />
    );
  }
}

export default Spinning;
