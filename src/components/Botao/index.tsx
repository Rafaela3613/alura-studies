import React from 'react';

class Botao extends React.Component {
    render() {
        const estaAtivo = true;
        const styles = {
          backgroundColor: estaAtivo ? "purple" : "red"
        }
      
        return (
            <button style={styles}>
                Botão
            </button>
        )
    }
}

export default Botao;