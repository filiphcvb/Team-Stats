const team = {
 _players: [
   {firstName: 'Filip' , lastName: 'Djakovic' , age: 30},
   { firstName: 'Marko' , lastName: 'Milojevic' , age: 32},
   { firstName: 'Ivan' , lastName: 'Pavlovic' , age: 42}
 ],
 _games: [
   {opponent: 'Magic', teamPoints: 35 , opponentPoints: 27},
   {opponent: 'Huston', teamPoints: 56 , opponentPoints: 36},
   {opponent: 'Miami', teamPoints: 42 , opponentPoints: 40}
 ],

 get players() {
   return this._players;
 },

 get games() {
   return this._games;
 },

  addPlayer(firstName , lastName , age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },
addGame(opp , myPts , oppPts) {
  const game = {
opponent: opp,
teamPoints: myPts,
opponentPoints: oppPts
}

this.games.push(game);
}
};
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);

team.addGame('Celtics' , 60 , 56);
team.addGame('Chicago' , 80 , 72);
team.addGame('Toronto' , 95 , 93);

console.log(team.games);





