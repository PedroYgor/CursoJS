
    const novaTarefa = document.querySelector('.input-nova-tarefa');
    document.querySelector('.btn-add-tarefa');

    const tarefas = document.querySelector('#tarefas');
    function criaLi() {
        const li = document.createElement('li');
        return li;
    }
    function criarBotaoApagar(li) {
        li.innerText += ' ';
        const botao = document.createElement('button');
        botao.setAttribute('class', 'apagar');
        botao.innerText = 'Apagar';
        li.appendChild(botao);

    }
    function criaTarefa(textInput) {
        const li = criaLi();
        li.innerText = textInput;
        tarefas.appendChild(li);
        criarBotaoApagar(li);
        salvarTarefas();
    }
    function limparInput() {
        novaTarefa.value = '';
        novaTarefa.focus();
    }
    function salvarTarefas() {
        const liTarefas = tarefas.querySelectorAll('li');
        const listaDeTarefas = [];
        for (let iterator of liTarefas) {
            let textoGuardado = iterator.innerText;
            textoGuardado = textoGuardado.replace(' Apagar', '');
            listaDeTarefas.push(textoGuardado);
        }
        const tarefasJSON = JSON.stringify(listaDeTarefas);
        localStorage.setItem('tarefas', tarefasJSON);
    }
    
    novaTarefa.addEventListener("keypress", function (e) {
        if (e.keyCode === 13) {
            if (!novaTarefa.value) return;
            criaTarefa(novaTarefa.value);
            limparInput();
        }

    });

    document.addEventListener("click", function (e) {
        const elemento = e.target;
        if (!novaTarefa.value) return;
        if (elemento.classList.contains('btn-add-tarefa')) {
            criaTarefa(novaTarefa.value);
            limparInput();
        }
    });
    document.addEventListener('click', function (e) {
        const el = e.target;
        if (el.classList.contains('apagar')) {
            el.parentElement.remove();
            salvarTarefas();
        }
    });
    function adicionaTarefas() {
        const tarefas = localStorage.getItem('tarefas');
        const listaDeTarefas = JSON.parse(tarefas);
        for(let tarefas of listaDeTarefas){
            criaTarefa(tarefas);
        }
    }
    adicionaTarefas()
   




