<script setup lang="ts">
import { AmbientLight, PerspectiveCamera, Scene, WebGLRenderer, Camera, RectAreaLight, Color, Fog, Mesh, MeshBasicMaterial, ACESFilmicToneMapping, sRGBEncoding, MeshStandardMaterial, MeshToonMaterial, DirectionalLight } from 'three'
import { onMounted, onUnmounted, Ref, ref } from 'vue';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'

const experience: Ref<WebGLRenderer | null> = ref(null)
let renderer: WebGLRenderer
let controls: OrbitControls

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

camera.position.set(1.5, 0.88, 2.38)
camera.aspect = aspectRatio
camera.updateProjectionMatrix()
camera.lookAt(0, 0, 0)

const scene = new Scene()

const bgColor = new Color('#192129')
// Fog
scene.fog = new Fog(bgColor, 0.1, 75)
scene.background = bgColor

// Lights
const ambientLight = new AmbientLight(0xffffff, 0.75) 

scene.add(ambientLight) 

const directionalLight = new DirectionalLight(0xffffff, 0.3)

directionalLight.position.set(-20, 100, 50)

scene.add(directionalLight)

// Adding our camera to the scene
scene.add(camera)

const fontLoader = new FontLoader()

fontLoader.load(
    '/fonts/DM_Sans_Bold.json',
    (font) =>
    {
        const textGeometry = new TextGeometry(
            'MVP',
            {
                font: font,
                size: 0.5,
                height: 0.2,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 5
            }
        )
        textGeometry.computeBoundingBox()
        textGeometry.translate(
            - textGeometry.boundingBox.max.x * 0.5,
            - textGeometry.boundingBox.max.y * 0.5,
            - textGeometry.boundingBox.max.z * 0.5
        )
        const textMaterial = new MeshToonMaterial({
            color: '#ffffff'
        })
        const text = new Mesh(textGeometry, textMaterial)
        scene.add(text)
    }
)

const gltfLoader = new GLTFLoader()

gltfLoader.load('/models/nuxt.gltf', gltf => {

  for(let i = 0; i < 100; i++) {
    const nuxtLogo = gltf.scene.clone()
    nuxtLogo.position.set(
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10
    )
    nuxtLogo.rotation.set(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    )
    nuxtLogo.scale.set(
      Math.random()  + 0.5,
      Math.random()  + 0.5,
      Math.random()  + 0.5
    )
    scene.add(nuxtLogo)
  }
})

const loop = () => {
    controls.update()
    renderer.render(scene, camera)
    requestAnimationFrame(loop)
}

onMounted(() => {
  if (experience.value && !renderer) {
    renderer = new WebGLRenderer({ 
      antialias: true, 
      canvas: experience.value,
      outputEncoding: sRGBEncoding,
      toneMapping: ACESFilmicToneMapping,
    })
    renderer.setSize(800, 500)
   
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
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