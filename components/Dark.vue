<script setup lang="ts">
import { Mesh, SphereGeometry, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { onMounted, onUnmounted, Ref, ref, watchEffect } from 'vue';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const experience: Ref<WebGLRenderer | null> = ref(null)
let renderer: WebGLRenderer
let controls: OrbitControls

const sphere = new Mesh(
  // Geometry
  new SphereGeometry(1, 32, 32), 
  // Material
  new MeshBasicMaterial({ 
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

camera.position.set(4, 4, 4)

const scene = new Scene()

// Adding our camera to the scene
scene.add(camera)

// Adding the sphere
/* scene.add(sphere) */

const loop = () => {
    controls.update()
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