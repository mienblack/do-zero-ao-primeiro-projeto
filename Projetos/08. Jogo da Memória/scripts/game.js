let game = {
    lockmode: false,
    firstCard: null, // Primeira carta clicada
    secondCard: null, // Segunda carta clicada
    cards: null, // Conjunto de todas as cartas que serão mostradas
    techs: [
        "bootstrap",
        "css",
        "electron",
        "firebase",
        "html",
        "javascript",
        "jquery",
        "mongo",
        "node",
        "react"
    ],

    // Seleciona carta para verificar se é par
    setCard: function (id) {

        let card = this.cards.filter(card => card.id === id)[0]
        console.log(card)

        // Verifica se a carta já está virada
        if (card.flipped) {
            return false
        }

        // Se a carta não estiver virada, então a carta é selecionada
        if (!this.firstCard) {
            this.firstCard = card
            this.firstCard.flipped = true
            return true
        } else {
            this.secondCard = card
            this.secondCard.flipped = true
            this.lockmode = true
            return true
        }
    },

    // Verifica se as cartas formaram um par
    checkMatch: function () {
        if (!this.firstCard || !this.secondCard) {
            return false
        }
        return this.firstCard.icon === this.secondCard.icon
    },

    // Reseta variáveis de jogo
    clearCards: function () {
        this.firstCard = null
        this.secondCard = null
        this.lockmode = false
    },

    // Atributo flip é resetado e carta pode ser clicada novamente
    unflipCards: function () {
        this.firstCard.flipped = false
        this.secondCard.flipped = false
        this.clearCards()
    },

    // Verifica se o jogo acabou
    cehckGameOver: function () {
        this.cards.filter(card => !card.flipped).length === 0
    },

    // Criar cartas com id, ícone e flipped
    createCardsFromTechs: function () {
        this.cards = []
        this.techs.forEach(tech => {
            this.cards.push(this.createPairFromTech(tech))
        })
        this.cards = this.cards.flatMap(card => card)
        this.shuffleCards()
        console.log(this.cards)
        return this.cards
    },

    // Cria um par de cartas de mesmo ícone e diferentes ids
    createPairFromTech: function (tech) {
        return [{
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false
        }, {
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false
        }]
    },

    // Cria um id diferente para cada carta
    createIdWithTech: function (tech) {
        return tech + parseInt(Math.random() * 1000)
    },

    //Embaralha as cartas
    shuffleCards: function (cards) {
        let currentIndex = this.cards.length
        let randomIndex = 0

        while (currentIndex != 0) {
            //console.log("current index: ", currentIndex)
            randomIndex = Math.floor(Math.random() * currentIndex)
            //console.log("random index: ", randomIndex)
            currentIndex--

            [this.cards[currentIndex], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[currentIndex]]
        }
    }

}