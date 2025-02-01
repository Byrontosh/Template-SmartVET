import { useState } from "react"
import TableTreatments from "../components/treatments/Table"
import ModalTreatments from "../components/treatments/Modal"

const Details = () => {

    const [paciente, setPaciente] = useState({ demo: "true" })
    const [tratamientos, setTratamientos] = useState(["demo"])

    return (
        <>
            <div>
                <h1 className='font-black text-4xl text-gray-500'>Visualizar</h1>
                <hr className='my-4 border-t-2 border-gray-300' />
                <p className='mb-8'>Este módulo te permite visualizar todos los datos</p>
            </div>
            <div>
                {
                    Object.keys(paciente).length != 0 ?
                        (
                            <>
                                <div className='m-5 flex justify-between'>

                                    <div>
                                        <ul className="list-disc pl-5">

                                            {/* Datos del paciente */}
                                            <li className="text-md text-gray-00 mt-4 font-bold text-xl">Datos del dueño</li>

                                            <ul className="pl-5">
                                                <li className="text-md text-gray-00 mt-2">
                                                    <span className="text-gray-600 font-bold">Cédula: </span>
                                                </li>

                                                <li className="text-md text-gray-00 mt-2">
                                                    <span className="text-gray-600 font-bold">Nombres completos: </span>
                                                </li>

                                                <li className="text-md text-gray-00 mt-2">
                                                    <span className="text-gray-600 font-bold">Correo electrónico: </span>
                                                </li>

                                                <li className="text-md text-gray-00 mt-2">
                                                    <span className="text-gray-600 font-bold">Celular: </span>
                                                </li>
                                            </ul>


                                            {/* Datos del dueño */}
                                            <li className="text-md text-gray-00 mt-4 font-bold text-xl">Datos del paciente</li>

                                            <ul className="pl-5">
                                                <li className="text-md text-gray-00 mt-2">
                                                    <span className="text-gray-600 font-bold">Nombre: </span>
                                                </li>

                                                <li className="text-md text-gray-00 mt-2">
                                                    <span className="text-gray-600 font-bold">Tipo: </span>
                                                </li>

                                                <li className="text-md text-gray-00 mt-2">
                                                    <span className="text-gray-600 font-bold">Fecha de nacimiento: </span>
                                                </li>

                                                <li className="text-md text-gray-00 mt-2">
                                                    <span className="text-gray-600 font-bold">Estado: </span>
                                                    <span className="bg-blue-100 text-green-500 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"></span>
                                                </li>

                                                <li className="text-md text-gray-00 mt-4">
                                                    <span className="text-gray-600 font-bold">Síntomas: </span>
                                                </li>

                                            </ul>
                                        </ul>
                                    </div>

                                    <div>
                                        <img src="https://cdn-icons-png.flaticon.com/512/2138/2138440.png" alt="dogandcat" className='h-80 w-80' />
                                    </div>
                                </div>

                                <hr className='my-4 border-t-2 border-gray-300' />

                                <div className='flex justify-between items-center'>

                                    <p>Este módulo te permite gestionar los tratamientos</p>

                                    <button className="px-5 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700">
                                        Registrar
                                    </button>

                                    {false && (<ModalTreatments />)}

                                </div>

                                {
                                    tratamientos.length == 0
                                        ?
                                        <p>No existen registros</p>
                                        :
                                        <TableTreatments tratamientos={tratamientos} />
                                }

                            </>
                        )
                        :
                        (
                            <p>No existen registros</p>
                        )
                }
            </div>
        </>

    )
}

export default Details