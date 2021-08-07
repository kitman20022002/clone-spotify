import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import musicObj from '../../assets/musicNote.obj';
import './Testing.css';

function Testing() {
  useEffect(() => {
    // === THREE.JS CODE START ===
    const scene = new THREE.Scene();
    const loader = new OBJLoader();
    const group = new THREE.Object3D();
    let v = '';
    const center = {};
    // const color= {'ff760f': 1,'009D64':1,'6319FF': 1 }
    // getRandomInt
    // scene.background = new THREE.Color('#E1A7C3');
    loader.load(
      // resource URL
      musicObj,
      // called when resource is loaded
      (object) => {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < 6; i++) {
          let col = 0x111111;
          if (i === 1) {
            col = 0xff760f;
          }
          if (i === 2) {
            col = 0x009D64;
          }
          if (i === 3) {
            col = 0x6319FF;
          }
          const material = new THREE.MeshPhongMaterial({
            color: col,
            shininess: 100,
          });
          // eslint-disable-next-line no-param-reassign,max-len
          const instance = object.clone();
          instance.children[0].material = material;
          instance.scale.set(2, 2, 2);
          instance.position.x = Math.floor(Math.random() * 51) - 50;
          instance.position.y = Math.floor(Math.random() * 41) - 40;
          instance.position.z = Math.floor(Math.random() * 51) - 50;
          instance.rotation.x = Math.floor(Math.random() * 361) - 360;
          instance.rotation.y = Math.floor(Math.random() * 361) - 360;
          instance.rotation.z = Math.floor(Math.random() * 361) - 360;
          const s = Math.floor(Math.random() * 5) + 1;
          instance.scale.x = s;
          instance.scale.y = s;
          instance.scale.z = s;
          v = object;
          group.add(instance);
        }
        center.x = 0;
        center.y = 0;
        center.z = 0;
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < group.children.length; i++) {
          center.x += group.children[i].position.x;
          center.y += group.children[i].position.y;
          center.z += group.children[i].position.z;
        }
        center.x /= group.children.length;
        center.y /= group.children.length;
        center.z /= group.children.length;
        console.log(center, group, group.children[0].position);
      },

      // called when loading is in progresses
      (xhr) => {
        // eslint-disable-next-line no-mixed-operators
        console.log(`${xhr.loaded / xhr.total * 100}% loaded`);
      },
      // called when loading has errors
      // eslint-disable-next-line no-unused-vars
      (error) => {
        console.log('An error happened', error);
      },
    );

    scene.add(group);

    const ca = document.getElementById('canvas_player');
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(0, 10, 5);
    light.target.position.set(-5, 0, 0);
    scene.add(light);
    scene.add(light.target);
    // eslint-disable-next-line max-len,no-mixed-operators
    const camera = new THREE.PerspectiveCamera(75, ca.offsetWidth / (402), 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(ca.offsetWidth, 402);

    const node = ca.appendChild(renderer.domElement);
    node.className = 'Testing';

    camera.position.y = 10;
    let pp = 0;
    const animate = function () {
      requestAnimationFrame(animate);
      // v.rotation.x += 0.01;
      if (v) {
        pp += 0.001;
        // v.rotation.y += 1000.05;
        // v.position.y = 4 + Math.cos(v.rotation.y);

        camera.position.x = (center.x + 30 * Math.sin(pp));
        camera.position.y = center.y > 0 ? center.y + 20 : center.y + 20;
        camera.position.z = (center.z + 30 * Math.cos(pp));
        camera.lookAt(center.x, center.y, center.z);
      }

      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return (
    <div className="Testing" />
  );
}

export default Testing;
