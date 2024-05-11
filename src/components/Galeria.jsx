import { fotos } from "../data/data"

export const Galeria = ({setModalInfo, setModal, modal}) => {

    const openModal = (data) => {
        setModalInfo(data)
        setModal(!modal)    
    }

    return (
        <section className=" p-8 max-w-5xl m-auto relative">
            <div className="flex justify-center flex-col items-center">
                <h1 className="h-1/4 text-white text-8xl mb-12">
                    Galeria Maromba
                </h1>
                <div className="w-full max-w-screen-md mt-8 flex items-center justify-center flex-col box-border">
                    <ul className="flex items-center justify-center flex-wrap w-full-md gap-12">
                        {fotos.map(foto => {
                            return (
                                <li onClick={() => openModal(foto)} key={foto.id} className="flex flex-col h-80">
                                    <div className="flex flex-col items-center  w-56">
                                        <img className="rounded-3xl object-fill h-60 cursor-pointer" src={foto.img} alt={foto.nome} title={foto.nome}/>
                                        <p className="m-8 text-white text-3xl">{foto.nome}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}