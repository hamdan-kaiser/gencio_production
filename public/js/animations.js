gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin);

gsap.utils.toArray('.all_title').forEach(all_title=>{
    gsap.fromTo(all_title,{
        letterSpacing:'10px',
        opacity:0,
        x:300,
        skewX:65
    },{
        letterSpacing:'0',
        opacity:1,
        x:0,
        skewX:0,
        duration:0.7,
        delay:.5,
        scrollTrigger:all_title
    })
})


gsap.utils.toArray('.paragraph_lines').forEach(paragraph_lines => {
    const originalText = paragraph_lines.textContent;

    gsap.fromTo(paragraph_lines, {
      text: {
        value: randomizeText(originalText),
        scrambleText: {
          chars: 'AXdYcFGhBe0123456789!@#$%^&*()',
          speed: 1,
          duration: 3
        }
      },
      opacity: 0
    }, {
      text: originalText,
      opacity: 1,
      duration: 4,
      delay: 1,
      scrollTrigger:paragraph_lines
    });
  });

  function randomizeText(text) {
    return text.split('').map(char => {
      if (char !== ' ') {
        return String.fromCharCode(33 + Math.floor(Math.random() * 94));
      }
      return char;
    }).join('');
  }

  var tl = new TimelineMax({repeat: -1,repeatDelay: 2});

  tl.to('.glitch', 0.1, {skewX:70,ease: Power4.easeInOut})
  .to('.glitch', 0.04, {skewX:0,ease: Power4.easeInOut})
  .to('.glitch', 0.04, {opacity:0})
  .to('.glitch', 0.04, {opacity:1})
  .to('.glitch', 0.04, {x:-20})
  .to('.glitch', 0.04, {x:0})
  .add("split", 0)
  .to('.top', 0.5, {x:-60,ease: Power4.easeInOut},'split')
  .to('.bottom', 0.5, {x:60,ease: Power4.easeInOut},'split')
  .to('.glitch', 0.08, { className: '+=redShadow'},'split')
  
  .to('#txt', 0, { scale:1.1},'split')
  .to('#txt', 0, { scale:1}, "+=0.02")
  
  .to('.glitch', 0.08, { className: '-=redShadow'}, "+=0.09")
  .to('.glitch', 0.03,{ className: '+=greenShadow'},'split')
  .to('.glitch', 0.03,{ className: '-=greenShadow'},"+=0.01")
  
  .to('.top', 0.2, {x:0,ease: Power4.easeInOut})
  .to('.bottom', 0.2, {x:0,ease: Power4.easeInOut})
  
  .to('.glitch', 0.02, {scaleY:1.1,ease: Power4.easeInOut})
  .to('.glitch', 0.04, {scaleY:1,ease: Power4.easeInOut})
  