import React, {useState} from 'react'

function ToDoList(){

    const [tarefas, setTarefas] = useState([])
    const [novaTarefa, setNovaTarefa] = useState("")

    function entradaInput(event) {
        setNovaTarefa(event.target.value)
    } 

    function adicionarTarefa() {

        if(novaTarefa.trim() !== "") {
            setTarefas(t => [...t, novaTarefa])
            setNovaTarefa("")
        }
        else {
            alert('Digite uma tarefa')
        }
        
    }

    function removerTarefa(index) {
        const updateTarefas = tarefas.filter((_, i) => i !== index)
        setTarefas(updateTarefas)
    }

    function subirTarefa(index) {
        if (index > 0) {
            const updatedTarefas = [...tarefas];
            [updatedTarefas[index], updatedTarefas[index - 1]] = 
            [updatedTarefas[index - 1], updatedTarefas[index]];
            setTarefas(updatedTarefas);
        }
    }

    function descerTarefa(index) {
        if (index < tarefas.length - 1) {
            const updatedTarefas = [...tarefas];
            [updatedTarefas[index], updatedTarefas[index + 1]] = 
            [updatedTarefas[index + 1], updatedTarefas[index]];
            setTarefas(updatedTarefas);
        }
    }

    
    
    return(
        <>
            <div className="lista">
                <h1>Lista de tarefas</h1>

                <div>
                    <input type="text" placeholder='Digite a tarefa' value={novaTarefa} onChange={entradaInput}/>
                    <button className="botaoAdicionar" onClick={adicionarTarefa}>Adicionar</button>
                </div>

                <ol>
                    {tarefas.map((tarefa, index) => 
                    <li key={index}>
                        <span className="texto">{tarefa}</span>
                        <button className="botaoDeletar" onClick={() => removerTarefa(index)}>Deletar</button>
                        <button className="botaoMover" onClick={() => subirTarefa(index)}>Subir tarefa</button>
                        <button className="botaoMover" onClick={() => descerTarefa(index)}>Descer tarefa</button>
                    </li>)}
                </ol>

            </div>

            
        </>
    )
}
export default ToDoList