function grupiPunktid(tulemus, ennustus) {
  if (typeof tulemus === 'string' && typeof ennustus === 'string') {
    if (tulemus === '' && ennustus === '') {
      return 0;
    }

    if (tulemus === ennustus) {
      return 5 + 10;
    }

    let tulemusHomeAndAway = tulemus.split('-');
    let ennustusHomeAndAway = ennustus.split('-');

    let isTulemusHomeTeamWin = parseInt(tulemusHomeAndAway[0]) > parseInt(tulemusHomeAndAway[1]);
    let isTulemusTie = parseInt(tulemusHomeAndAway[0]) === parseInt(tulemusHomeAndAway[1]);
    let isTulemusAwayTeamWin = parseInt(tulemusHomeAndAway[0]) < parseInt(tulemusHomeAndAway[1]);

    let isEnnustusHomeTeamWin = parseInt(ennustusHomeAndAway[0]) > parseInt(ennustusHomeAndAway[1]);
    let isEnnustusTie = parseInt(ennustusHomeAndAway[0]) === parseInt(ennustusHomeAndAway[1]);
    let isEnnustusAwayTeamWin = parseInt(ennustusHomeAndAway[0]) < parseInt(ennustusHomeAndAway[1]);

    if ((isTulemusHomeTeamWin && isEnnustusHomeTeamWin)
        || (isTulemusTie && isEnnustusTie)
        || (isTulemusAwayTeamWin && isEnnustusAwayTeamWin)) {
      return 5;
    } else {
      return 0;
    }

  } else {
    return "Vigane ennustus";
  }
}

