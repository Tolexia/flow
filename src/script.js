import * as THREE from 'three'
import GUI from 'lil-gui'

import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'

/**
 * Base
 */
// Debug
const gui = new GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const particleTexture = textureLoader.load('/textures/particles/6.png')

/**
 * Particles
 */
// Geometry
// const particlesGeometry = new THREE.SphereGeometry(1, 32, 32)
const geometry = new THREE.PlaneGeometry(3, 3, 512, 512)
const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    transparent:true,
    uniforms:
    {
        uFrequency: { value: new THREE.Vector2(10, 5) },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('orange') },
        uTexture: { value: particleTexture }
    }
})
const mesh = new THREE.Mesh(geometry, material)
mesh.rotateX(Math.PI / 2)
scene.add(mesh)

// // Material
// const particlesMaterial = new THREE.PointsMaterial({
//     size: 0.02,
//     sizeAttenuation: true
// })
// particlesMaterial.size = 0.1
// particlesMaterial.color = new THREE.Color('cyan') //  Will affect vertex colors by color attribute anyways
// particlesMaterial.transparent = true
// particlesMaterial.alphaMap = particleTexture
// particlesMaterial.depthWrite  = false
// particlesMaterial.blending = THREE.AdditiveBlending

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 14
camera.position.y = -1
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

let previousTick
const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    material.uniforms.uTime.value = elapsedTime

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()