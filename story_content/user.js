function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6LexidbsrcA":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbz5TzbdgUekQ8_0J8V74HpRevX4Ly_mVGqZe54ICfe5FXvXMyWv09smGrDIWnO_9pda/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v10q1attempts:player.GetVar("v10q1attempts"),v10q1answeredcorrect:player.GetVar("v10q1answeredcorrect"),v10q2attempts:player.GetVar("v10q2attempts"),v10q2answeredcorrect:player.GetVar("v10q2answeredcorrect")})
	}
	)
}

