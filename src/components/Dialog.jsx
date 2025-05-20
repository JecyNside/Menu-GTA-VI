import ReactDOM from "react-dom";

function Dialog({ children }) {
  const dialogRoot = document.getElementById("dialog");
  return ReactDOM.createPortal(children, dialogRoot);
}

export default Dialog;