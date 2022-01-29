import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Coin from './shared/threejs/Coin'

function RepoLink() {
    return (
        <>
        <div className={repoLinkStyles.base}>
            <h1 className={repoLinkStyles.title}>
                Github
            </h1>
            <Suspense fallback={null}>
                <a href='https://github.com/EdelweissPirate/GitHubGetter' rel='noreferrer' target='_blank'>
                    <Canvas>
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        <Coin canHover={true} />
                    </Canvas>
                </a>
            </Suspense>
        </div>
        </>
    )
}

const repoLinkStyles = {
    base: 'container items-center object-contain h-20 w-20 fixed left-auto right-2 lg:right-24 bottom-2',
    title: 'font-rSalt text-sm lg:text-lg absolute text-center container justify-end -rotate_22 right-5 lg:right-8  bottom-15 text-white hidden md:block'
}

export default RepoLink
