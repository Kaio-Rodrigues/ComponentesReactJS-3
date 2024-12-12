function Multiplos(){
    const Fazeres = [
        {id:1, fazer:"Qualquer coisa"},{id:2, fazer:"Qualquer coisa ao quadrado"},{id:3, fazer:"Qualquer coisa ao quindado"}
    ]
    return(
        <>
            <h1>Aqui é o Titulo</h1>
            <table border={1}>
                <tr>
                    <th>A fazeres</th>
                </tr>
                {Fazeres.map((fazer) => (
                <tr key={fazer.id}>
                    <td>{fazer.fazer}</td>
                </tr>
                ))}
            </table>

            <p>Sim qualquer coisa</p>
        </>
    )
}
export default Multiplos