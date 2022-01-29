import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'

function Coin({ thisTexture, thisScale, canHover}) {
    const [hover, setHover] = useState(false)

    // This reference will give us direct access to the mesh
    const mesh = useRef()
    const texture = useTexture(thisTexture? thisTexture : 'textures/faceLogo.png')

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        if(hover){
            if(mesh.current.rotation.z > 0){
                mesh.current.rotation.z -= 0.05
            }
            if(mesh.current.rotation.x > 1.5){
                mesh.current.rotation.x -= 0.05
            }
            if(mesh.current.rotation.x < 1.5){
                mesh.current.rotation.x += 0.05
            }
            if(mesh.current.rotation.y > 1.6){
                mesh.current.rotation.y -= 0.05
            }
            if(mesh.current.rotation.y < 1.6){
                mesh.current.rotation.y += 0.05
            }
        } else {
            mesh.current.rotation.z += 0.01
            mesh.current.rotation.x += 0.01
            mesh.current.rotation.y -= 0.01
        }
    })
    
    return (
        <mesh
            position={[0, 0, 0]}
            rotation={[1.5, 1.6, 0]}
            ref={mesh}
            scale={thisScale? thisScale : .2}
            onPointerEnter={() => setHover(true === canHover)}
            onPointerLeave={() => setHover(false)}
            castShadow={true}
            >
            <cylinderGeometry args={[7.5, 7.5, 1, 64, 4]} attach="geometry" />
            <meshStandardMaterial map={texture} attach="material" color="#CCCCCC" />
        </mesh>
    )
}

export default Coin
