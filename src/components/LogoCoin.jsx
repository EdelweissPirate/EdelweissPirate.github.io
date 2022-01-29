import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Coin from "./shared/threejs/Coin"

function LogoCoin({ logoTexture, thisScale }) {
    return (
        <Suspense fallback={null}>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Coin thisTexture={logoTexture} thisScale={thisScale} canHover={false}/>
            </Canvas>
        </Suspense>
    )
}

export default LogoCoin
