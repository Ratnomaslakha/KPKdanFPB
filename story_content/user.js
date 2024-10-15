function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6NDYxinJ6bk":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="musikku1.mp3";
audio.load();
audio.play();
audio.volume=0.5;
}

