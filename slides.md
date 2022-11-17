---
# try also 'default' to start simple
theme: penguin
colorSchema: dark
themeConfig:
  logoHeader: https://res.cloudinary.com/alvarosaburido/image/upload/v1666359605/as-portfolio/Pixel_Avatar_lhbjva.png
  eventLogo: 'https://nuxtnation.com/images/logo-nuxtnation.svg'
  eventUrl: 'https://frontdevstage.com/'
  twitter: '@alvarosabu'
  twitterUrl: 'https://twitter.com/alvarosabu'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
css: unocss
layout: intro
drawings:
  persist: false
---

# Add 3D to your Nuxt app with Three.js


---
layout: presenter
twitter: '@alvarosabu'
twitterUrl: https://twitter.com/alvarosabu
presenterImage: >-
  https://res.cloudinary.com/alvarosaburido/image/upload/v1666351649/b_w_egfb4v.png
---

# Alvaro Saburido

FE Tech Lead Engineer at <a  href="https://bcn.porsche.digital/en/" favicon="https://www.google.com/s2/favicons?domain=porsche.com" ><simple-icons-porsche mr-1/>Porsche Digital</a>

- Barcelona, Spain 🇪🇸
- <a href="https://www.storyblok.com/"><logos-storyblok-icon /> Storyblok</a> Ambassador
- I often write at <a href="https://dev.to/alvarosaburido"> dev.to/@alvarosabu</a>
- Creating content on <a href="https://www.youtube.com/channel/AlvaroDevLabs" ><logos-youtube-icon mr-1 />AlvaroDevLabs</a>
- Blog & Portfolio <a href="https://alvarosaburido.dev">alvarosaburido.dev</a>
- Say hi at <a href="https://twitter.com/alvarosabu"><logos-twitter mr-1 />@alvarosabu</a>

<!--
-Present- Passionate about - Say hi
-->

---

<Suspense>
  <Start />
</Suspense>

<!--
And I'm here to hopefully inspire you to add 3D to your favorite meta framework

Of course, we could fill a 60m talk just by talking about to implement 3D using ThreeJS on Nuxt and go deep to all the neaty greedy details.
-->

---
preload: false
---

<NuxtInstancedMesh />

<!--
BUT, this is a Lighting talk and I have around ~9 minutes to convince you to try 3D with Nuxt

So I will reduce this talk to the minimum viable presentation (MVP)
-->

---
layout: text-image
media: /kid.jpeg
---

# I have always love videogames



<!-- I have always love 3D, I was a kid who loved to play videogames -->

---
layout: two-cols
---
# Still a kid

::right::

![bigkid](/bigkid.jpg)
<!-- Show picture now playing -->

<!-- That kid honestly never left and still is a part of me nowadays -->

---
layout: two-cols
---

# Motivation

![](/crashbandicoot.jpeg)

::right::

![](/link.png)

<!-- This kid lived the golden era of videogames going 3D, from Zelda to Crash Bandicoot -->

<!-- This kid grew up wanting to create his own stories, characters, but life deviated the path a little bit towards a Telecom Engineering and finally founding his happy place in Frontend Development -->

<!-- Why Frontend? Because I could use all that creativity to craft beautiful web experiences while enjoying doing it, and that path lead me to be here with you talking about 3D in Nuxt -->
---


![](/gifted.jpeg)

<!-- While I abandoned the idea of learning 3D for years, because I thought, that's only for crazy smart people -->

<!-- Thruly gifted folks capable of do all those calculations and mathematics, yeah I'm an engineer but I'm not one of them, I don't think I'm capable of it I will continue with my confort zone, doing just Frontend Development -->

---

# I was wrong

> "You don't need to be f* genius to do 3D, you just need to be curious"
>  
>
>  -- <cite>Github copilot, Nuxt Nation 2022</cite>


<style>
.slidev-layout blockquote {
    @apply text-xl bg-dark-800 font-italic text-white p-4 rounded-lg w-2/3;
}

