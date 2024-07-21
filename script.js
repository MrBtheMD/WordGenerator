const prompt = require('prompt-sync')();

const WordGenerator = {
    part1 : ['Oh boy!', 'Unbelievable.', 'Oh wait, you are serious about this?'],
    part2:['This is not necessarily', 'This is actually', 'Only an idiot would say that this is'],
    part3:['a good idea.', 'a horrible idea', 'the most stupid thing I\'ve ever been asked.'],

pickRandomPhraseOne() {
    const randomizer = Math.floor(Math.random()*((this.part1.length)))
    return this.part1[randomizer]
},
pickRandomPhraseTwo() {
    const randomizer = Math.floor(Math.random()*((this.part2.length)))
    return this.part2[randomizer]
},
pickRandomPhraseThree() {
    const randomizer = Math.floor(Math.random()*((this.part3.length)))
    return this.part3[randomizer]
},

CreateSentence() {
    let question = prompt('What would you like to ask me?','');
    if (question && (typeof question === 'string')) {
   return this.pickRandomPhraseOne()+' '+this.pickRandomPhraseTwo()+' '+this.pickRandomPhraseThree()
    } else {
        return 'Cannot give an answer is no question is asked.'
    }
}
}
console.log(WordGenerator.CreateSentence())