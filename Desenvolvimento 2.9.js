

const Conta = {
    numero : "12346-7",
    saldo : 15.00,
    tipo : "corrente",
    agencia : "2365-5",

    meuSaque : function(valor){
        if (Conta.saldo < valor){
            console.log(`Saldo insuficiente! Saldo: R$ ${Conta.saldo}`)
        }
        else{
        Conta.saldo = Conta.saldo - valor
        }
    },

    meuDeposito : function(valor){
        Conta.saldo = Conta.saldo + valor
    },

    buscarSaldo : function(){
        console.log(`Saldo: R$ ${Conta.saldo}`)
    },

    numeroConta : function(){
        console.log(`Conta:  ${Conta.numero}`)
    },
  }

  Conta.buscarSaldo();
  Conta.meuSaque(10);
  Conta.buscarSaldo();
  Conta.meuDeposito(100);
  Conta.buscarSaldo();
  Conta.numeroConta();
  