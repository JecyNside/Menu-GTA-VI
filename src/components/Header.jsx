import Logo from "../assets/icons/Logo";
import Menu from "../assets/icons/Menu";
import World from "../assets/icons/World";
import IconLeft from "../assets/icons/IconLeft";
import Expandable from "../assets/icons/Expandable";
import Dialog from "../components/Dialog";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const container = useRef(null);
  const { contextSafe } = useGSAP({ scope: container });

  const animation = contextSafe(() => {
    setShowModal(true);
  });

  const closeModal = contextSafe(() => {
    gsap.to(".modal-container", {
      opacity: 0,
      backdropFilter: "blur(0px) brightness(1) saturate(1)",
      ease: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
    });

    gsap.to(".icon-left", {
      filter: "none",
      ease: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
      color: "#000",
      opacity: 0,
    });

    gsap.to(".modal", {
      opacity: 0,
      duration: 1,
      display: "none"
    });

    gsap.to(".modal-right", {
      opacity: 0,
      right: "-100%",
      duration: 1,
      ease: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
      onComplete: () => setShowModal(false),
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
    }
  }, [showModal]);

  return (
    <>
      <header>
        <nav>
          <div className="container-logo">
            <Logo />
          </div>
          <div className="container-menu">
            <button className="btn-menu" onClick={() => animation()}>
              <Menu />
            </button>
          </div>
        </nav>
      </header>

      {showModal && (
        <div className="modal">
          <div className="modal-container" ref={container}>
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
                      <li>Personajes</li>
                      <li>Lugares</li>
                      <li>Traileres</li>
                      <li>Descargas</li>
                    </ul>

                    <button onClick={() => closeModal()}>X</button>
                  </div>
                </div>

                <div className="menu-body">
                  <a href="#">Jason Duval</a>
                  <a href="#">Lucia Caminos</a>
                  <a href="#">Cal Hampton</a>
                  <a href="#">Boobie Ike</a>
                  <a href="#">Dre'Quan Priest</a>
                  <a href="#">Real Dimez</a>
                  <a href="#">Raul Bautista</a>
                  <a href="#">Brian Heder</a>
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
    </>
  );
}

export default Header;
