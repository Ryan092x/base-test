function askQuestion() {
  var userInput = document.getElementById("user-input").value;
  if (userInput.trim() === "") {
    return;
  }

  var chatLog = document.getElementById("chat-log");
  chatLog.innerHTML += '<div class="user-message"> ' + userInput + "</div>";

  var resposta = obterRespostaDoCHAT(userInput);

  chatLog.innerHTML +=
    '<div class="gpt-message"><strong>AdvIA Pro</strong><br><p> ' +
    resposta +
    "</p></div>";

  document.getElementById("user-input").value = "";

  chatLog.scrollTop = chatLog.scrollHeight;
}

function obterRespostaDoCHAT(pergunta) {
  return "Isso é uma resposta fictícia do Advia.";
}

// Enter

function pressEnter() {
    var userInput = document.getElementById("user-input").value;
  if (userInput.trim() === "") {
    return;
  }

  var chatLog = document.getElementById("chat-log");
  chatLog.innerHTML += '<div class="user-message"> ' + userInput + "</div>";

  var resposta = obterRespostaDoCHAT(userInput);

  chatLog.innerHTML +=
    '<div class="gpt-message"><strong>AdvIA Pro</strong><br><p> ' +
    resposta +
    "</p></div>";

  document.getElementById("user-input").value = "";

  chatLog.scrollTop = chatLog.scrollHeight;
}

function obterRespostaDoCHAT(pergunta) {
  return "Isso é uma resposta fictícia do Advia.";
}

document.getElementById('myButton').addEventListener('click', askQuestion);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        pressEnter();
    }
});

    function resizeTextarea() {
        const textarea = document.getElementById('user-input');
        const scrollWidth = textarea.scrollWidth;
        const clientWidth = textarea.clientWidth;

        if (clientWidth === scrollWidth) {
            textarea.style.height = 'auto';
        }

        textarea.style.height = (textarea.scrollHeight) + 'px';
    }

    function resetTextarea() {
        const textarea = document.getElementById('user-input');
        textarea.style.height = '25px';
    }

    document.getElementById('user-input').addEventListener('keydown', function(event) {
      if (event.keyCode == 13) {
          event.preventDefault();
          resizeTextarea();
      }
  });