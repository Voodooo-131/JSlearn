var name = prompt("Введите логин","");
if (name == "Админ")
	{
      var password = prompt("Введите пароль","");
      if (password == "Чёрный Властелин")
      	{	
      		alert("Добро пожаловать!");
      	}
      else 
      	{
      		alert("Пароль неверен");
      	}
    } 
else 
    {
      alert("Я вас не знаю");
    }