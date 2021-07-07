


// Create a "close" span append it to each list item, gives each 'close' class
var nodeList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < nodeList.length; i++) {
  var span = document.createElement("SPAN");
  span.className = "close";
  span.innerHTML= '<i class="fas fa-trash"></i>'; // add trash can
  nodeList[i].appendChild(span);
}

//click on close trashcan to hide current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Please enter your next item");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = ""; // clears text input for next addition

  var span = document.createElement("SPAN");
  span.className = "close";
  span.innerHTML= '<i class="fas fa-trash"></i>';
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      
    }
  }
}


// event listener for on click of add button
var elButton = document.getElementById('add');
elButton.addEventListener('click',newElement, false);