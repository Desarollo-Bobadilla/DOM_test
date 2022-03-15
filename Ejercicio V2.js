const url = "https://gist.githubusercontent.com/josejbocanegra/b1873c6b7e732144355bb1627b6895ed/raw/d91df4c8093c23c41dce6292d5c1ffce0f01a68b/newDatalog.json";

let data = [];

function get_Data(callback) {
  fetch(url).then(res => res.json()).then(res => {
    callback(res);
  });
}

// --------------------------------------------------------------------------

// CREATE BUTTON ADD

let add = document.createElement('button')
add.className = "btn btn-primary mb-2"
add.type = "button"
add.innerHTML = "ADD NEW"
document.getElementById("form").appendChild(add);

// CREATE BUTTON DELETE ALL

let rem = document.createElement('button')
rem.className = "btn btn-primary mb-2"
rem.type = "button"
rem.innerHTML = "Delete All"
document.getElementById("form").appendChild(rem);

rem.onclick = function() {
    let cards = document.getElementsByTagName("div")

    for(let i = 4; i < cards.length; i++){
        cards[i].remove()
    }
}

// --------------------------------------------------------------------------

get_Data( (value) => {
  data = value;

  // INFORMATION

  let register = 0;

  for(let i = 0; i < data.length; i = i+2) {

    // Each row
    let events = data[i].events;
    let pass = data[i].squirrel;
    register++;

    // CREAR ESTRUCTURA
    let row = document.createElement("div")
    row.className = "row"

    let card = document.createElement("div")
    card.className = "card"

    let card_body = document.createElement("div")
    card_body.className = "card-body"

    let title = document.createElement("h5")
    title.className = "card-title"
    title.innerHTML = events

    let text = document.createElement("p")
    pass.className = "card-text"
    pass.innerHTML = pass
    
    let num = document.createElement("p")
    num.className = "card-text"
    num.innerHTML = register

    let del = document.createElement("button");
    del.innerHTML = "Delete";

    del.onclick = function() {
        deleteRow(del)
      }

    let upd = document.createElement("button");
    upd.innerHTML = "Update";

    document.getElementById("body").appendChild(row);
    
    row.appendChild(card)
    card.appendChild(card_body)
    card_body.appendChild(title)
    card_body.appendChild(text)
    card_body.appendChild(num)
    card_body.appendChild(del)
    card_body.appendChild(upd)

    // MOUSE

    card.addEventListener("mouseover", function( event ) {

      event.target.style.color = "orange";
  
      // reset the color after a short delay
      setTimeout(function() {
        event.target.style.color = "";
      }, 500);

      }, false);
    }

});

// REMOVE ROW

function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
