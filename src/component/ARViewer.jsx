import React, { useEffect } from "react";
import * as THREE from "three";


export const ARViewer = () => {
 useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(300, 300);
    document.getElementById("three-container").appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: "#4F46E5" });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(2, 2, 5);
    scene.add(light);

    camera.position.z = 3;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      document.getElementById("three-container").innerHTML = "";
    };
  }, []);

  return (
    <div className="flex flex-col items-center mt-6">
      <div id="three-container"></div>
      <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg mt-4">
        Buy Now
      </button>
    </div>
  );
}

