import React, { Component } from "react";
import * as THREE from "three";
import OrbitControls from "orbit-controls-es6";

class Spinning extends Component {
  componentDidMount() {
    const fov = 75;
    const aspect = 2; // the canvas default
    const near = 0.1;
    const far = 1000;
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    var renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    this.mount.appendChild(renderer.domElement);
    window.addEventListener("resize", function () {
      var width = window.innerHeight;
      var height = window.innerHeight;

      renderer.setSize(width / 2, height / 2);
      camera.position.set(-1, -1, -1);
      camera.updateProjectionMatrix();
    });
    this.controls = new OrbitControls(camera, renderer.domElement);
    this.controls.minDistance = 1.7;
    this.controls.maxDistance = 3;

    const boxWidth = 1;
    const boxHeight = 8;
    const boxDepth = 8;
    var geometry = new THREE.SphereGeometry(boxWidth, boxHeight, boxDepth);
    var material = new THREE.MeshBasicMaterial({
      color: 0xff6602,
      wireframe: true,
    });

    var sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.z = 2;

    var update = function () {
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.0005;
    };

    var render = function () {
      renderer.render(scene, camera);
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    };

    var GameLoop = function () {
      requestAnimationFrame(GameLoop);

      update();
      render();
    };

    GameLoop();
  }
  render() {
    return (
      <div className="spinning-animation" ref={(ref) => (this.mount = ref)} />
    );
  }
}

export default Spinning;
