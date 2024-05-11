import { IoMdCloseCircle } from "react-icons/io";

export const Modal = ({ modalInfo, setModal }) => {

    const closeModal = () => {
        setModal(false)
    }

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto transition-opacity">
            <div className="flex items-center justify-center bg-gray-500/75 min-h-screen pt-4 px-4 pb-20 text-center">
                <div className="h-96 w-96 text-white relative ">
                    <span onClick={closeModal} className="absolute text-3xl text-red-200 bg-transparent cursor-pointer right-4 top-2">
                    <IoMdCloseCircle />
                    </span>
                    <div className="flex items-center justify-center flex-col">
                        <img src={modalInfo.img} className="rounded-xl"/>
                        <p className="m-8 text-white text-3xl">{modalInfo.nome}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}