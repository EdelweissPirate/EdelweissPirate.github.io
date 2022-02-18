import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function LogoCoin() {
    const mesh = useRef()
    const texture = useTexture('textures/meteor.png')

    useFrame(() => {
        mesh.current.rotation.z += 0.01
        mesh.current.rotation.x += 0.01
        mesh.current.rotation.y -= 0.01
    })

    return (
        <mesh
            position={[0, 0, 0]}
            rotation={[1.5, 1.6, 0]}
            ref={mesh}
            scale={.25}
            castShadow={true}
            >
            <cylinderGeometry args={[7.5, 7.5, 1, 64, 4]} attach="geometry" />
            <meshStandardMaterial map={texture} attach="material" color="#CCCCCC" />
        </mesh>
    )
}

export default LogoCoin
