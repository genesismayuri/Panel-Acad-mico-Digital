# Preguntas de la práctica

## 1. ¿Qué variables y tipos de datos se utilizaron en el proyecto?

En el proyecto se utilizaron variables para almacenar información del usuario, datos obtenidos desde la API y solicitudes registradas.

Los tipos de datos utilizados fueron:

- String: para nombres, correos, países, tipos de solicitud y descripciones.
- Number: para almacenar la edad.
- Array: para guardar listas de universidades y solicitudes.
- Object: para almacenar la información completa de una solicitud académica.
- Boolean: para controlar validaciones y condiciones.

---

## 2. ¿Qué operadores fueron necesarios para validar datos o realizar comparaciones?

Los operadores utilizados fueron:

- `===` para comparar valores.
- `!==` para comprobar diferencias.
- `>` y `<` para comparar cantidades.
- `||` para asignar valores predeterminados.
- `&&` para evaluar varias condiciones.

Estos operadores permitieron realizar las validaciones del formulario y controlar la lógica del sistema.

---

## 3. ¿Dónde se aplicaron condicionales dentro del sistema?

Los condicionales se aplicaron principalmente en el archivo `validaciones.js`.

Se utilizaron para comprobar:

- Que los campos obligatorios no estén vacíos.
- Que el correo tenga un formato válido.
- Que la edad sea correcta.
- Que el usuario seleccione un tipo de solicitud.
- Que la descripción tenga una cantidad mínima de caracteres.

---

## 4. ¿Dónde se usaron ciclos o recorridos de datos?

Los ciclos se utilizaron para recorrer información obtenida desde la API y los datos almacenados en localStorage.

Se utilizó el método `forEach()` para recorrer los arreglos y crear tarjetas dinámicas con la información.

---

## 5. ¿Qué funciones se crearon y qué responsabilidad tiene cada una?

Las funciones creadas fueron:

- **buscarUniversidades():** realiza la consulta a la API pública y obtiene información de universidades.
- **registrarSolicitud():** captura los datos del formulario y registra una solicitud.
- **validarFormulario():** verifica que los datos ingresados sean correctos.
- **guardarSolicitud():** almacena solicitudes en localStorage.
- **obtenerSolicitudes():** recupera las solicitudes guardadas.
- **mostrarSolicitudes():** muestra la información almacenada en la interfaz.

---

## 6. ¿Qué elementos del DOM fueron manipulados con JavaScript?

Los elementos del DOM manipulados fueron:

- Formulario de solicitud.
- Campos de nombre, correo, edad y descripción.
- Selector de tipo de solicitud.
- Botón de búsqueda.
- Mensajes de confirmación.
- Contenedor de resultados de la API.
- Contenedor de solicitudes guardadas.

Se utilizó `document.getElementById()` para acceder a estos elementos.

---

## 7. ¿Qué eventos se utilizaron en la aplicación?

Los eventos utilizados fueron:

- **submit:** para controlar el envío del formulario.
- **click:** para ejecutar la búsqueda de universidades.
- **DOMContentLoaded:** para cargar información guardada al iniciar la página.

---

## 8. ¿Qué validaciones se aplicaron al formulario?

Las validaciones aplicadas fueron:

- Verificar que ningún campo obligatorio esté vacío.
- Validar que el correo tenga formato correcto.
- Comprobar que la edad sea un número válido.
- Verificar que se seleccione un tipo de solicitud.
- Validar que la descripción tenga mínimo de caracteres.

---

## 9. ¿Cómo se manejaron los errores cuando el usuario ingresó datos incorrectos?

Cuando el usuario ingresó datos incorrectos, el sistema mostró mensajes claros indicando qué información debía corregirse.

Ejemplos:

- "El nombre es obligatorio".
- "El correo no tiene formato válido".
- "Debe seleccionar un tipo de solicitud".

---

## 10. ¿Qué API pública se utilizó y qué información devuelve?

Se utilizó la API pública de universidades:

**Universities API**

Esta API permite consultar universidades según el país ingresado.

La información obtenida incluye:

- Nombre de la universidad.
- País.
- Dominio web.

---

## 11. ¿Cómo se aplicó fetch, JSON y async/await?

Se utilizó `fetch()` para realizar la conexión con la API pública.

Se utilizó `async/await` para manejar las solicitudes de forma más organizada.

La respuesta de la API fue convertida a formato JSON mediante:

```javascript
response.json()