import { Canvas} from '@react-three/fiber'
import { Suspense } from 'react';
import Box from "./shared/threejs/Box";
import LogoCoin from './LogoCoin'

function RepoBoxes({ count, logoTexture }) {

    let boxes = []
    
    function generateBoxes(){
        for(let i = 0; i <= count - 1; i++){
            boxes.push(1)
        }
    }

    function calcBoxPos(i){
        let angle = (360/(count)) * i

        let R = 2.5 + (97.5 * (count/400))
        let theta = angle*Math.PI/180;
    

        let output = {
            x: (R * Math.cos(theta)) + 0.1,
            y: (R * Math.sin(theta)) + 0.1,
            z: -1 - (150 * (count/400))
        }

        return output
    }

    return (
        <div className={repoBoxesStyles.base}>
        {count > 0 ? 
        <Suspense fallback={null}>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                {generateBoxes()}
                {boxes.map((item, i) => {
                    let coords = calcBoxPos(i)
                    return <Box key={i} position={[coords.x, coords.y, coords.z]} thisTexture={logoTexture}/>
                })}
            </Canvas>
        </Suspense> 
        : 
        <div className={repoBoxesStyles.container}>
            <LogoCoin logoTexture={logoTexture} thisScale={.38}/>
            <div className={repoBoxesStyles.textBox}>
                <h1 className={repoBoxesStyles.text}>No public repos</h1> 
            </div>
        </div>
        }
        </div>
    )
}

const repoBoxesStyles = {
    base: 'absolute inset-0 flex justify-center items-center z-10',
    container: 'relative',
    textBox: 'absolute flex items-center justify-center text-center w-full',
    text: 'flex items-center justify-center text-center'
}

export default RepoBoxes
