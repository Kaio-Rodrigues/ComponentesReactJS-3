function ListaNomes(){
  const nomes = ['Ana', 'Michelly', 'Karol', 'Igor'];

  return (
    <ul>{nomes.map((nome)=>(<li>{nome}</li>))}</ul>
  )
}
export default ListaNomes