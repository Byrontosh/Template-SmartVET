
import { useState } from "react";

export const Form = () => {

    const [generatedImage, setGeneratedImage] = useState("https://cdn-icons-png.flaticon.com/512/2138/2138440.png")

    
    return (
        <form>

            <fieldset className="border-2 border-gray-500 p-6 rounded-lg shadow-lg">
                <legend className="text-xl font-bold text-gray-700 bg-gray-200 px-4 py-1 rounded-md">
                    Información del propietario</legend>
                <div>
                    <label className="mb-2 block text-sm font-semibold">Cédula</label>
                    <input type="number" placeholder="Ingresa la cédula" className="block w-full rounded-md border border-gray-300 py-1 px-2 text-gray-500 mb-5" />
                </div>
                <div>
                    <label className="mb-2 block text-sm font-semibold">Nombres completos</label>
                    <input type="text" placeholder="Ingresa nombre y apellido" className="block w-full rounded-md border border-gray-300 py-1 px-2 text-gray-500 mb-5" />
                </div>
                <div>
                    <label className="mb-2 block text-sm font-semibold">Correo electrónico</label>
                    <input type="email" placeholder="Ingresa el correo electrónico" className="block w-full rounded-md border border-gray-300 py-1 px-2 text-gray-500 mb-5" />
                </div>
                <div>
                    <label className="mb-2 block text-sm font-semibold">Celular</label>
                    <input type="number" placeholder="Ingresa el celular" className="block w-full rounded-md border border-gray-300 py-1 px-2 text-gray-500 mb-5" />
                </div>
            </fieldset>


            <fieldset className="border-2 border-gray-500 p-6 rounded-lg shadow-lg mt-10">
                <legend className="text-xl font-bold text-gray-700 bg-gray-200 px-4 py-1 rounded-md">
                    Información de la mascota</legend>
                <div>
                    <label className="mb-2 block text-sm font-semibold">Nombre</label>
                    <input type="text" placeholder="Ingresar nombre " className="block w-full rounded-md border border-gray-300 py-1 px-2 text-gray-500 mb-5" />
                </div>
                <div >
                    <label className="mb-2 block text-sm font-semibold">Imagen</label>
                    <div className="flex items-center gap-10 mb-5">
                        <input type="text" placeholder="Ingresar el prompt" className="block w-full rounded-md border 
                            border-gray-300 py-1 px-2 text-gray-500" />
                        <button className="py-1 px-8 bg-gray-600 text-slate-300 border rounded-xl hover:scale-110 duration-300 hover:bg-gray-900 hover:text-white sm:w-80">Generar con IA</button>
                    </div>
                    {generatedImage && <img src={generatedImage} alt="Avatar IA" width={100} height={100} />}
                </div>
                <div>
                    <label className="mb-2 block text-sm font-semibold">Tipo</label>
                    <select
                        id='prioridad'
                        className='block w-full rounded-md border border-gray-300 py-1 px-2 text-gray-500 mb-5'>
                        <option value="">--- Seleccionar ---</option>
                        <option value="dato">Gato</option>
                        <option value="perro">Perro</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>
                <div>
                    <label className="mb-2 block text-sm font-semibold">Fecha de nacimiento</label>
                    <input type="date" className="block w-full rounded-md border border-gray-300 py-1 px-2 text-gray-500 mb-5" />
                </div>
                <div>
                    <label className="mb-2 block text-sm font-semibold">Síntomas</label>
                    <textarea type="date" placeholder="Ingresa los síntomas" className="block w-full rounded-md border border-gray-300 py-1 px-2 text-gray-500 mb-5" />
                </div>
            </fieldset>

            <input
                type="submit"
                className='bg-gray-800 w-full p-2 mt-5 text-slate-300 uppercase font-bold rounded-lg 
                        hover:bg-gray-600 cursor-pointer transition-all'
                value='Registrar' />

        </form>
    )
}