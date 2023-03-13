function trocaSwitch(){
    // alert('Vamos trocar o switch');
    /*Variavel gtml vai representar todo o documento*/
    let html = document.documentElement
    /*Verificando se na lista de classe do documento HTML tem a classe light*/
    if (html.classList.contains('light')){
        html.classList.remove('light')
    }
    /*Adicionando a classe light no documento HTML*/
    else{
        html.classList.add('light')
    }
}