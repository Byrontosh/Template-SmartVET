import { MdDeleteForever, MdInfo,MdPublishedWithChanges } from "react-icons/md";

const Table = () => {
    return (
        <table className="w-full mt-5 table-auto shadow-lg bg-white">
            <thead className="bg-gray-800 text-slate-400">
                <tr>
                    <th className="p-2">Nombre</th>
                    <th className="p-2">Nombre</th>
                    <th className="p-2">Nombre</th>
                    <th className="p-2">Nombre</th>
                    <th className="p-2">Nombre</th>
                    <th className="p-2">Nombre</th>
                    <th className="p-2">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr className="hover:bg-gray-300 text-center">
                    <td>nombre</td>
                    <td>nombre</td>
                    <td>nombre</td>
                    <td>nombre</td>
                    <td>nombre</td>
                    <td>nombre</td>
                    <td className="py-2 text-center">
                        <MdPublishedWithChanges 
                            title="Actualizar" 
                            className="h-7 w-7 text-slate-800 cursor-pointer inline-block mr-2 hover:text-blue-600"
                        />
                        
                        <MdInfo 
                            title="Más información" 
                            className="h-7 w-7 text-slate-800 cursor-pointer inline-block mr-2 hover:text-green-600"
                        />
                        
                        <MdDeleteForever 
                            title="Eliminar" 
                            className="h-7 w-7 text-red-900 cursor-pointer inline-block hover:text-red-600"
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
