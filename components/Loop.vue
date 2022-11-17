<script setup lang="ts">
import { Mesh, SphereGeometry, PerspectiveCamera, Scene, WebGLRenderer, MeshToonMaterial, AmbientLight, DirectionalLight } from 'three'
import { onMounted, onUnmounted, Ref, ref } from 'vue';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const experience: Ref<WebGLRenderer | null> = ref(null)
let renderer: WebGLRenderer
let controls: OrbitControls

const sphere = new Mesh(
  // Geometry
  new SphereGeometry(1, 32, 32), 
  // Material
  new MeshToonMaterial({ 
    color: 0x008080 
  }) 
)

const aspectRatio = 
 800 / 
  500

const camera = 
  new PerspectiveCamera(
    45, // FOV
    aspectRatio, // Aspect ratio
    0.1, // Near plane
    1000 // Far plane
)

camera.position.set(0, 4, 0)

const scene = new Scene()

// Adding our camera to the scene
scene.add(camera)

// Adding the sphere
scene.add(sphere)

const ambientLight = new AmbientLight(0xffffff, 0.75) 

scene.add(ambientLight) 

const directionalLight = new DirectionalLight(0xffffff, 0.3)

directionalLight.position.set(3,4,0)

scene.add(directionalLight)

const loop = () => {
    controls.update()

    sphere.position.x += 0.01
    renderer.render(scene, camera)
    requestAnimationFrame(loop)
}

onMounted(() => {
  if (experience.value && !renderer) {
    renderer = new WebGLRenderer({ antialias: true,  canvas: experience.value })
    renderer.setSize(800, 500)

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