import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}
const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: ${(props) => props.fontSize || '16px'};
`
function Teste() {
  return (
    <>
      <Botao principal> Enviar</Botao>
      <Botao fontSize="14px" principal={false}>
        cancel
      </Botao>
    </>
  )
}

export default Teste
