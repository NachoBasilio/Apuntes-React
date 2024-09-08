
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  const markdownContent = `
## 1. Descripción del proyecto

Este proyecto tiene como objetivo principal la creación de una plataforma web interactiva y amigable para el usuario, enfocada en mejorar la experiencia del cliente en línea y la eficiencia de los servicios de la inmobiliaria. Desde la perspectiva del frontend, se destacan las siguientes características y funcionalidades clave:

- **Diseño Responsivo:** El frontend estará diseñado con un enfoque totalmente responsive, asegurando una experiencia de usuario consistente y optimizada en todos los dispositivos, desde ordenadores de escritorio hasta dispositivos móviles.
- **Interfaz Intuitiva:** Se implementará una interfaz de usuario intuitiva y de fácil navegación. Los elementos visuales, como menús, botones y formularios, se diseñarán para ser claros y accesibles, facilitando así la interacción de los usuarios con la plataforma.
- **Búsqueda:** El frontend contará con herramientas de búsqueda que permitirán a los usuarios buscar propiedades de manera eficiente utilizando filtros como ubicación, tipo de propiedad, precio, tamaño, entre otros criterios relevantes.
- **Visualización de Propiedades:** Se incluirán galerías de imágenes de alta calidad y descripciones detalladas de las propiedades, asegurando que los usuarios puedan obtener toda la información necesaria antes de tomar decisiones importantes.
- **Funcionalidades Personalizadas:** Para los buscadores de propiedades, se ofrecerán funcionalidades personalizadas como la posibilidad de guardar propiedades favoritas, recibir notificaciones sobre nuevas propiedades que cumplan con sus criterios de búsqueda y acceder a historiales de búsqueda.
- **Gestión de Cuentas de Usuario:** El frontend permitirá a los usuarios registrarse fácilmente, iniciar sesión de manera segura, actualizar su información personal, restablecer contraseñas de forma segura y gestionar sus preferencias de comunicación.
- **Dashboard para Administradores:** Los administradores tendrán acceso a un dashboard completo y personalizable desde el cual podrán gestionar todas las actividades y aspectos del sistema, incluyendo:
  - **Gestión de propiedades:** Publicación, edición y eliminación de propiedades, gestión de imágenes y documentos asociados.
  `;

  return (
    <div>
      <h1>Proyecto Inmobiliario</h1>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
}

export default App;
