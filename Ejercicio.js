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

// CREATE TABLE

let table = document.createElement("table");
table.className = "table table-striped";
table.id = "myTable"
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById("body").appendChild(table);

// CREATE BUTTON DELETE ALL

let rem = document.createElement('button')
rem.className = "btn btn-primary mb-2"
rem.type = "button"
rem.innerHTML = "Delete All"
document.getElementById("form").appendChild(rem);

rem.onclick = function() {
    let table = document.getElementById("myTable")
    deleteT(table)
}

// --------------------------------------------------------------------------

get_Data( (value) => {
  data = value;

  // HEADERS

  let row_1 = document.createElement("tr");
  row_1.className = "table-dark";
  let heading_1 = document.createElement("th");
  let heading_2 = document.createElement("th");
  let heading_3 = document.createElement("th");
  let heading_4 = document.createElement("th");
  let heading_5 = document.createElement("th");

  heading_1.innerHTML = "#";
  heading_2.innerHTML = "Event";
  heading_3.innerHTML = "🐿️";
  heading_4.innerHTML = "Delete";
  heading_5.innerHTML = "Update";

  row_1.appendChild(heading_1);
  row_1.appendChild(heading_2);
  row_1.appendChild(heading_3);
  row_1.appendChild(heading_4);
  row_1.appendChild(heading_5);
  thead.appendChild(row_1);

  // INFORMATION

  let register = 0;

  for(let i = 0; i < data.length; i++) {

    // Each row
    let events = data[i].events;
    let pass = data[i].squirrel;
    register++;

    // Register on table
    let row = document.createElement("tr");
    let number = document.createElement("td");
    let event = document.createElement("td");
    let occurs = document.createElement("td");
    let dele = document.createElement("td");
    let upde = document.createElement("td");

    let del = document.createElement("button");
    del.innerHTML = "Delete";

    del.onclick = function() {
        deleteRow(del)
      }

    let upd = document.createElement("button");
    upd.innerHTML = "Update";

    number.innerHTML = register;
    event.innerHTML = events;
    occurs.innerHTML = pass;
    dele.appendChild(del)
    upde.appendChild(upd)
  
    row.appendChild(number);
    row.appendChild(event);
    row.appendChild(occurs);
    row.appendChild(dele);
    row.appendChild(upde);

    thead.appendChild(row);

  }

  // SORTED

  heading_1.onclick = function() {
    sortTable(0)
  }

  heading_2.onclick = function() {
    sortTable(1)
  }

  heading_3.onclick = function() {
    sortTable(2)
  }

  // MOUSE

  thead.addEventListener("mouseover", function( event ) {

    event.target.style.color = "orange";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);

  }, false);

  // ADD NEW

  add.onclick = function() {

    // OBTENER DATOS DEL FORM

    let one = document.getElementById("EV").value;
    let two = document.getElementById("AR").value;

    // Register on table - SAME

    register++;

    let row = document.createElement("tr");
    let number = document.createElement("td");
    let event = document.createElement("td");
    let occurs = document.createElement("td");
    let dele = document.createElement("td");
    let upde = document.createElement("td");

    let del = document.createElement("button");
    del.innerHTML = "Delete";

    del.onclick = function() {
        deleteY(del)
      }

    let upd = document.createElement("button");
    upd.innerHTML = "Update";

    number.innerHTML = register;
    event.innerHTML = one;
    occurs.innerHTML = two;
    dele.appendChild(del)
    upde.appendChild(upd)
  
    row.appendChild(number);
    row.appendChild(event);
    row.appendChild(occurs);
    row.appendChild(dele);
    row.appendChild(upde);

    thead.appendChild(row);

    // Reset
    let form = document.getElementById("form");
    form.reset();
    
  }


});

// ... Sort Table Function: https://www.w3schools.com/howto/howto_js_sort_table.asp

function sortTable(n) {

    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    dir = "asc";

    while (switching) {

      switching = false;
      rows = table.rows;

      for (i = 1; i < (rows.length - 1); i++) {

        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];

        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }

      if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          switchcount ++;

      } else {

          if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
          }
      }
    }
  }

// REMOVE ROW

function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// --------------------------------------------------------------------------

// REMOVE TABLE

function deleteT(btn) {
    btn.remove()

    // CREATE TABLE

    let table = document.createElement("table");
    table.className = "table table-striped";
    table.id = "myTable"
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById("body").appendChild(table);

    // HEADERS

    let row_1 = document.createElement("tr");
    row_1.className = "table-dark";
    let heading_1 = document.createElement("th");
    let heading_2 = document.createElement("th");
    let heading_3 = document.createElement("th");
    let heading_4 = document.createElement("th");
    let heading_5 = document.createElement("th");

    heading_1.innerHTML = "#";
    heading_2.innerHTML = "Event";
    heading_3.innerHTML = "🐿️";
    heading_4.innerHTML = "Delete";
    heading_5.innerHTML = "Update";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    row_1.appendChild(heading_5);
    thead.appendChild(row_1);

}
