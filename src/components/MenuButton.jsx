import { Suspense } from "react"
import { Canvas } from "react-three-fiber"
import LogoCoin from "./LogoCoin"

function MenuButton({ handleMenuShow }) {

    return (
        <Suspense>
            <button className="!absolute sm:hidden" onPointerDown={handleMenuShow}>
                <Canvas className="!w-24 !h-20" >
                    <ambientLight />
                    <pointLight position={[10, 10, 10]} />
                    <LogoCoin />
                </Canvas>
            </button>
        </Suspense>
    )
}

export default MenuButton
