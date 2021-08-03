const team = {
    _players: [
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11}, {
            firstName: 'Clint',
            lastName: 'Cupido',
            age: 15}, {
            firstName: 'Michael',
            lastName: 'Scott',
            age: 40}
    ],
    _games: [
        {
            opponent: 'Manutd',
            teamPoints: 88,
            opponentPoints: 27
          },{
            opponent: 'Arsenal',
            teamPoints: 67,
            opponentPoints: 44
          },{
            opponent: 'Chelsea',
            teamPoints: 71,
            opponentPoints: 65
          }
    ],
    get players () {
        return this._players;
    },
    get games () {
        return this._games;
    },
    addPlayer(firstName,lastName,age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        }
        this.players.push(player) //players is the get method created
    },
    addGame(opponentName,teamPoints,opponentPoints) {
        let game = {
            opponentName: opponentName,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        }
        this.games.push(game)
    }
};
team.addPlayer('test','test',100)
team.addPlayer('steph','curry',28)
team.addPlayer('lisa','leslie',44)
// console.log(team.players)
console.log()

team.addGame('Liverpool',77,88);
team.addGame('Man City',20,100);
team.addGame('Tottenham',60,67);
// console.log(team.games)

console.log(team.addGame())

