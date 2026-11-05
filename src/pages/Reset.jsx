import logoDog from '../assets/dog-hand.webp'
import { useState } from 'react'


const Reset = () => {
    const [tokenback, setTokenBack] = useState(false);

    
    return (
        <div className="flex flex-col items-center justify-center h-screen">

            
            <h1 className="text-3xl font-semibold mb-2 text-center text-gray-500">
                Bienvenido nuevamente
            </h1>
            <small className="text-gray-400 block my-4 text-sm">
                Pro favor, ingrese los siguientes datos
            </small>
            <img
                className="object-cover h-80 w-80 rounded-full border-4 border-solid border-slate-600"
                src={logoDog}
                alt="image description"
            />

            {tokenback && (

                <form className="w-80">

                    <div className="mb-1">

                        {/* Campo nueva contraseña */}
                        <label className="mb-2 block text-sm font-semibold">Nueva contraseña</label>
                        <input type="password" placeholder="Ingresa tu nueva contraseña"
                            className="block w-full rounded-md border border-gray-300 py-1 px-1.5 text-gray-500"
                        />
                        
                        
                        {/* Campo repetir contraseña */}
                        <label className="mb-2 block text-sm font-semibold">Confirmar contraseña</label>
                        <input type="password" placeholder="Repite tu contraseña"
                            className="block w-full rounded-md border border-gray-300 py-1 px-1.5 text-gray-500"
                        />

                    </div>

                    <div className="mb-3">
                        <button className="bg-gray-600 text-slate-300 border py-2 
                        w-full rounded-xl mt-5 hover:scale-105 duration-300 hover:bg-gray-900 
                        hover:text-white">
                            Enviar
                        </button>

                    </div>
                    
                </form>
            )}
        </div>
    )
}

export default Reset
