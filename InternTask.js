const data = '{"success":true, "timestamp":1626358024, "base":"EUR", "date":"2021-07-15", "rates":{ "AUD":1.587608, "BGN":1.955832,"GBP":0.852723,"USD":1.181998,"UYU":51.973196,"UZS":12570.550887,"VEF":252746931045.85898,"VND":27195.948945,"VUV":130.160103,"WST":3.016053,"XAG":0.044949,"XAU":0.000648,"XCD":3.19441, "XDR":0.830564 }}';

const mydata = JSON.parse(data);

var body = document.querySelector('body');
body.style.margin = '0px';
body.style.padding = '0px';
body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/f/f9/Money_Cash.jpg')";

var header = document.createElement('header');
header.style.backgroundColor = 'rgb(29, 201, 179)';
header.style.height = '60px';
header.style.padding = '30px';
header.style.margin = '0px';
header.style.borderBottomLeftRadius = '10%';
header.style.borderBottomRightRadius = '10%';

var p1 = document.createElement('p');
p1.appendChild(document.createTextNode('Forex trading page'));
p1.style.margin = '0px';
p1.style.fontSize = '25px';
p1.style.color = 'white';
p1.style.textDecoration = 'underline';
p1.style.fontWeight = 'bold';
header.appendChild(p1);
body.appendChild(header);





var ul = document.createElement('ul');
ul.style.listStyleType = 'none';
ul.className = 'unordered list';
ul.style.padding = '300px';
ul.style.paddingTop = '200px';

var currencies = new Array(['EURAUD', 'EURBGN', 'EURGBP', 'EURUSD',
                            'EURUYU', 'EURUZS', 'EURVEF', 'EURVND',
                            'EURVUV', 'EURWST', 'EURXAG', 'EURXAU',
                            'EURXCD', 'EURXDR']);


for(var k in mydata.rates) {
  var li = document.createElement('li');
  li.className = 'list currencies';
  var liCurr = document.createElement('div');
  var liRate = document.createElement('span');
  liCurr.className = 'currencies';
  liRate.className = 'rate';
  var h2 = document.createElement('h2');
  var h5 = document.createElement('h5');
  h2.className = 'first';
  h5.className = 'second';
  h2.appendChild(document.createTextNode('EUR' + k))
  liCurr.appendChild(h2);
  liCurr.appendChild(h5);
  liRate.appendChild(document.createTextNode(mydata.rates[k].toFixed(4)));
  li.appendChild(liCurr);
  li.appendChild(liRate);
  ul.appendChild(li);
}

body.appendChild(ul);
var list = document.querySelectorAll("li");
var currToCurr = document.getElementsByClassName('first');
var currencyToCurrency = document.getElementsByClassName('second');


list[0].children[0].querySelector('h5').appendChild(document.createTextNode('EURO / AUSTRALIAN DOLLAR'));
list[1].children[0].querySelector('h5').appendChild(document.createTextNode('EURO / BULGARIAN LV'));
list[2].children[0].querySelector('h5').appendChild(document.createTextNode('EURO / BRITISH POUND'));
list[3].children[0].querySelector('h5').appendChild(document.createTextNode('EURO / U.S. DOLLAR'));
list[4].children[0].querySelector('h5').appendChild(document.createTextNode('EURO / URUGUAYAN PESO'));
list[5].children[0].querySelector('h5').appendChild(document.createTextNode('EURO / UZBEKISTANI SOM'));
list[6].children[0].querySelector('h5').appendChild(document.createTextNode('EURO / VENEZUELAN BOLIVAR'));
list[7].children[0].querySelector('h5').appendChild(document.createTextNode('EURO / VIETNAMESE DONG'));
list[8].children[0].querySelector('h5').appendChild(document.createTextNode('EURO / NI-VANUATU VATU'));
list[9].children[0].querySelector('h5').appendChild(document.createTextNode('EURO / SAMOAN TALA'));
list[10].children[0].querySelector('h5').appendChild(document.createTextNode('EURO / SILVER OUNCE'));
list[11].children[0].querySelector('h5').appendChild(document.createTextNode('EURO / GOLD OUNCE'));
list[12].children[0].querySelector('h5').appendChild(document.createTextNode('EURO / CARIBBEAN DOLLAR'));
list[13].children[0].querySelector('h5').appendChild(document.createTextNode('EURO / IMF SPECIAL DRAWING RIGHTS'));


for(var i=0; i<list.length; i++) {
  list[i].style.display = 'flex';
  list[i].style.justifyContent = 'space-between';
  list[i].style.flexDirection = 'row';
  list[i].style.backgroundColor = 'white';
  list[i].style.alignItems = "center";
  list[i].style.paddingTop = "10px";
  list[i].style.paddingBottom = "10px";
  list[i].style.paddingLeft = "30px";
  list[i].style.paddingRight = "30px";
  list[i].style.marginBottom = "5px";
  list[i].style.border = "2px solid grey";
  list[i].children[0].style.fontWeight = 'bold';
  list[i].children[0].style.color = 'rgb(25, 84, 255)';
  currToCurr[i].style.margin = "0px";
  currencyToCurrency[i].style.color = 'black';
  currencyToCurrency[i].style.margin = "0px";
  list[i].children[1].style.color = 'black';
  list[i].children[1].style.height = "20px";
  list[i].children[1].style.marginBottom = "0px";
}




function increase() {
  for(var i=0; i<list.length; i++) {
     var x = parseFloat(list[i].children[1].textContent);
     list[i].children[1].textContent =  (x + 0.0001).toFixed(4);
     if(x < parseFloat(list[i].children[1].textContent)) {
       list[i].children[1].style.backgroundColor = 'green';
     }
     else {
       list[i].children[1].style.backgroundColor = 'red';
     }
   }
};


function decrease() {
  for(var i=0; i<list.length; i++) {
      var x = parseFloat(list[i].children[1].textContent);
      if(x < parseFloat(list[i].children[1].textContent)) {
        list[i].children[1].style.backgroundColor = 'green';
      }
      else {
        list[i].children[1].style.backgroundColor = 'red';
      }
    }
};



function stop(e) {
  clearInterval(e);
};





function doThat() {
  function second() {
    setTimeout( function(){
      var var2 = setInterval(decrease, 5000);
      setTimeout(stop, 60000, var2);
      }, 60000);
  };

  function first() {
    var var1 = setInterval(increase, 5000);
    setTimeout(stop, 60000, var1);
  };
  first();
  second();
};

doThat();
var res = setInterval(doThat, 120000);
setTimeout(stop, 240001, res);

function checkForResize() {
  for(var i=0; i<list.length; i++) {
    if (window.innerWidth < 850) {
      list[i].style.flexDirection = 'column';
      ul.style.paddingLeft = "30px";
    }
    else {
      list[i].style.flexDirection = 'row';
      ul.style.padding = '300px';
      ul.style.paddingTop = '200px';
    }
  }
}

window.addEventListener('resize', checkForResize);
