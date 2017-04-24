document.querySelector('button').onclick = function(){
  var area = document.querySelector('textarea').value;
  var grafo = document.createElement('p');
  var br = document.createElement('br');
  grafo.innerText = area;
  grafo.setAttribute("class","p1");
  var bot = document.createElement('p');
  var falabot = ["Como vai você ?","HA     HA    HA","Você se hidrata?","Ata meu","FON","ENTROSA NÃO","Beijinhos, rsrs"];
  bot.innerText = falabot[(parseInt(Math.random()*7))];
  bot.setAttribute("class","p2");
  document.querySelector('textarea').value = '';
  if (area==="") {

  }else {
    postagens.appendChild(grafo);
    postagens.appendChild(br);
    postagens.appendChild(bot)
  }
}
