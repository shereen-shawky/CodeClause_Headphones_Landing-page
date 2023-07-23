var sections=document.querySelectorAll("section");

onscroll=function(){
    var scrollposition=document.documentElement.scrollTop;

    sections.forEach((section)=>{

        if(scrollposition>=section.offsetTop-section.offsetHeight*0.25 &&
            scrollposition<section.offsetTop+section.offsetHeight*0.25)
            {
                var currentid=section.attributes.id.value;
                removeallactiveclasses();
                addactiveclass(currentid);
            }
    });
};

var removeallactiveclasses=function(){
    document.querySelectorAll("nav a").forEach((e)=>e.classList.remove("active"));
};

var addactiveclass=function(id){
    var selector=`nav a[href="#${id}"]`;
    document.querySelector(selector).classList.add("active");
};