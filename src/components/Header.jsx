import Logo from "../assets/icons/Logo";
import Menu from "../assets/icons/Menu";

function Header({onOpen}) {
  return (
    <>
      <header>
        <nav>
          <div className="container-logo">
            <Logo />
          </div>
          <div className="container-menu">
            <button className="btn-menu" onClick={() => onOpen()}>
              <Menu />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
