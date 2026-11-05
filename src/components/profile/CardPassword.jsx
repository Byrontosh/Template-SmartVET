
const CardPassword = () => {

    return (
        <>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mt-6">
                <h2 className='font-black text-2xl mb-4 text-[#193e4b9b]'>Cambiar contraseña</h2>
                
                {/* Formulario */}
                <form >

                    
                    
                    {/* Campo contraseña actual */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold">Contraseña actual</label>
                        <input type="text" placeholder="Ingresa tu contraseña actual"
                            className="block w-full rounded-md border border-gray-300 py-1 px-2 text-gray-500 mb-5" />
                    </div>

                    
                    {/* Campo contraseña nueva */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold">Nueva contraseña</label>
                        <input type="text" placeholder="Ingresa la nueva contraseña" className="block w-full rounded-md border
                            border-gray-300 py-1 px-2 text-gray-500 mb-5" />
                    </div>



                    {/* Botón para actualizar la contraseña */}
                    <input
                        type="submit"
                        className='bg-gray-800 p-2 mt-5 text-slate-300 font-bold rounded-lg 
                        hover:bg-gray-600 cursor-pointer transition-all'
                        value='Cambiar contraseña' />

                </form>
            </div>

        </>
    )
}

export default CardPassword