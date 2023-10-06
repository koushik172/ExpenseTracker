let list = document.getElementById("list");

let addButton = document.getElementById("add");

addButton.addEventListener("click", addItem);

list.addEventListener("click", removeItem);
list.addEventListener("click", editItem);

// Add item
function addItem() {
  let amount = document.getElementById("amount");
  let description = document.getElementById("description");
  let category = document.getElementById("category");

  let key = 0;

  if (localStorage.length > 0) {
    key = localStorage.length + 1;
  } else {
    key = 1;
  }

  let obj = {
    key: key,
    amount: amount.value,
    description: description.value,
    category: category.value,
  };

  item = JSON.stringify(obj);

  localStorage.setItem(key, item);
  var li = document.createElement("li");

  li.className = "";
  li.name = key;

  li.appendChild(
    document.createTextNode(
      obj.amount + " - " + obj.description + " - " + obj.category
    )
  );

  var deleteBtn = document.createElement("button");
  var editBtn = document.createElement("button");

  deleteBtn.className = "btn btn-danger btn-sm float-right delete ms-5";
  editBtn.className = "btn btn-primary btn-sm float-right edit ms-2";

  deleteBtn.appendChild(document.createTextNode("🗑️"));
  editBtn.appendChild(document.createTextNode("✏️"));

  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  list.appendChild(li);

  amount.value = "";
  description.value = "";
  category.value = "";
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      list.removeChild(li);
      localStorage.removeItem(li.name);
    }
  }
}

// Edit Items
function editItem(e) {
  if (e.target.classList.contains("edit")) {
    var li = e.target.parentElement;
    let data = JSON.parse(localStorage.getItem(li.name));
    console.log(data.key, li.name);
    localStorage.removeItem(li.name);
    document.getElementById("amount").value = data.amount;
    document.getElementById("description").value = data.description;
    document.getElementById("category").value = data.category;
    list.removeChild(li);
  }
}

// document.addEventListener("DOMContentLoaded", function () {
//   console.log(localStorage.length);
//   for (let i = 1; i <= localStorage.length; i++) {
//     let obj = localStorage.getItem(i);
//     obj = JSON.parse(obj);

//     var li = document.createElement("li");

//     li.className = "";
//     li.name = i;

//     li.appendChild(
//       document.createTextNode(
//         obj.amount + " - " + obj.description + " - " + obj.category
//       )
//     );

//     var deleteBtn = document.createElement("button");
//     var editBtn = document.createElement("button");

//     deleteBtn.className = "btn btn-danger btn-sm float-right delete ms-5";
//     editBtn.className = "btn btn-primary btn-sm float-right edit ms-2";

//     deleteBtn.appendChild(document.createTextNode("🗑️"));
//     editBtn.appendChild(document.createTextNode("✏️"));

//     li.appendChild(deleteBtn);
//     li.appendChild(editBtn);

//     list.appendChild(li);
//   }
// });
