var tentativas = 0
var cripto_global = ""
var senha_global = document.getElementById('idSenha').value 

function geraSenha() {
    //chave usada para codificar a mensagem
    let cripto = "01234567"
    let senha = document.getElementById('idSenha').value 

    let chaveInicial = [4,1,7,3,0,5,2,6]  
    for (let index = 0; index < senha.length; index++) {
        //cripto[chaveInicial[index]] = senha[index];  
        debugger
       cripto = cripto.replace(chaveInicial[index],senha[index])
    }
    cripto_global = cripto
    alert('senha gerada foi: ' + cripto)
}


function quebraSenha() {
    var senha_global = document.getElementById('idSenha').value 
    let senhas = permutate(cripto_global)
    var element = "" 
    debugger
    if (senha_global.length > 0) {
        
        for (let index = 0; index < senhas.length; index++) {
            element = senhas[index];
            tentativas++
            if (element === senha_global) {
                break
            }
        }
        alert('quebrou a senha: '+ element + ' com '+ 
        tentativas + ' tentativas'+ '(cada tentativa(s))')
    } else {
        alert('senha menor que o mínimo!')
    }
}

function permutate(str) {
    const arr = str.split("");
    const n = arr.length;
    const result = [];
  
    function swap(i, j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  
    function generate(n) {
      if (n === 1) {
        result.push(arr.join(""));
      } else {
        for (let i = 0; i < n; i++) {
          generate(n - 1);
          if (n % 2 === 0) {
            swap(i, n - 1);
          } else {
            swap(0, n - 1);
          }
        }
      }
    } 
    generate(n);
    return result;
}
  
  // Exemplo de uso:
  //const str = "abcdefgh";
  //const permutacoes = permutate(str);
  //console.log(permutacoes);

  function heapPermutation(array, n) {
    if (n === 1) {
      console.log(array);
    } else {
      for (let i = 0; i < n; i++) {
        heapPermutation(array, n - 1);
        if (n % 2 === 0) {
          [array[i], array[n - 1]] = [array[n - 1], array[i]];
        } else {
          [array[0], array[n - 1]] = [array[n - 1], array[0]];
        }
      }
    }
  }

  let array = [1, 2, 3];
heapPermutation(array, array.length);
