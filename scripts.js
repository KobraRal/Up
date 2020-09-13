class taskk{
constructor(title, text, priority, time, colour) {
    this.title = title;
    this.text = text;
    this.priority = priority;
    this.time = time;
    this.colour = colour;
  }
  get_title(){
    return this.title;
  }
  get_priority(){
    return this.priority;
    }
  get_time(){
    return this.time;
    }
  get_text(){
    return this.text;
  }
  get_colour(){
    return this.colour;
  }
};
let first = new taskk('Title', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid eaque eligendi error eveniet nostrum nulla pariatur repudiandae, veniam. Provident.', 'high', '11:00 01.01.2000','white')
var myArray1 = [];
var myArray2 = [];
var x = 0;
var x2 = 0;
//myArray1.push(first);

function addtasktodo(){
	let help = document.getElementsByName("gridRadios");
	let help1 = new Date();
	let help2;
	//console.log(help2);
	if(help[0].checked){
	help2 =help[0].value;
	}
	if(help[1].checked){
    	help2 =help[1].value;
    	}
    if(help[2].checked){
        help2 =help[2].value;
    }
    let next = new taskk(document.getElementById("inputTitle").value, document.getElementById("inputText").value, help2,  help1,'white')
    myArray1.push(next);
    building(x);
    x++;
}
function deletetask(help){
    let help1 = help;
    console.log(help);
    while(help1 <myArray1.length-1){
        myArray1[help1].title = myArray1[help1+1].title;
        myArray1[help1].text = myArray1[help1+1].text;
        myArray1[help1].priority = myArray1[help1+1].priority;
        myArray1[help1].time = myArray1[help1+1].time;
        myArray1[help1].colour = myArray1[help1+1].colour;
        help1++;
    }
    myArray1.pop();
    x--;
    document.getElementById('input' + (help)).innerHTML = '';
    while(help < myArray1.length){
    building(help);
    help++;
    }
}
function building(help){
    document.getElementById('input' + help).innerHTML = '<li class="list-group-item d-flex w-100 mb-2"><div class="w-100 mr-2"><div class="d-flex w-100 justify-content-between"><h5 class="mb-1">'+ (myArray1[help].get_title())+'</h5><div><small class="mr-2">'+(myArray1[help].get_priority())+' priority</small><small>'+(myArray1[help].get_time())+'</small></div></div><p class="mb-1 w-100">'+(myArray1[help].get_text())+'</p></div><div class="dropdown m-2 dropleft"><button class="btn btn-secondary h-100" type="button" id="dropdownMenuItem1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-ellipsis-v"></i></button><div class="dropdown-menu p-2 flex-column" aria-labelledby="dropdownMenuItem1"><button type="button" class="btn btn-success w-100" onclick="gocomplited('+help+')">Complete</button><button type="button" class="btn btn-info w-100 my-2">Edit</button><button type="button" class="btn btn-danger w-100" onclick="deletetask('+(help)+')">Delete</button></div></div></li><div id="input' + (help + 1) + '"></div>';
}
function building2(x2){
    document.getElementById('output' + x2).innerHTML = '<li class="list-group-item d-flex w-100 mb-2"><div class="w-100 mr-2"><div class="d-flex w-100 justify-content-between"><h5 class="mb-1">'+ (myArray2[x2].get_title())+'</h5><div><small class="mr-2">'+(myArray2[x2].get_priority())+' priority</small><small>'+(myArray2[x2].get_time())+'</small></div></div><p class="mb-1 w-100">'+(myArray2[x2].get_text())+'</p></div></li><div id="output' + (x2 + 1) + '"></div>';
}
function gocomplited(help){
    console.log(help);
    let hp = new taskk(myArray1[help].title,  myArray1[help].text, myArray1[help].priority, myArray1[help].time, myArray1[help].colour);
    myArray2.push(hp);
  /*  myArray2[x2].title = myArray1[help].title;
    myArray2[x2].text = myArray1[help].text;
    myArray2[x2].priority = myArray1[help].priority;
    myArray2[x2].time = myArray1[help].time;
    myArray2[x2].colour = myArray1[help].colour;*/

    console.log(x2);
    console.log(myArray2[x2].title);
    console.log(myArray2[x2].text);
    building2(x2);
    x2++;
    deletetask(help);
}
function sort_old(){
//1
    myArray1.sort(function compareNumbers1(a, b) {
                  return b.get_title() - a.get_title();
                  });
    let g = 0;
    document.getElementById('input0').innerHTML = '';
        while(g < myArray1.length){
        building(g);
        g++;
        }
//2
    myArray2.sort(function compareNumbers(a, b) {
                  return b.get_title() - a.get_title();
                  });
    let g1 = 0;
    document.getElementById('output0').innerHTML = '';
        while(g1 < myArray2.length){
        building2(g1);
        g1++;
        }
}
function sort_new(){
//1
    myArray1.sort(function compareNumbers2(a, b) {
                  return a.get_title() - b.get_title();
                  });
    let g2 = 0;
    document.getElementById('input0').innerHTML = '';
        while(g2 < myArray1.length){
        building(g2);
        g2++;
        }
//2
    myArray2.sort(function compareNumbers(a, b) {
                  return a.get_title() - b.get_title();
                  });
    let g3 = 0;
    document.getElementById('output0').innerHTML = '';
        while(g3 < myArray2.length){
        building2(g3);
        g3++;
        }
}
//<script src="scripts.js"></script>