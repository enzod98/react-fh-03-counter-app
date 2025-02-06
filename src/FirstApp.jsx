// const newMessage = {
//     message: 'Hola mundo!',
// };

import PropTypes from 'prop-types'

const getSaludo = () => 'Oyiaaa'

export const FirstApp = ({ title, subtitle, nombre }) => {

  return (
    <>  {/* //Mismo comportamiento que un Fragment. Permite devolver más de un objeto raíz */}
        <h2>{ title }</h2>
        <p>{ subtitle }</p>
        <p>{ nombre }</p>
    </>
  )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired,
}

FirstApp.defaultProps = {
    nombre: 'esno',
    subtitle: 'No hay subtítulo',
    title: 'No hay título',
}