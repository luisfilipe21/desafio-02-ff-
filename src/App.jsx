import { useState } from "react"
import { Footer } from "./components/Footer"
import { Galeria } from "./components/Galeria"
import { Header } from "./components/Header"
import { Modal } from "./components/Modal"

function App() {
  const [modalInfo, setModalInfo] = useState({})
  const [modal, setModal] = useState(false)

  return (
    <>
      <Header />
      <Galeria setModal={setModal} modal={modal} setModalInfo={setModalInfo} />
      <Footer />

      {modal ? <Modal modalInfo={modalInfo} setModal={setModal}/> : null}
    </>
  )
}

export default App
