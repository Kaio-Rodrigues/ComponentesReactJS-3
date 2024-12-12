function Tabela() {
    const coisas = [
        { id: 1, nome: 'Ana', idade: 28 },
        { id: 2, nome: 'Michelly', idade: 17 },
        { id: 3, nome: 'Karol', idade: 18 },
        { id: 4, nome: 'Igor', idade: 22 },
    ]
    return (
        <>
            <table>
                <colgroup span="4"></colgroup>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Idade</th>
                </tr>
                {coisas.map((coisa) => (
                    <tr>
                        <td>{coisa.id}</td>
                        <td>{coisa.nome}</td>
                        <td>{coisa.idade}</td>
                    </tr>
                ))}
            </table>
        </>
    )
}
export default Tabela