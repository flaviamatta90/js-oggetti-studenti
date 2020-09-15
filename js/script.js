// start
$(document).ready(
  function (){

    // 1 Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
    var proprietà = {
      'Nome' : 'Flavia',
      'Cognome' : 'Matta',
      'Eta' : 30
    };

    for (var key in proprietà){
      // console.log(key + " " + proprietà[key]);
    }

    // 2 Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
    var studenti =  [
  {
    'Nome' : 'Alberto',
    'Cognome' : 'Bianchi',
  },

  {
    'Nome' : 'Antonio',
    'Cognome' : 'Rossi',
  },

  {
    'Nome' : 'Angela',
    'Cognome' : 'Neri',
  },

  {
    'Nome' : 'Bianca',
    'Cognome' : 'Bianchi',
  },

  {
    'Nome' : 'Azzurra',
    'Cognome' : 'Di Battisti',
  },

  {
    'Nome' : 'Celeste',
    'Cognome' : 'Verdi',
  },
];

  for(var i = 0; i < studenti.length; i++){

    for (var key in studenti[i]){

      console.log(key, studenti[i][key]);

    }
  };
    // 3 Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.












  }
  );
