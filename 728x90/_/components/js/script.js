function startAd(){  
    var ptl = new TimelineLite();
    ptl.from("#p1", .6, {y: -90, opacity:0, ease: Power3.easeOut})
    .to("#p1", .25, {opacity:0, ease:Power3.easeOut}, 1.5)
    .from("#p2", .25, {opacity:0, ease:Power3.easeOut}, 1.5)
    .to("#p2", .6, {opacity:0, ease:Power3.easeOut}, 4)
    .from("#p3a", .6, {y: -90, opacity:0, ease: Power3.easeOut}, 4)
    .to("#p3a", .25, {opacity:0, ease:Power3.easeOut}, 5.5)
    .from("#p3", .25, {opacity:0, ease:Power3.easeOut}, 5.5)
    .to("#p3", .6, {opacity:0, ease:Power3.easeOut}, 8.5)
    .from("#p4", .6, {y: -90, opacity:0, ease: Power3.easeOut}, 8.5)
    .from("#sparkle", 1.3, {rotation:-360, opacity:0, ease:Power3.easeOut}, 9)
    .to("#p4", .6, {opacity:0, ease:Power3.easeOut}, 11.9)
    .to("#sparkle", .6, {opacity:0, ease:Power3.easeOut}, 11.9);
    var ttl = new TimelineLite();
    ttl.from("#t1", .6, {y:100, opacity:0, ease: Power3.easeOut}, .4)
        .to("#t1", .6, { opacity:0, ease:Power3.easeOut}, 4)
        .from("#t2", .6, {y:100, opacity:0, ease: Power3.easeOut}, 4.4)
        .to("#t2", .6, { opacity:0, ease:Power3.easeOut}, 8.5)
        .from("#t3", .6, {y:100, opacity:0, ease: Power3.easeOut}, 9.15);
    var ctl = new TimelineLite();
    ctl.from("#bradCtaButton", .4, {opacity:0,ease: Power3.easeOut});
    var ftl = new TimelineLite();
    ftl.from("#bradFlare", 1.4, { opacity:0, ease:Power3.easeOut})
    cptl.from("#p5", .6, {y:100, opacity:0, scale:.8, ease: Power3.easeOut}, "cptl")
        .to("#p5", .6, {y:-90, opacity:0, scale:.8, ease:Power3.easeOut}, .9)
        .from("#p6", .6, {y:100, opacity:0, scale:.8, ease: Power3.easeOut}, 1)
        .to("#p6", .6, {y:-90, opacity:0, scale:.8, ease:Power3.easeOut}, 1.7)
        .from("#p7", .6, {y:100, opacity:0, scale:.8, ease: Power3.easeOut}, 1.8)
        .to("#p5", .1, {y:100, opacity:0, ease: Power3.easeOut}, 1.8)
        .to("#p7", .6, {y:-90, opacity:0, scale:.8, ease:Power3.easeOut}, 2.6)
        .to("#p5", .6, {y: 0, opacity:1, scale:1, ease: Power3.easeOut}, 2.6);
    
    tl.add(ptl, 0);
    tl.add(ttl,0);
    tl.add(cptl, 12.2);
    tl.add(ctl, 8.5);
    tl.add(ftl, 9);
    
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
       tl.play(12.9);
  } 
});


$( "#bradContent" ).mouseout(function() {
     if(!tl.isActive()){
      tl.seek(15.3);
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