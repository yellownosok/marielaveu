function generateM() {
    var afrmt = [ 
   
    '<img src="images/img1.png">',
    '<img src="images/img2.png">',
    '<img src="images/img3.png">',
    '<img src="images/img4.png">',
    '<img src="images/img5.png">',
    '<img src="images/img6.png">',
    '<img src="images/img7.png">',
    
    
    
];

var m=document.querySelector(".div2");
m.innerHTML=afrmt[Math.floor(Math.random()*afrmt.length)];
}
//style="width: 500px;