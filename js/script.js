// start
$(document).ready(
  function (){

    // stampare a video con handbarbs
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);


    // 1 Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

    var proprieta = {
      'Nome' : 'Flavia',
      'Cognome' : 'Matta',
      'Eta' : 30,
    };

    for (var key in proprieta){
      console.log(key + " " + proprieta[key]);
    }

    var html = template(proprieta);

    $("#lista").append(html);

    // 2 Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
    // 3 Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

    var nomeUtente = prompt("Inserisci il nome dello studente")
    var cognomeUtente = prompt("Inserisci il cognome dello studente")
    var etaUtente = parseInt(prompt("Inserisci l'età dello studente"));

    var studenti =  [
  {
    'Nome' : 'Alberto',
    'Cognome' : 'Bianchi',
    'Eta' : 21,
  },

  {
    'Nome' : 'Antonio',
    'Cognome' : 'Rossi',
    'Eta' : 36,
  },

  {
    'Nome' : 'Angela',
    'Cognome' : 'Neri',
    'Eta' : 27,

  },

  {
    'Nome' : 'Bianca',
    'Cognome' : 'Bianchi',
    'Eta' : 24,
  },

  {
    'Nome' : 'Azzurra',
    'Cognome' : 'Di Battisti',
    'Eta' : 33,
  },

  {
    'Nome' : 'Celeste',
    'Cognome' : 'Verdi',
    'Eta' : 34,
  },

  {
    'Nome' : nomeUtente,
    'Cognome' : cognomeUtente,
    'Eta' : etaUtente,
  },
];

  for(var i = 0; i < studenti.length; i++){

    for (var key in studenti[i]){

      console.log(key, studenti[i][key]);

    }
  };





  }
  );
