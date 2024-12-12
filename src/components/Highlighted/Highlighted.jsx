import './Cor.css'

function Highlighted(props){

    return props.isHighlighted ? <p className='mudarCor'>Boa Tarde</p> : <p>Alo</p>
}
export default Highlighted