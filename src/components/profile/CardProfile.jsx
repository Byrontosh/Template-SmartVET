
export const CardProfile = () => {


    
    return (

        <div className="bg-white border border-slate-200 h-auto p-4 flex flex-col items-center justify-between shadow-xl rounded-lg">

            {/* Contenedor de la imagen de perfil */}
            <div className="relative">

                {/* Imagen del usuario */}
                <img src="https://cdn-icons-png.flaticon.com/512/4715/4715329.png" alt="img-client" className="m-auto rounded-full border-2 border-gray-300" width={120} height={120} />


                {/* Botón para seleccionar o cambiar la imagen de perfil */}
                <label className="absolute bottom-0 right-0 bg-blue-400  text-white rounded-full p-2 cursor-pointer hover:bg-emerald-400">📷
                    <input type="file" accept="image/*" className="hidden" />
                </label>
            </div>



            {/* Nombre del usuario */}
            <div className="self-start">
                <b>Nombre:</b><p className="inline-block ml-3"></p>
            </div>


            {/* Apellido del usuario */}
            <div className="self-start">
                <b>Apellido:</b><p className="inline-block ml-3"></p>
            </div >


            {/* Dirección del usuario */}
            <div className="self-start">
                <b>Dirección:</b><p className="inline-block ml-3"></p>
            </div>


            {/* Teléfono del usuario */}
            <div className="self-start">
                <b>Teléfono:</b><p className="inline-block ml-3"></p>
            </div>

            {/* Correo del usuario */}
            <div className="self-start">
                <b>Correo:</b><p className="inline-block ml-3"></p>
            </div>
        </div>
    )
}