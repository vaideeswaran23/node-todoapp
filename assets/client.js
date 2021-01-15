function validateForm() {
    var x = document.forms["todoForm"]["task"].value;
    if (x == "") {
      alert("Task cannot be empty");
      return false;
    }
  }

  const tags = document.getElementsByTagName('li');
  for (let i = 0, len = tags.length; i < len; i++)
  {
  
      (function(index){
        tags[i].onclick = function(){
            fetch(`/todo?index=${i}`, { method: 'DELETE' })
            .then(function (response) {
                document.location.replace("/")
              })
        }    
      })(i);
  
  }