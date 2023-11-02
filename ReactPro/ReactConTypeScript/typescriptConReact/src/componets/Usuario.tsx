import { useState } from "react"

interface Usuario{
    uid: string;
    nombre: string;
}

export const Usuario = () => {
    const [usuario, setUsuario] = useState<Usuario>({
        uid: '',
        nombre: ''
    })
    const login = () => {
        setUsuario({
            uid: "asda12",
            nombre: 'Nacho'
        })
    }

  return (
    <div className="mt-5 container m-auto">
        <h3 className="text-2xl">Usuario: useState</h3>

        <button 
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={login}
        >
            Login
        </button>
        <pre> {JSON.stringify(usuario)}</pre>
    </div>
  )
}

