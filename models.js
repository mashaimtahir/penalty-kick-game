import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

export function loadGoalieModel(scene) {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/');

    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);

    let goalieMixer;
    gltfLoader.load(
        'goalie.glb',
        function (gltf) {
            goalieModel = gltf.scene;
goalieModel.scale.set(3.2, 3, 3); // Adjust scale if needed
goalieModel.position.set(0, 0, 0); // Move behind the goal
goalieModel.traverse((child) => {
    if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
    }
});
scene.add(goalieModel);


            // Manually set goalie bounding box coordinates
            goalieBoundingBox = new THREE.Box3(
                new THREE.Vector3(-2, -2, -2), // Min coordinates
                new THREE.Vector3(2, 6, 2) // Max coordinates
            );
            drawBoundingBox(goalieBoundingBox, 0x00ff00);  // Green for goalie

            goalieMixer = new THREE.AnimationMixer(goalieModel);
        
            goalieModel.traverse((child) => {
    if (child.isMesh) {
        // Make sure that the material is not black or has any unwanted properties
        if (child.material) {
            child.material.needsUpdate = true;
            child.material.color.set(0xffffff);  // Set to white to avoid it being black
            child.material.metalness = 0.0;      // If metallic, set to 0
            child.material.roughness = 0.5;      // Adjust roughness to see if it helps
            if (child.material.map) {
                child.material.map.encoding = THREE.sRGBEncoding;  // Ensure textures are correctly encoded
            }
        }
    }
});
        },
        undefined,
        function (error) {
            console.error('An error occurred with the goalie model:', error);
        }
    );
}
