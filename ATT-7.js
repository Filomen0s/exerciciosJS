let choppDesperdicio, choppSobrou, mediaChoppPessoa

choppDesperdicio = Number(prompt("Digite quanto litros de chopp foram desperdiçados:"))
choppSobrou = Number(prompt('Digite quantos litros de chopp sobrou: '))

mediaChoppPessoa = (300 - choppDesperdicio - choppSobrou) / 45

alert('Em média, cada pessoa bebeu '+mediaChoppPessoa+' litros de chopp.')