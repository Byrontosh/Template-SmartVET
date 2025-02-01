import { MdDeleteForever, MdPublishedWithChanges,MdAttachMoney  } from "react-icons/md";

const TableTreatments = ({tratamientos}) => {
    return (
        <table className='w-full mt-5 table-auto shadow-lg  bg-white'>
            <thead className='bg-gray-800 text-slate-400'>
                <tr>
                    <th className='p-2'>N°</th>
                    <th className='p-2'>Nombre</th>
                    <th className='p-2'>Descripción</th>
                    <th className='p-2'>Prioridad</th>
                    <th className='p-2'>Estado</th>
                    <th className='p-2'>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    tratamientos.map((tratamiento, index) => (
                        <tr className="hover:bg-gray-300 text-center" >
                            <td>{index + 1}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <span className="bg-blue-100 text-green-500 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"></span>
                            </td>
                            
                            <td className='py-2 text-center'>

                            <MdAttachMoney 
                                className="h-7 w-7 text-slate-800 cursor-pointer inline-block mr-2 hover:text-green-600"
                                title="Pagar"
                            />

                            <MdPublishedWithChanges
                                className="h-7 w-7 text-slate-800 cursor-pointer inline-block mr-2 hover:text-blue-600"
                                title="Cambiar estado"
                            />

                            <MdDeleteForever 
                                className="h-8 w-8 text-red-900 cursor-pointer inline-block hover:text-red-600"
                                title="Eliminar"
                            />
                            </td>
                        </tr>
                    ))
                }

            </tbody>
        </table>

    )
}

export default TableTreatments