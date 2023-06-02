function generateM() {
    var afrmt = [ 
   
    '<img src="images/img_01.png">',
    '<img src="images/img_02.png">',
    '<img src="images/img_03.png">',
    '<img src="images/img_04.png">',
    
    
    
    
];

var m=document.querySelector(".div2");
m.innerHTML=afrmt[Math.floor(Math.random()*afrmt.length)];
}
//style="width: 500px;