//id="inputEmail"
//id="inputPassword"

let logins=[];

const saveLogin = (ev)=>{
    ev.preventDefault();
    let login ={
        id: Date.now(),
        email: document.getElementById('inputEmail').value,
        senha: document.getElementById('inputPassword').value
    }
    logins.push(login);
    document.forms[0].reset();//zera o formulário para a próxima entrada

    //teste
    console.warn('added',{logins});
    let pre = document.querySelector('#msg pre');
    pre.textContent = '/n' + JSON.stringify(logins,'/t',2);
}

document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('btn-entrar').addEventListener('click',saveLogin);
})
