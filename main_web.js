//Makes the class tab1content the visible one first
document.getElementById("tab1Content").style.display="block";
document.getElementById("tab2Content").style.display="none";
document.getElementById("tab3Content").style.display="none";
document.getElementById("tab4Content").style.display="none";


function selectTab(tabIndex) {
    //Hides all tab
    document.getElementById("tab1Content").style.display="none";
    document.getElementById("tab2Content").style.display="none";
    document.getElementById("tab3Content").style.display="none";
    document.getElementById("tab4Content").style.display="none";

    //Show the selected tab
    document.getElementById("tab" + tabIndex + "Content").style.display="block";
}

//Changes the active class and the selected tab shows on click
document.getElementById("tab1").addEventListener("click", function(){
    document.getElementById("tab4").classList.remove("active");
    document.getElementById("tab3").classList.remove("active");
    document.getElementById("tab2").classList.remove("active");
    document.getElementById("tab1").classList.add("active");
    selectTab(1);
});
document.getElementById("tab2").addEventListener("click", function(){
    document.getElementById("tab4").classList.remove("active");
    document.getElementById("tab3").classList.remove("active");
    document.getElementById("tab2").classList.add("active");
    document.getElementById("tab1").classList.remove("active");
    selectTab(2);
});
document.getElementById("tab3").addEventListener("click", function(){
    document.getElementById("tab4").classList.remove("active");
    document.getElementById("tab3").classList.add("active");
    document.getElementById("tab2").classList.remove("active");
    document.getElementById("tab1").classList.remove("active");    
    selectTab(3);
});
document.getElementById("tab4").addEventListener("click", function(){
    document.getElementById("tab4").classList.add("active");
    document.getElementById("tab3").classList.remove("active");
    document.getElementById("tab2").classList.remove("active");
    document.getElementById("tab1").classList.remove("active");    
    selectTab(4);
});
