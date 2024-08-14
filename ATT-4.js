let votosTotais, votosCandidatoX, votosCandidatoY, votosBrancos, votosNulos
let porcentagemVotosX, porcentagemVotosY, porcentagemVotosBrancos, porcentagemVotosNulos

votosTotais = Number(prompt('Digite o número total de eleitores da cidade:'))
votosCandidatoX = Number(prompt('Digite o número de votos do candidato X:'))
votosCandidatoY = Number(prompt('Digite o número de votos do candidato Y:'))
votosBrancos = Number(prompt('Digite o número de votos brancos:'))
votosNulos = Number(prompt('Digite o número de votos nulos:'))

porcentagemVotosX = (votosCandidatoX / votosTotais) * 100
porcentagemVotosY = (votosCandidatoY / votosTotais) * 100
porcentagemVotosBrancos = (votosBrancos / votosTotais) * 100
porcentagemVotosNulos = (votosNulos / votosTotais) * 100

alert('Ao total tiveram '+votosTotais+' votos.\nO candidato X recebeu '+porcentagemVotosX+'% dos votos.\nO candidato Y recebeu '+porcentagemVotosY+'% dos votos.\n'+porcentagemVotosBrancos+'% dos votos foram brancos\n'+porcentagemVotosNulos+'% dos votos foram nulos.')
