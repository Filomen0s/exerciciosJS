let kgPlastico, kgPapel, kgMetal
let reaisPlastico, reaisPapel, reaisMetal

kgPlastico = Number(prompt('Digite a quantidade,em quilos, de PLÁSTICO que deseja entregara para a fábrica:'))
kgPapel = Number(prompt('Digite a quantidade,em quilos, de PAPEL que deseja entregara para a fábrica:'))
kgMetal = Number(prompt('Digite a quantidade,em quilos, de METAL que deseja entregara para a fábrica:'))

reaisPlastico = (kgPlastico / 10) * 2
reaisPapel = (kgPapel / 30) * 3
reaisMetal = (kgMetal / 50) * 5

alert('Você receberá:\n R$'+reaisPlastico+' pelo plástico\nR$'+reaisPapel+' pelo papel\nR$'+reaisMetal+' pelo metal')