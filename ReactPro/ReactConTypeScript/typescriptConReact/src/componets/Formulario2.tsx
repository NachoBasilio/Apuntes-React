import { useForm } from "../hooks/useForm"

interface FormData {
    nombre: string;
    codigoPostal: string;
}

export const Formulario2 = () => {
    const {formulario, handleChange, nombre, codigoPostal} = useForm<FormData>({
        nombre: "Charata",
        codigoPostal: "3730"
    })


  return (
        <form className="mb-20">
            <div className="mb-6">
                <label htmlFor="codigoPostal" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input 
                type="text" 
                id="codigoPostal" 
                value={codigoPostal}
                name="codigoPostal" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="name@flowbite.com"
                onChange={handleChange} 
                required/>

            </div>
            <div className="mb-6">
                <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                <input 
                type="text" 
                id="nombre" 
                name="nombre" 
                value={nombre}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="vos man" 
                onChange={handleChange}
                required/>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            <pre>
                {
                    JSON.stringify(formulario)
                }
            </pre>
    </form>


  )
}
