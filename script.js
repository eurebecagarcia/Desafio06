let sobreMim = {
    nome: 'Rebeca',
    idade: 27,
    corPreferida: 'Preto'
  }
  
  sobreMim.time='Flamengo'
  console.log(sobreMim);
  
   delete sobreMim.corPreferida;
  console.log(sobreMim)
  
  
  console.log(sobreMim)
  
  let cadastro = [
    { 
        nome: Rebeca,
        idade:26,
        telefone:21987623685 ,
        amigos: ['Gabriel', 'Angelo', 'Victor','Joyce',]
    },
    {
        nome: Gabriel,
        idade: 26,
        telefone: 21985644467,
        amigos: ['Maycon','Yasmim','Samuel', 'Rebeca']
    },
    {
        nome: Yasmin,
        idade:19,
        telefone:219887564665,
        amigos: ['Camila', 'Angelo', 'Julio' ,'Pietra']
    },
    {
        nome: Angelo ,
        idade:29,
        telefone:21975532198,
        amigos: ['Gabriele', 'Sara', 'Davi','Heitor',]
    },
    {
        nome: Enmanuele,
        idade:8,
        telefone:21988670007,
        amigos: ['Pietra', 'Sara', 'Davi','Samuel',]
    }
]
  
    console.log(cadastro[0].amigos[0])
    console.log(cadastro[1].amigos[0])
    console.log(cadastro[2].amigos[0])
    console.log(cadastro[3].amigos[0])
    console.log(cadastro[4].amigos[0])