function startAd(){  
    var ptl = new TimelineLite();
    ptl.from("#p1", .7, {x: -50, opacity:0, ease:Power3.easeOut})
    .to("#p1", .7, {opacity:0, ease:Power3.easeOut}, 1)
    .from("#p2", .7, {x: -100, opacity:0, ease:Power3.easeOut}, 1)
    .to("#p2", .7, {opacity:0, ease:Power3.easeOut}, 4)
    .from("#p3a", .7, {x: -150, opacity:0, ease:Power3.easeOut}, 4)
    .to("#p3a", .7, {opacity:0, ease:Power3.easeOut}, 5)
    .from("#p3", .7, {x: -150, opacity:0, ease:Power3.easeOut}, 5)
    .to("#p3", .7, {opacity:0, ease:Power3.easeOut}, 9)
    .from("#p4", .7, {x: -150, opacity:0, ease:Power3.easeOut}, 9)
    .from("#sparkle", 1, {rotation:360, opacity:0, ease:Power3.easeOut}, 9.5)
    .to("#p4", .7, {opacity:0, ease:Power3.easeOut}, 11.9)
    .to("#sparkle", .7, {opacity:0, ease:Power3.easeOut}, 11.9);
    var ttl = new TimelineLite();
    ttl.from("#t1", .7, {x: 300, opacity:0, ease:Power3.easeOut}, 1)
        .to("#t1", .7, { opacity:0, ease:Power3.easeOut}, 4)
        .from("#t2", .7, {x: 300, opacity:0, ease:Power3.easeOut}, 5)
        .to("#t2", .7, { opacity:0, ease:Power3.easeOut}, 9)
        .from("#t3", .7, {x: 300, opacity:0, ease:Power3.easeOut}, 9);
    var ctl = new TimelineLite();
    ctl.from("#bradCtaButton", .4, {opacity:0,ease: Power3.easeOut});
    cptl.from("#p5", .7, {x: -50, opacity:0, ease:Power3.easeOut}, "cptl")
        .to("#p5", .7, {x: -50, opacity:0, ease:Power3.easeOut}, .8)
        .from("#p6", .7, {x: -50, opacity:0, ease:Power3.easeOut}, .8)
        .to("#p6", .7, {x: -50, opacity:0, ease:Power3.easeOut}, 1.6)
        .from("#p7", .7, {x: -50, opacity:0, ease:Power3.easeOut}, 1.6);
    
    tl.add(ptl, 0);
    tl.add(ttl,0);
    tl.add(cptl, 12.2);
    tl.add(ctl, 11.5);
    
  tl.totalDuration(15);         
};

function addListeners(){
    document.getElementById("bradContent").addEventListener("click", clickthrough);
};

function clickthrough() {
    EB.clickthrough();
}


function animationComplete(evt){
};

function checkInit() {
              if (!EB.isInitialized()) {
                 EB.addEventListener(EBG.EventName.EB_INITIALIZED, onInit); 
                 // This code checks whether the EB object is initialized, if the object is initialized, it
                     //launches the function "onInit", otherwise "EB_INITIALIZED" event. 
              }
              else {
                      onInit();
               }         
               function onInit() {
    
    TweenLite.set("#bradContainer", {opacity:1});
    addListeners();
    startAd();
              } 
     }

window.addEventListener('load', checkInit);

var tl = new TimelineLite({onUpdate:updateSlider});
tl.eventCallback("onComplete", animationComplete);
var cptl = new TimelineLite();

$( "#bradContent" ).mouseover(function() {
     
   if(!tl.isActive()){
       tl.play(12.2);
  } 
});


$( "#bradContent" ).mouseout(function() {
     if(!tl.isActive()){
      // tl.seek(14.2);
      // tl.play();
  } 
});


$("#play").click(function() {
  //play() only plays forward from current position. If timeline has finished, play() has nowhere to go.
  //if the timeline is not done then play() or else restart() (restart always restarts from the beginning).

  if(tl.progress() != 1){
    //carl just changed this again
		tl.play();
  } else {
    tl.restart();
  }
});
		
$("#pause").click(function() {
		tl.pause();
});
		
$("#restart").click(function() {
		tl.restart();
});		
	
$("#slider").slider({
  range: false,
  min: 0,
  max: 100,
  step:.1,
  slide: function ( event, ui ) {
    tl.pause();
    //adjust the timeline's progress() based on slider value
    tl.progress( ui.value/100 );
    }
});	
		
function updateSlider() {
  $("#slider").slider("value", tl.progress() *100);
} 	