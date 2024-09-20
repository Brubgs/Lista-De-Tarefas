import React, {useState} from 'react'

function ToDoList(){

    const [tarefas, setTarefas] = useState(["Estudar", "Limpar quarto", "Fazer compras"])
    const [novaTarefa, setNovaTarefa] = useState("")

    function entradaInput(event) {
        setNovaTarefa(event.target.value)
    } 

    function adicionarTarefa() {

    }

    function removerTarefa(index) {

    }

    function subirTarefa(index) {

    }

    function descerTarefa(){

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