 
window.onkeydown=(function(e) {
        n = 4, m = 4;  


        
  //start           
            if (e.keyCode == 32) {   
mas = [];
mas_t2 = [];
mas_rez=[];               
      var number=1;
                  var rez=1;
          
   for (var i = 0; i < m; i++){
	mas[i] = [];
    mas_t2[i] = [];
   mas_rez[i]=[];
	for (var j = 0; j < n; j++){
		mas[i][j] = 0;
        mas_t2[i][j] = 0;
        mas_rez[i][j]=0;
       
  
}}    var aa=1; 
   for (var i = 0; i < m; i++){
       
   for (var j = 0; j < n; j++){
       if (aa==16)
           {aa=0;}
     mas_rez[i][j]=aa;  
   aa++;
}}  
               
         for (var a=1; a<16; a++)
        { number=a;     
         
         

    for(var i=0; i<100; i++)   
        {  
    random_i = Math.floor(Math.random() * 4+0) ; 
    random_j = Math.floor(Math.random() * 4+0);  
   
            if(  mas[random_i][random_j] == 0)
            {
              mas[random_i][random_j]=number;
             
                 i=100;
                 }              
        }   
            }      
         
       
                
     }       
  
      
      echo(); //виведення
      } );   
      
//_____________________________________________   
     function echo() 
{ 
mas_t = [];// temp
     
           for (var i = 0; i < m; i++){
     mas_t[i] = [];
               
    for (var j = 0; j < n; j++){   
     mas_t2[i][j]=mas[i][j];   
        if(mas[i][j]==0){
            
        
        mas_t[i][j]="";
    }
        else{
            mas_t[i][j]=mas[i][j];
            }
    }
                
           }          
 //___________________________________________     
      
   for (var i = 0; i < m; i++){    
    for (var j = 0; j < n; j++){   
        var ti=i, tj=j; 
      
        

      if (mas[i][j]!=0)  
        {
 document.getElementById("block_"+ti+tj).style.display = "block";
 document.getElementById("txtHint"+i+j).innerHTML=mas_t[i][j]; 
    
        }

        
        else {
    
document.getElementById("block_"+ti+tj).style.display = "none"; 
         
        

           //  document.getElementById("block_"+ti+tj).style.backgroundColor = "#c8c7c7";        
           
//         document.getElementById("txtHint333").innerHTML=mas+'kk'+mas_rez+'k'+ff;
            
             }
    }}
    var ff=0;
 for (var i = 0; i < m; i++){
       
   for (var j = 0; j < n; j++){
      if(mas[i][j]==mas_rez[i][j]) 
          {
             ff++; 
          }
       else{
           ff=ff;
       }
   
}}  
  
      if (ff==16)
            {alert('YOU WIN!'); ff=10;}   
    
              //   document.getElementById("block2").style.display = "block"; 
        
  //   document.getElementById("txtHint2").innerHTML=l; 
 
    
}                 
        



