import { Suspense, useContext, useState, useEffect } from "react";
import MenuContext from "./context/MenuContext";
import Main from "./components/Main";
import { swapClass } from './utils'

function App() {
  const [menuActive, setMenuActive] = useState(false)

  const { characters, avatars, isMobileDevice } = useContext(MenuContext)

  useEffect(() => {
      isMobileDevice ? updateMenuActive(false) : updateMenuActive(true)
  }, [isMobileDevice])

  useEffect(() => {
    toggleClasses()
  }, [menuActive])


  const updateMenuActive = (onOff) => {
      setMenuActive(onOff)
  }

  const toggleClasses = () => {
      if(menuActive){
          swapClass('.mainMenu', 'animate-fadeOutRight', 'animate-fadeInLeft')
      } else {
          swapClass('.mainMenu', 'animate-fadeInLeft', 'animate-fadeOutRight')
      }
  }

  const appContainerStyles = `container px-4 m-auto pt-5 text-2xl sm:text-xl xl:px-40 sm:flex sm:flex-col sm:justify-center sm:items-center sm:h-full ${(menuActive && isMobileDevice) && 'fixed'}`

  return (
    <div className={appContainerStyles}>
      <Suspense fallback="loading...">
        <Main characters={characters} avatars={avatars} handleMenuShow={updateMenuActive} />
        <p className="sm:fixed sm:top-3 sm:right-8 sm:font-thin text-left pt-5 pb-2 sm:pt-0" >© EdelweissPirate 2022</p>
      </Suspense>
    </div>
  );
}

export default App;
