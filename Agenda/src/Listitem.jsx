const Listitem = ({persona}) =>{
    const {apellidos, nombre, email, telefono}= persona
    return(
        <li>
            {apellidos}, {nombre}:
            <ul>
                <li>persona.email</li>
                <li>persona.telefono</li>
            </ul>
        </li>
    )
}
export default Listitem