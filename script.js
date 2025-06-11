function register()
    {
      let username=document.getElementById("username");
      let password=document.getElementById("password");
       
      let data={username:username.value,
        password:password.value}

        localStorage.setItem("data",JSON.stringify(data));
              alert("sign-in succesfull"); 

        if (!username.value || !password.value) {
  alert("Please fill in both fields.");
  return;
}


    
      }

    function login()
    {
      let username=document.getElementById("username");
      let password=document.getElementById("password");

  
       
      let info=JSON.parse(localStorage.getItem("data"));

      if (!username.value || !password.value) {
  alert("Please fill in both fields.");
  return;
}


      if(username.value===info.username && password.value===info.password)
      {
        alert("log-in sucessfull")
    window.location.href = "todo.html";  
        
      }
      else
      {
        console.log("error");

      }

    
      }

    


