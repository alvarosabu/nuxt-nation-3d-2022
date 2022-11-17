<script setup lang="ts">
import { Mesh, SphereGeometry, PerspectiveCamera, Scene, WebGLRenderer, MeshToonMaterial, AmbientLight, DirectionalLight, Color, Fog } from 'three'
import { onMounted, onUnmounted, Ref, ref } from 'vue';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { useModel } from '../composables/useModel';

const experience: Ref<WebGLRenderer | null> = ref(null)
let renderer: WebGLRenderer
let controls: OrbitControls


const scene = new Scene()

const bgColor = new Color('#E1F0C2');
// Fog
scene.fog = new Fog(bgColor, 0.1, 75);
scene.background = bgColor;


const aspectRatio = 
 800 / 
  400

const camera = 
  new PerspectiveCamera(
    45, // FOV
    aspectRatio, // Aspect ratio
    0.1, // Near plane
    1000 // Far plane
)

camera.position.set(1, 2, 3)


// Adding our camera to the scene
scene.add(camera)


const ambientLight = new AmbientLight(0xffffff, 0.75) 

scene.add(ambientLight) 

const directionalLight = new DirectionalLight(0xffffff, 0.3)

directionalLight.position.set(3,4,0)

scene.add(directionalLight)

// Model
const { loadModel } = useModel();

const cat = await loadModel('/models/nuxt-mascot-better/nuxt-mascot.gltf');


if (cat) {
  scene.add(cat as Object3D<Event>);
    cat.position.set(0, -1.25, 0);
}

const loop = () => {
    controls.update()

    renderer.render(scene, camera)
    requestAnimationFrame(loop)
}

onMounted(() => {
  if (experience.value && !renderer) {
    renderer = new WebGLRenderer({ antialias: true,  canvas: experience.value })
    renderer.setSize(800, 400)

    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    renderer.render(scene, camera)

    loop()
  }
})

onUnmounted(() => {
  if (renderer) {
    renderer.dispose()
  }
})

</script>
<template>
<div>
    <canvas ref="experience"></canvas>
</div>
</template>