function generateQuote() {
    let quotes = [
      "The best way to defeat someone is to beat him at politeness. - 'Umar ibn Al-Khattab(RA)'",
      "I have never regretted my silence, as for my speech I've regretted it many times. - 'Umar ibn Al-Khattab(RA)'",
      "Through patience great things are accomplished. - 'Ali Ibn Abi Talib(RA)' ",
      "There is peace in solitude, away from the evils of people.- 'Ali Ibn Abi Talib(RA)'",
      "One should not feel happy at the acquisition of wealth nor should be feel aggrieved at its loss.- 'Usman bin Affan(RA)' ",
      "Silence is the best cure of the malady of anger. - 'Usman bin Affan(RA)'",
      "Beware of pride because you will be returning to the earth, and your body will be eaten up by the worms. - 'Abu Bakr As-Siddiq(RA)'",
      "Life comes to pass, yet death is very much closer. - 'Abu Bakr As-Siddiq(RA)'",
      "When I am in the battlefield, I love it more than my wedding night with the most beautiful of women. ― 'Khalid ibn al-Walid(RA)'",
      "Do not say that! How few are the Romans and how numerous are we ! 'An army's strength lies not in numbers of men but in Allah's help, and its weakness lies in being forsaken by Allah - 'Khalid ibn al-Walid(RA)'",
    ];
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    let quote = document.getElementById("quote").innerHTML=quotes[randomNumber];
  }