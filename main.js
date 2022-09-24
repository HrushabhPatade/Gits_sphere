import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
    75,
    innerWidth / innerHeight,
    0.1,
    1000
)
const renderer = new THREE.WebGLRenderer(

)


renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(devicePixelRatio)
document.body.appendChild(renderer.domElement)





const icoGeometry = new THREE.IcosahedronGeometry(1, 2);
const icoMaterial = new THREE.MeshBasicMaterial({
    color: 0x00ffff,
    wireframe: true,
    uniforms: {
        lineWidth: {
            value: 1
        }
    }


})

const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial)



scene.add(icosahedron)

camera.position.z = 5

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)

    icosahedron.rotation.x += 0.002
    icosahedron.rotation.y += 0.002
}

animate()