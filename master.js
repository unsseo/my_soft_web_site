var Links = {
  setColor: function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
    alist[i].style.color = color;
    i = i + 1;
  }
  }
};

var Body = {
  setColor: function(color){
  document.querySelector('body').style.color = color;
},
  SetBGColor: function(color){
  document.querySelector('body').style.backgroundColor = color;
  }
};


function nightDayHandler(self){
  var target = document.querySelector('body');

  if(self.value == 'night'){
    //bodySetBGColor('black');
    Body.SetBGColor('black');
    //bodySetColor('white');
    Body.SetColor('white');
    self.value = 'day';
    //linkssetColor('powderblue');
    Links.setColor('powderblue');


  } else {
    Body.SetBGColor('white');
    Body.SetColor('black');
    self.value = 'night';
    //linkssetColor('blue');
    Links.setColor('blue');

  }
}
