import React from 'react'
import PropTypes from 'prop-types'
//tech ou props.tech das propriedades enviadas do arquivo techlist
function TechItem({tech, onDelete}) {
  return (
  <li key={tech}>
          {tech}
          <button onClick={onDelete} type="button">Remover</button>
          </li>
  )
}

TechItem.defaultProps = {
  tech: 'Oculto'
}// Default props servem para enviar um valor caso nao enviemos nenhuma propriedade para o componente, no caso poderia ser o tech

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}
export default TechItem
