import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function Box({ position, thisTexture}) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    const texture = useTexture(thisTexture? thisTexture : 'textures/faceLogo.png')

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        mesh.current.rotation.x += 0.01 * Math.random()
        mesh.current.rotation.y -= 0.01 * Math.random()

        // TODO - works but spins so fast!
        // let R = 3.2 + (Math.cos(10) * Math.random())
        // let theta = (Math.atan2(mesh.current.position.y, mesh.current.position.x))

        // let x = (R * Math.cos(theta*(180/Math.PI)))
        // let y = (R * Math.sin(theta*(180/Math.PI)))

        // mesh.current.position.x = x
        // mesh.current.position.y = y
    })
    
    return (
        <mesh position={position} ref={mesh} scale={1}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial map={texture} attach="material" />
        </mesh>
    )
}

export default Box
