function knockoutPunktid(tulemus, ennustus) {
  if (tulemus.trim() == "") {
    return 0;
  }
  
  if (!(typeof tulemus === 'string' && typeof ennustus === 'string')) {
    return -1;
  }

  let tulemusSplit = tulemus.trim().split(" ");
  let ennustusSplit = ennustus.trim().split(" ");

  let tulemusSkoor = tulemusSplit[0];
  let ennustusSkoor = ennustusSplit[0];

  let jooksvadPunktid = grupiPunktid(tulemusSkoor, ennustusSkoor);
  console.log("jooksvad punktid", jooksvadPunktid);

  // skoor normaalajal
  if (tulemusSplit.length == 1) {
    // 1-0 ja 1-0
    if (ennustusSplit.length == 1) {
      return jooksvadPunktid;
    }

    // 1-0 ja 1-0 ET
    if (ennustusSplit.length == 2) {
      return jooksvadPunktid - 2;
    }

    // 1-0 ja 1-1 P GER
    if (ennustusSplit.length == 3) {
      return "Vaata käsitsi";
    }
  }

  // skoor lisaajal
  if (tulemusSplit.length == 2) {
    // 1-0 ET ja 1-0
    if (ennustusSplit.length == 1) {
      return jooksvadPunktid;
    }

    // 1-0 ET ja 1-0 ET
    if (ennustusSplit.length == 2) {
      return jooksvadPunktid + 10;
    }

    // 1-0 ET ja 1-1 P GET
    if (ennustusSplit.length == 3) {
      return "Vaata käsitsti";
    }

  }

  // penaltiseeria
  if (tulemusSplit.length == 3) {
    if (ennustusSplit.length == 1 || ennustusSplit.length == 2) {
      return "Vaata käsitsi";
    }
    if (ennustusSplit.length == 3) {
      // 1-1 P GER ja 1-1 P GER
      if (tulemusSplit[2] == ennustusSplit[2]) {
        return jooksvadPunktid + 10;
      } else {
        // 1-1 P GER ja 1-1 P DEN
        return jooksvadPunktid + 10 - 5;
      }
    }
  }
  
}
