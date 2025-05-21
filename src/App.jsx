import Background from "./assets/imgs/background.webp";
import Header from "./components/Header";
import World from "./assets/icons/World";
import IconLeft from "./assets/icons/IconLeft";
import Expandable from "./assets/icons/Expandable";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const MenuPersonajes = () => {
  return (
    <>
      <a href="#">Jason Duval</a>
      <a href="#">Lucia Caminos</a>
      <a href="#">Cal Hampton</a>
      <a href="#">Boobie Ike</a>
      <a href="#">Dre'Quan Priest</a>
      <a href="#">Real Dimez</a>
      <a href="#">Raul Bautista</a>
      <a href="#">Brian Heder</a>
    </>
  );
};

const MenuLugares = () => {
  return (
    <>
      <a href="#">Vice City</a>
      <a href="#">Cayos de Leonida</a>
      <a href="#">Grassrivers</a>
      <a href="#">Port Gellhorn</a>
      <a href="#">Ambrosia</a>
      <a href="#">Monte Kalaga</a>
    </>
  );
};

const MenuTrailers = () => {
  return (
    <>
      <a href="#">Trailers</a>
    </>
  );
};

const MenuDescargas = () => {
  return (
    <>
      <a href="#">Descargas</a>
    </>
  );
};

function App() {
  const links = [
    { name: "Personajes", element: MenuPersonajes() },
    { name: "Lugares", element: MenuLugares() },
    { name: "Traileres", element: MenuTrailers() },
    { name: "Descargas", element: MenuDescargas() },
  ];
  const [linkActive, setLinkActive] = useState(links[0].name);
  const [showModal, setShowModal] = useState(false);
  const container = useRef(null);
  const { contextSafe } = useGSAP({ scope: container });

  const animation = contextSafe(() => {
    if (!showModal) {
      setShowModal(true);
    } else {
      closeModal();
    }
  });

  const closeModal = contextSafe(() => {
    gsap.to(".modal-container", {
      backdropFilter: "blur(0px) brightness(1) saturate(1)",
      ease: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
      opacity: 0,
      onComplete: () => setShowModal(false),
    });

    gsap.to(".icon-left", {
      filter: "none",
      ease: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
      color: "#000",
    });

    gsap.to(".modal-right", {
      right: "-100%",
      duration: 1.2,
      ease: "power2.out",
    });
    gsap.to(".modal-left", {
      duration: 1.2,
      ease: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
    });
    gsap.to(".container-logo", {
      opacity: 1,
      duration: 0.5,
    });

    gsap.to(".menu-bottom", {
      position: "static",
      rotation: 0,
      duration: 0.25,
      ease: "power2.inOut",
      scale: 1,
    });

    gsap.to(".menu-top", {
      position: "static",
      rotation: 0,
      duration: 0.25,
      ease: "power2.inOut",
      scale: 1,
    });

    gsap.to(".container-menu", {
      background: "transparent",
    });
  });

  useGSAP(() => {
    if (showModal) {
      gsap.to(".modal-container", {
        opacity: 1,
        backdropFilter: "blur(150px) brightness(1.2) saturate(2.5)",
      });

      gsap.to(".icon-left", {
        filter: "drop-shadow(0 0 170px #fff)",
        duration: 1,
        ease: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
        color: "white",
      });

      gsap.to(".modal-right", {
        right: "0%",
      });

      gsap.to(".container-logo", {
        opacity: 0,
        duration: 0.5,
      });

      gsap.to(".menu-bottom", {
        position: "absolute",
        rotation: -45,
        duration: 0.25,
        ease: "power2.inOut",
        scale: 0.65,
        transformOrigin: "center center",
      });

      gsap.to(".menu-top", {
        position: "absolute",
        rotation: 45,
        duration: 0.25,
        ease: "power2.inOut",
        scale: 0.65,
        transformOrigin: "center center",
      });

      gsap.to(".container-menu", {
        background: "hsla(0, 0%, 100%, .05)",
      });
    }
  }, [showModal]);

  return (
    <main ref={container}>
      <Header onOpen={animation} />
      <img className="background" src={Background} alt="background" />
      {showModal && (
        <div className="modal">
          <div className="modal-container">
            <div className="modal-left">
              <div className="left-container">
                <IconLeft />
              </div>
            </div>
            <div className="modal-right">
              <div className="menu-container">
                <div className="menu-header">
                  <div className="menu-nav">
                    <ul>
                      {links.map((link, i) => (
                        <>
                          <li
                            key={i}
                            onClick={() => setLinkActive(link.name)}
                            className={
                              link.name === linkActive ? "link active" : "link"
                            }
                          >
                            {link.name}
                          </li>
                        </>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="menu-body">
                  <div className="container-links">
                    {links
                      .filter((link) => link.name === linkActive)
                      .map((link) => (
                        <>{link.element}</>
                      ))}
                  </div>
                </div>

                <div className="menu-footer">
                  <div className="menu-footer-container">
                    <button>
                      <World />
                      <span>Español</span>
                      <Expandable />
                    </button>
                    <button>
                      <span>Movimiento</span>
                      <Expandable />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
