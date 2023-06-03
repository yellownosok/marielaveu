function generateM() {
    var afrmt = [ 
   
    '<img src="images/img_01.jpg">',
    '<img src="images/img_02.jpg">',
    '<img src="images/img_03.jpg">',
    '<img src="images/img_04.jpg">',
    '<img src="images/img_05.jpg">',
    '<img src="images/img_06.jpg">',
    '<img src="images/img_07.jpg">',
    '<img src="images/img_08.jpg">',
    '<img src="images/img_09.jpg">',
    '<img src="images/img_10.jpg">',
    '<img src="images/img_11.jpg">',
    '<img src="images/img_12.jpg">',
    '<img src="images/img_13.jpg">',
    '<img src="images/img_14.jpg">',
    '<img src="images/img_15.jpg">',
    '<img src="images/img_16.jpg">',
    '<img src="images/img_17.jpg">',
    '<img src="images/img_18.jpg">',
    '<img src="images/img_19.jpg">',
    '<img src="images/img_20.jpg">',
    '<img src="images/img_21.jpg">',
    '<img src="images/img_22.jpg">',
    '<img src="images/img_23.jpg">',
    '<img src="images/img_24.jpg">',
    '<img src="images/img_25.jpg">',
    '<img src="images/img_26.jpg">',
    '<img src="images/img_27.jpg">',
    '<img src="images/img_28.jpg">',
    '<img src="images/img_29.jpg">',
    '<img src="images/img_30.jpg">',
    
    
    
    
    
    
];

var m=document.querySelector(".div3");
m.innerHTML=afrmt[Math.floor(Math.random()*afrmt.length)];
}
//style="width: 500px;