    let sidebar = document.querySelector(".sidebar");
    let closeBtn = document.querySelector("#btn");
    let searchBtn = document.querySelector(".bx-search");

    closeBtn.addEventListener("click", ()=>{
      sidebar.classList.toggle("open");
      menuBtnChange();
    });

    document.getElementById("defaultOpen").click();

   function menuBtnChange() {
      if(sidebar.classList.contains("open")){
         closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      }else {
         closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
      }
    }

    function analysis(choose,elmnt,color){
      var i, content;
       content = document.getElementsByClassName("analysis_content");
       for (i = 0; i < content.length; i++) {
         content[i].style.display = "none";
       }
       if (choose=="Bus_P"){
        document.getElementById(choose).style.display = "block";                  
       }
       else if (choose=="Tram_P"){
        document.getElementById(choose).style.display = "block";                  
       }
       else if (choose=="Train_P"){
        document.getElementById(choose).style.display = "block";              
       }
       else if (choose=="VTrain_P"){
        document.getElementById(choose).style.display = "block";
       }                             
      }

    function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
       var i, tabcontent, tablinks;
       tabcontent = document.getElementsByClassName("tabcontent");
       for (i = 0; i < tabcontent.length; i++) {
         tabcontent[i].style.display = "none";
       }
       // Show the specific tab content

       if (pageName=="Home"){
         document.getElementById(pageName).style.display = "block";
       }
       else if (pageName=="Tram"){
         document.getElementById(pageName).style.display = "block";
       }
       else if (pageName=="About"){
        document.getElementById(pageName).style.display = "block";
      }
      else if (pageName=="Performance"){
        document.getElementById(pageName).style.display = "block";
        document.getElementById("default").click();
      }
       else if (pageName=="Bus"){
         // Map element
         document.getElementById(pageName).style.display = "block";       
        }
        else if (pageName=="Train"){
          document.getElementById(pageName).style.display = "block";
        }
      }