cite {
    @apply pt-8 text-sm text-gray-400;
}
</style>

---

# ThreeJS to the rescue

![](/threejs-journey.png)

<style>
img {
    @apply w-2/3 rounded mx-auto;
}
</style>

<!-- I found ThreeJS Journey course by Bruno Simon, and I was like, wait a minute, this is not that hard, I can do this, I can learn this -->


---
layout: two-cols
---

# In less than 1 year

![](/render-v2.png)

::right::

<div class="image-grid">
  <img src="/link-awakening.png" />
      <img src="/planet.png" />
    <img src="/akuaku.png" />
</div>

<video src="/CardoBoBot.mp4" autoplay loop muted></video>

<style>
  .image-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
  
  img {
    @apply rounded;
  }

  video {
    @apply rounded aspect-4/3;
  }
</style>


<!-- In less that a year I learn how implement 3D on web, how to load the model that I learned to sculpt and paint in Blender a week ago and make it animate in my web app -->

---

# How?

We need 3 things to achieve our goal:

<v-clicks>

1. Nuxt
2. ThreeJS
3. You (the most important one) 👩‍💻


</v-clicks>
<!--
Animate clicks
-->

---
layout: text-image
media: https://i.ytimg.com/vi/PkdY8vfNxQs/maxresdefault.jpg
---

# Nuxt <logos-nuxt-icon />


> And it's all about DX (Developer Experience) 🤩



<!--Let's talk about the first one -->

<!--
Simplify this one
-->

---
layout: two-cols
---

# ThreeJS <logos-threejs class="fill-white" />

It's a JavaScript library that leverages WebGL to render 3D scenes in the browser. 

> Makes it easier to work with 3D on the browser

::right::

<a href="http://letsplay.ouigo.com/">
<img src="/threejs-example.png" />
</a>




<!-- Let's talk about the second one -->

<!--
ThreeJS is a JavaScript library that allows you to create 3D scenes using WebGL Reducir textoi magen grid
-->


---
layout: text-window
---
# Something to draw

Let's create a teal sphere

```typescript
const sphere = new THREE.Mesh(
  // Geometry
  new THREE.SphereGeometry(1, 32, 32), 
  // Material
  new THREE.MeshBasicMaterial({ 
    color: 0x008080 
  }) 
)
```

::window::

![](/black-screen.png)

---
layout: text-window
---
# A camera to see it

```typescript
const aspectRatio = 
  window.innerWidth / 
  window.innerHeight

const camera = 
  new THREE.PerspectiveCamera(
    45, // FOV
    aspectRatio, // Aspect ratio
    0.1, // Near plane
    1000 // Far plane
)

camera.position.set(4, 4, 4)
```

::window::

![](/teal-sphere.png)

<!-- Comment that a common error is to leave the camera position at the 0,0,0 -->

---
layout: two-cols
---

# A scene to put it all together

```typescript
const scene = new THREE.Scene()

// Adding our camera to the scene
scene.add(camera)

// Adding the sphere
scene.add(sphere)

```

::right::

---
layout: two-cols
---

# A renderer to show it

```vue
<script setup>
// ThreeJS related code...
</script>

<template>
  <canvas />
</template>
```

::right::

```typescript
const renderer = new THREE.WebGLRenderer({
  canvas
})

renderer.setSize(
  window.innerWidth, 
  window.innerHeight 
);

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

renderer.render( scene, camera );
```

---
layout: text-image
media: /vuejs-error.png
preload: false
---
# Tadaaaa 🎉

<Dark />

---

# TemplateRefs + Lifecycle hooks

```vue
<script setup lang="ts">
const experience: Ref<HTMLCanvasElement | null> = ref(null)
let renderer: WebGLRenderer

onMounted(() => {
  renderer = new THREE.WebGLRenderer({
    canvas: experience.value
  })

  ...
})
</script>
<template>
  <canvas ref="experience" />
</template>
```