/* Определяем тип браузера */

  function f(el) {
 
 
  block=el.id;
  

	
	
	


  var ie = 0;
  var op = 0;
  var ff = 0;
  var browser = navigator.userAgent;
  var p=0;

   


        


  if (browser.indexOf("Opera") != -1) op = 1;
  else {
    if (browser.indexOf("MSIE") != -1) ie = 1;
    else {
      if (browser.indexOf("Firefox") != -1) ff = 1;
    }
  }
          
         block=document.getElementById(el.id);
        
    

    
  delta_x = 0;
  delta_y = 0;
  /* Ставим обработчики событий на нажатие и отпускание клавиши мыши */
  block.onmousedown = saveXY;
  if (op || ff) {
    block.addEventListener("onmousedown", saveXY, false);
  }
  document.onmouseup = clearXY;
  /* При нажатии кнопки мыши попадаем в эту функцию */
  function saveXY(obj_event2) {
    /* Получаем текущие координаты курсора */
    if (obj_event2) {
      x = obj_event2.pageX;
      y = obj_event2.pageY;
         
    }
    else {
      x = window.event.clientX;
      y = window.event.clientY;
      if (ie) {
        y -= 2;
        x -= 2;
      }
    }
    /* Узнаём текущие координаты блока */
    x_block = block.offsetLeft;
    y_block = block.offsetTop;
    /* Узнаём смещение */
    delta_x = x_block - x;
    delta_y = y_block - y;
    /* При движении курсора устанавливаем вызов функции moveWindow */
    document.onmousemove = moveBlock;
    if (op || ff)
      document.addEventListener("onmousemove", moveBlock, false);
  }
  function clearXY() {
    document.onmousemove = null; // При отпускании мыши убираем обработку события движения мыши
  }
        
  function moveBlock(obj_event2) {
    /* Получаем новые координаты курсора мыши */
    if (obj_event2) {
      x = obj_event2.pageX;
      y = obj_event2.pageY;
    }
    else {
      x = window.event.clientX;
      y = window.event.clientY;
      if (ie) {
        y -= 2;
        x -= 2;
      }
    }
    /* Вычисляем новые координаты блока */
    new_x = delta_x + x;
    new_y = delta_y + y;
 //   block.style.top = new_y + "px";
  //  block.style.left = new_x + "px";

   //   document.getElementById("txtHint333").innerHTML=new_x+' $ '+delta_x+' $ '+x+' $ '+ x_block+'$'+el.id+'y'+new_y+' $ '+delta_y+' $ '+y+' $ '+y_block;  
      

  //вправо
 
 var  rb=0;
 var  lb=0; 
 var  bb=0; 
 var  tb=0; 
 var vel=0;
 
                   if (el.id=="block_00"|el.id=="block_10"|el.id=="block_20"|el.id=="block_30")
                          {rb=1;lb=0;}
                      if (el.id=="block_01"|el.id=="block_11"|el.id=="block_21"|el.id=="block_31")
                                          {rb=2;lb=1;}
                      if (el.id=="block_02"|el.id=="block_12"|el.id=="block_22"|el.id=="block_32")
                                          {rb=3; lb=2;}
                      if (el.id=="block_03"|el.id=="block_13"|el.id=="block_23"|el.id=="block_33")
                                          {rb=4; lb=3;}   
      
                     if (el.id=="block_00"|el.id=="block_01"|el.id=="block_02"|el.id=="block_03")
                          {bb=1; tb=0;}
                      if (el.id=="block_10"|el.id=="block_11"|el.id=="block_12"|el.id=="block_13")
                                          {bb=2;tb=1;}
                      if (el.id=="block_20"|el.id=="block_21"|el.id=="block_22"|el.id=="block_23")
                                          {bb=3;tb=2;}
                      if (el.id=="block_30"|el.id=="block_31"|el.id=="block_32"|el.id=="block_33")
                                          {bb=4;tb=3;}    
                  //    document.getElementById("txtHint333").innerHTML="11rb"+rb+"lb"+lb;
      
     if (new_x>x_block+20)
          { 

     
     for  (var i = 0; i < m; i++){          
        for (var j = rb; j < n; j++){          
     
        if(mas[i][j]==0&&j!=0)   
        {
            mas[i][j]=mas[i][j-1]+mas[i][j];
            mas[i][j-1]=0;
        }
		
        }}    
    } 
//вліво         
 if (new_x+20<x_block)
          {       
    
             
    for (var i = 0; i < m; i++){   
    for (var j = 0; j < lb; j++){    
        if(mas[i][j]==0&&j!=3)   
        {
            mas[i][j]=mas[i][j+1]+mas[i][j];
            mas[i][j+1]=0;
        }
  		
        }}  
   }    
 
  //вниз     
 if (new_y>y_block+20)
          {   
    for (var i = bb; i < m; i++){
    for (var j = 0; j < n; j++){                
              

        if(mas[i][j]==0&&i!=0)   
        {
            mas[i][j]=mas[i-1][j]+mas[i][j];
            mas[i-1][j]=0;
        }
           if(mas[i][j]!=0)   
        {
            mas[i][j]=mas[i][j];
        }
		
        }}     
    }
 //вверх     
 if (new_y+20<y_block)
          {    
          
    for (var i = 0; i< tb; i++){
    for (var j = 0; j < n; j++){                
           if(mas[i][j]==0&&i!=3&&mas[i+1][j]!=0)   
        {
            mas[i][j]=mas[i+1][j]+mas[i][j];
            mas[i+1][j]=0;
          
          }	

}}                        
          }
      
      echo();
           
              
          
     }
}