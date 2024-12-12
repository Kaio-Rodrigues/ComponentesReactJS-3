import React, { useState } from 'react';
function Tarefa(){
    const [tarefas, setTarefas] = useState([
        { id: 1, tarefa: "Arrumar a casa" },
        { id: 2, tarefa: "Arrumar a cama" },
        { id: 3, tarefa: "Arrumar o peixe?" }
      ]);
    

    const removerTarefa = (id) => {
        setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
      };
    return(
        <>
        <table border={1}>
            <tr>
                <th>Tarefas</th>
                <th>Ação</th>
            </tr>
            {tarefas.map((tarefa) => (
                <tr key={tarefa.id}>
                    <td>
                        {tarefa.tarefa}
                    </td>
                    <td>
                        <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
                    </td>
                </tr>
            ))}
        </table>
        </>
    )
}
export default Tarefa