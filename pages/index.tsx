import React, { useEffect, useRef, useState } from 'react'
import { BoxGeometry, Mesh, MeshNormalMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three'


export default function Index() {
  const canvasRef = useRef<HTMLCanvasElement>(null)


  useEffect(() => {
    if (!canvasRef.current) return

    const context = canvasRef.current.getContext('webgl2')
    if (!context) return

    const camera = new PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      10
    )
    camera.position.z = 1

    const scene = new Scene()

    // object
    const geometry = new BoxGeometry(0.3, 0.2, 0.1)
    const material = new MeshNormalMaterial()

    const mesh = new Mesh(geometry, material)
    scene.add(mesh)
    //

    const renderer = new WebGLRenderer({
      antialias: true,
      context,
      canvas: canvasRef.current,
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    window.onresize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()

      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    renderer.setAnimationLoop(animation)

    var sab = new SharedArrayBuffer(1024)

    function animation(time: number) {
      mesh.rotation.x = time / 2000
      mesh.rotation.y = time / 1000

      renderer.render(scene, camera)
    }

    // new Worker()

    return () => {
      renderer.setAnimationLoop(null)
    }
  }, [])

  return (
    <div >
      <canvas ref={canvasRef} />
    </div>
  )
}
