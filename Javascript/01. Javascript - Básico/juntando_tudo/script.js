
// Nome do aluno: nota 01 - nota 02 - média (Aprovado ou Reprovado)

var alunos = ['Pedro', 'Edgar', 'Vinicius'];
var notaA = [5.0, 8.0, 7.0];
var notaB = [7.5, 7.5, 8.0];

var media = function(n1, n2) {

    return (n1 + n2)/2;
}

var resultado = function(media) {

    if (media >= 7) {

        return 'Aprovado';
    }else {

        return 'Reprovado';
    }
}

for (var i in alunos) {
    var nota1 = notaA[i]
    var nota2 = notaB[i]
    var m = media(nota1, nota2);

    console.log(alunos[i] + ': ' + nota1 + ' - ' + nota2 + ' - ' + m + ' ' + resultado(m))
}