---
preload: false
---

<Basic />

---
layout: two-cols
media: /render-loop.png
---

# The Loop

The handy [`requestAnimationFrame`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) function allows us to create a loop that runs at the browser's refresh rate.


```typescript
const loop = () => {

  // Move object
  sphere.position.x += 0.01
  
  renderer.render( scene, camera );
  requestAnimationFrame(loop)
}

loop()
```

::right::

![](/frames-per-second-diagram.png)

![](/render-loop.png)


<style>
  img {
    @apply rounded;
  }
</style>

---
preload: false
---

<Loop />

---
layout: text-window
---

# ⚠️ Reactivity

Be careful with the reactivity of the ThreeJS objects.


```typescript
❌

const sphere = reactive(...)

const renderer = ref(...)

const loop = () => {

  // Move object
  sphere.value.position.x += 0.01
  
  renderer.render( scene, camera );
  requestAnimationFrame(loop)
}
```

::window::
<v-click>
<iframe src="https://measurethat.net/Embed?id=285725" width="100%" height="500px"></iframe>
</v-click>
<!--
Mostrar grafico despues
-->

---
layout: two-cols 
---
# Nuxt + ThreeJS 💚

3D world is not optimal for SSR, it might work but performance can get flunky.

Here is where Nuxt shines, it allows you to use the `ClientOnly` component to render a component only on the client-side.

```vue
<template>
  <ClientOnly>
    <TheExperience />
  </ClientOnly>
</template>
```

::right::

Or even better, you can add the `.client` suffix to the component name.

```
🗂 components/
├─ 📄 TheExperience.client.vue
🗂 composables/
├─ 📄 useRenderer.ts
📄 App.vue

```

---
center: true
---

# Add that easy, you can add 3D to your Nuxt app in a few minutes. 😊

<style scoped>
  h1 {
    @apply text-center;
  }
</style>

---
layout: two-cols
preload: false
---

# Next steps

<v-clicks>

-  Add a light and different materials ([MeshStandardMaterial](https://threejs.org/docs/#api/en/materials/MeshStandardMaterial), [MeshPhongMaterial](https://threejs.org/docs/#api/en/materials/MeshPhongMaterial))
-  Use textures ([TextureLoader](https://threejs.org/docs/#api/en/loaders/TextureLoader))
-  Add a [OrbitControls](https://threejs.org/docs/#examples/en/controls/OrbitControls)
-  Add a model via [GLTFLoader](https://threejs.org/docs/#examples/en/loaders/GLTFLoader)
-  Animations with [GSAP](https://greensock.com/gsap/)
-  Play and have fun 🏀
-  Share your creations with me [@alvarosabu](https://twitter.com/alvarosabu)

</v-clicks>

::right::
<Suspense>
<Model />
</Suspense>

<style>
  ul {
    @apply important-list-disc;
  }
</style>

---
layout: text-image
media: '/new-video.png'
---

# Resources

<v-clicks>

- Nuxt Cat demo in [Stackblitz](https://stackblitz.com/edit/nuxt-starter-gjhmbp?file=components/TheExperience.client.vue)
- Github Repo [here](https://github.com/alvarosabu/nuxt-nation-demo-2022)
- [ThreeJS Playlist](https://www.youtube.com/playlist?list=PLi-X1Ojrrmi8hTTHRs2LprNaaZBDY5Mhk)
- [How to add 3D to your Vue App](https://www.youtube.com/watch?v=1mFWG8WBif8&list=PLi-X1Ojrrmi-z6Yq6BMLTixbw3Xzj6yG1&index=6)
- [ThreeJS Journey](https://threejs-journey.com/) by [Bruno Simon](https://twitter.com/bruno_simon)

</v-clicks>

<style>
  ul {
    @apply important-list-disc;
  }
</style>
---
center: true
---
# Thank you 🙏

<style scoped>
  h1 {
    @apply text-center;
  }
</style>
