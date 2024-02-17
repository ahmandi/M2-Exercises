// class Pessoa {
//     constructor(nome, dataDeNascimento, cidade) {
//         this.nome = nome;
//         this.dataDeNascimento = dataDeNascimento;
//         this.cidade = cidade;
//     }

//     calcularIdade() {
//         let idade = 2022 - this.dataDeNascimento
//         return idade
//     }

//     apresentar() {
//         return `Olá, eu sou ${this.nome}, tenho ${this.calcularIdade()} anos de idade e atualmente moro em ${this.cidade}`
//     }
// }

// let pessoa1 = new Pessoa(
// "jose",
// "1993",
// "parana",
// )

// console.log(pessoa1.apresentar())

class Veiculo {
    constructor(proprietario, placa, tipoCombustivel) {
        this.proprietario = proprietario,
        this.placa = placa,
        this.tipoCombustivel = tipoCombustivel
    }
}

class Automovel extends Veiculo {
    constructor(proprietario, placa, tipoCombustivel, assentos, portas, anoFabricacao) {
        super(proprietario, placa, tipoCombustivel)   
        this.assentos = assentos,
        this.portas = portas,
        this.anoFabricacao = anoFabricacao
    }

    retornarInformacoes() {
        return `Placa: ${this.placa},
        ano: ${this.anoFabricacao}, 
        tipo de combustível: ${this.tipoCombustivel}, 
        quantidade de lugares: ${this.assentos}, 
        quantidade de portas: ${this.portas}, 
        proprietário: ${this.proprietario}`
    }
}

class Caminhao extends Veiculo {
    constructor(proprietario, placa, tipoCombustivel, cargaMaxima) {
        super(proprietario, placa, tipoCombustivel)
        this.cargaMaxima = cargaMaxima
    }

    retornarInformacoes() {
        return `Placa: ${this.placa},
        Ano: ${1994}, 
        Tipo de combustível: ${this.tipoCombustivel}, 
        Carga maxima: ${this.cargaMaxima},
        Proprietário: ${this.proprietario}`
    }
}

let vrum = new Caminhao(
    'José',
    '171-vsf',
    'vodka',
    '95kg'
)
console.log(vrum.retornarInformacoes())

