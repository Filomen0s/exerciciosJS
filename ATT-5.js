let valorIMC, alturaMetrosPessoa, pesoQuilosPessoa

alturaMetrosPessoa = Number(prompt('Digite sua altura EM METROS APENAS COM NÚMEROS E COM PONTO NO LUGAR DA VÍRGULA:'))
pesoQuilosPessoa = Number(prompt('Digite seu peso EM QUILOS APENAS COM NÚMEROS E COM PONTO NO LUGAR DA VÍRGULA:'))

valorIMC = pesoQuilosPessoa / (alturaMetrosPessoa * alturaMetrosPessoa)

alert('Seu IMC é '+valorIMC+'.')