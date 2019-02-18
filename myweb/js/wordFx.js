// ============== 글씨 효과 마크업 ============================= //
$(function(){
	const effects =[
	// Effect 1
	{
		options:{
		shapeColors: ['#6435ea','#295ddc','#9fd7ff','#d65380','#0228f7','#242627']
	},
		hide:{
			lettersAnimationOpts:{
				duration: 800,
				delay: (t,i) => i*40,
				easing: 'easeOutExpo',
				opacity:{
					value: 0,
					duration: 100,
					delay: (t,i) => i*40,
					easing: 'linear'
				},translateY: ['0%', '100%']
			}
		},
		show:{
			lettersAnimationOpts:{
				duration: 800,
				delay: (t,i) => i*40,
				easing: 'easeOutElastic',
				opacity: [0,1],
				translateY: ['100%', '0%']
			},
				shapesAnimationOpts:{
					duration: 300,
					delay: (t,i) => i*30+100,
					easing: 'easeOutQuad',
					translateY: () => [anime.random(-15,15),anime.random(-200,200)],
					scale: () => [0.2,randomBetween(0.5,1)],
					opacity:[
						{
						value: 1,
						duration:1,
						delay: (t,i) => i*30+100
						},
						{
							value: 0,
							duration: 200,
							delay:200,
							easing: 'linear'}
						]
					}
				}
			}
		];
// =================== 메인 애니메이션 글씨 반복 효과 =========================== //
		class Slideshow {
			constructor(el) {
				this.DOM = {};
				this.DOM.el = el;
				this.DOM.slides = Array.from(this.DOM.el.querySelectorAll('.slide'));
				this.DOM.bgs = Array.from(this.DOM.el.querySelectorAll('.slide__bg'));
				this.DOM.words = Array.from(this.DOM.el.querySelectorAll('.word'));
				this.slidesTotal = this.DOM.slides.length;
				this.current = 0;
				this.words = [];
				this.DOM.words.forEach((word, pos) => {
					this.words.push(new Word(word, effects[pos].options));
				});
				this.isAnimating = true;
				this.words[this.current].show(effects[this.current].show).then(() => this.isAnimating = false);
			}
			show(direction) {
				if ( this.isAnimating ) return;
				this.isAnimating = true;

				let newPos;
				let currentPos = this.current;
				if ( direction === 'next' ) {
					newPos = currentPos < this.slidesTotal - 1 ? currentPos+1 : 0;
				}
				else if ( direction === 'prev' ) {
					newPos = currentPos > 0 ? currentPos-1 : this.slidesTotal - 1;
				}

				anime({
					targets: this.DOM.bgs[currentPos],
					duration: 600,
					easing: [0.2,1,0.3,1],
					translateY: ['0%', direction === 'next' ? '-100%' : '100%'],
					complete: () => {
						this.DOM.slides[currentPos].classList.remove('.st-panel');
						this.DOM.slides[currentPos].style.opacity = 1;
						this.DOM.slides[newPos].classList.add('.st-panel');
						this.words[newPos].show(effects[newPos].show).then(() => this.isAnimating = false);
					}
				});
				this.words[newPos].hide();
				this.words[this.current].hide(effects[currentPos].hide).then(() => {
					this.current = newPos;
				});
			}
		}
		const slideshow = new Slideshow(document.querySelector('.slideshow'));
		document.querySelector('.st-control').addEventListener('click', () => slideshow.show('prev') );
		document.addEventListener('keydown', (ev) => {//keydown 키를 누를때마다 이벤트가 반복적으로 전송합니다
			const keyCode = ev.keyCode || ev.which;
			if ( keyCode === 37 ) {
				slideshow.show('prev');
			}
			else if ( keyCode === 39 ) {
				;
			}

			"use strict";
		  $(function() {
		    function animated_contents() {
		      $(".zt-skill-bar > div ").each(function (i) {
		        var $this  = $(this),
		        skills = $this.data('width');
						$this.css({'width' : skills + '%'});
					});
		    }
				if(jQuery().appear){
		      $('.zt-skill-bar').appear().on('appear', function() {
		        animated_contents();
		      });
		    }
				else{
		      animated_contents();
		    }
		  });
		})
	})
// ================= 메인글씨 애니메이션 효과  ======================== //
{
    // From https://davidwalsh.name/javascript-debounce-function.
	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
  };
  // From http://snipplr.com/view/37687/random-number-float-generator/
  function randomBetween(minValue,maxValue,precision){
    if( typeof(precision) == 'undefined' ){precision = 2;}
    	return parseFloat(Math.min(minValue + (Math.random() * (maxValue - minValue)),maxValue).toFixed(precision));
    }
    let winsize = {width: window.innerWidth, height: window.innerHeight};

    class Shape {
      constructor(type, letterRect, options) {
      	this.DOM = {};
        this.options = {
          shapeTypes: ['circle', 'rect', 'polygon'],
          shapeColors: ['#e07272', '#0805b5', '#49c6ff', '#8bc34a', '#1e1e21', '#e24e81', '#e0cd24'],
          shapeFill: true,
          shapeStrokeWidth: 1
        }
        Object.assign(this.options, options);
        this.type = type || this.options.shapeTypes[0];
        if ( this.type !== 'random' && !this.options.types.includes(this.type) ) return;
        if (this.type === 'random') this.type = this.options.shapeTypes[randomBetween(0,this.options.shapeTypes.length-1,0)];
        this.letterRect = letterRect;
        this.init();
      }
      init() {
      	this.DOM.el = document.createElementNS('http://www.w3.org/2000/svg', this.type);
        this.DOM.el.style.opacity = 0;
        this.configureShapeType();

				if (this.options.shapeFill){
          this.DOM.el.setAttribute('fill', this.options.shapeColors[randomBetween(0,this.options.shapeColors.length-1,0)]);
        }
        else{
          this.DOM.el.setAttribute('fill', 'none');
          this.DOM.el.setAttribute('stroke-width', this.options.shapeStrokeWidth);
          this.DOM.el.setAttribute('stroke', this.options.shapeColors[randomBetween(0,this.options.shapeColors.length-1,0)]);
        }
      }
      configureShapeType() {
        this.DOM.el.style.transformOrigin = `${this.letterRect.left + this.letterRect.width/2}px ${this.letterRect.top + this.letterRect.height/2}px`;
				if (this.type === 'circle'){
          const r = 0.5*this.letterRect.width;
          this.DOM.el.setAttribute('r', r);
          this.DOM.el.setAttribute('cx', this.letterRect.left + this.letterRect.width/2);
          this.DOM.el.setAttribute('cy', this.letterRect.top + this.letterRect.height/2);
        }
        else if(this.type === 'rect') {
          const w = randomBetween(0.05,0.5,3)*this.letterRect.width;
          const h = randomBetween(0.05,0.5,3)*this.letterRect.height;
          this.DOM.el.setAttribute('width', w);
          this.DOM.el.setAttribute('height', h);
          this.DOM.el.setAttribute('x', this.letterRect.left + (this.letterRect.width-w)/2);
          this.DOM.el.setAttribute('y', this.letterRect.top + (this.letterRect.height-h)/2);
        }
        else if ( this.type === 'polygon' ) {
          this.DOM.el.setAttribute('points', `${this.letterRect.left} ${this.letterRect.top+this.letterRect.height}, ${this.letterRect.left+this.letterRect.width/2} ${this.letterRect.bottom-this.letterRect.width}, ${this.letterRect.left+this.letterRect.width} ${this.letterRect.top+this.letterRect.height}`);
        }
      }//configureShapeType()
      onResize( letterRect ){
        this.letterRect = letterRect;
        this.configureShapeType();
      }
    };//class Shape

    class Letter {
      constructor(el, svg, options) {
        this.DOM = {};
        this.DOM.el = el;
        this.DOM.svg = svg;
        this.options = {
          totalShapes: 10
        }
        Object.assign(this.options, options);
          this.rect = this.DOM.el.getBoundingClientRect();
          this.totalShapes = this.options.totalShapes;
          this.init();
          this.initEvents();
      }//constructor
      init(){
        this.shapes = [];
        for(let i = 0; i <= this.totalShapes-1; ++i){
          const shape = new Shape('random', this.rect, this.options);
          this.shapes.push(shape);
          this.DOM.svg.appendChild(shape.DOM.el);
        }
      }
      initEvents(){
        window.addEventListener('resize', debounce(() => {
          this.rect = this.DOM.el.getBoundingClientRect();
          for (let i = 0; i <= this.totalShapes-1; ++i) {
            const shape = this.shapes[i];
            shape.onResize(this.rect);
          }
        },20));
      }
    };

    class Word{
      constructor(el, options){
      	this.DOM = {};
        this.DOM.el = el;
        this.options ={
        	shapesOnTop:false
        }
        Object.assign(this.options, options);
          this.init();
          this.initEvents();
      }
      init(){
        this.createSVG();
        charming(this.DOM.el);
        this.letters = [];
        Array.from(this.DOM.el.querySelectorAll('span')).forEach(letter => this.letters.push(new Letter(letter, this.DOM.svg, this.options)));
      }
      initEvents(){
        window.addEventListener('resize', debounce(() => {
          winsize = {width: window.innerWidth, height: window.innerHeight};
          this.DOM.svg.setAttribute('width', `${winsize.width}px`);
          this.DOM.svg.setAttribute('height',`${winsize.width}px`);
          this.DOM.svg.setAttribute('viewbox',`0 0 ${winsize.width} ${winsize.height}`);
        },20));
      }
      createSVG(){
        this.DOM.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.DOM.svg.setAttribute('class', 'shapes');
        this.DOM.svg.setAttribute('width', `${winsize.width}px`);
        this.DOM.svg.setAttribute('height',`${winsize.width}px`);
        this.DOM.svg.setAttribute('viewbox',`0 0 ${winsize.width} ${winsize.height}`);
        if(this.options.shapesOnTop){
          this.DOM.el.parentNode.insertBefore(this.DOM.svg, this.DOM.el.nextSibling);
        }
        else{
          this.DOM.el.parentNode.insertBefore(this.DOM.svg, this.DOM.el);
        }
      }
      show(config){
        return this.toggle('show', config);
      }
      hide(config){
        return this.toggle('hide', config);
      }
      toggle(action = 'show', config) {
        return new Promise((resolve, reject) => {
          const toggleNow = () => {
            for (let i = 0, len = this.letters.length; i <= len-1; ++i) {
              this.letters[i].DOM.el.style.opacity = action === 'show' ? 1 : 0;
            }resolve();
          };
          if (config && Object.keys(config).length !== 0){
            if (config.shapesAnimationOpts){
              for (let i = 0, len = this.letters.length; i <= len-1; ++i) {
                const letter = this.letters[i];
                setTimeout(function(letter){
                  return () => {
                		config.shapesAnimationOpts.targets = letter.shapes.map(shape => shape.DOM.el);
                    anime.remove(config.shapesAnimationOpts.targets);
                    anime(config.shapesAnimationOpts);
                  }
                } (letter),config.lettersAnimationOpts && config.lettersAnimationOpts.delay ? config.lettersAnimationOpts.delay(letter.DOM.el,i) : 0);
              }
            }
            if (config.lettersAnimationOpts ) {
              config.lettersAnimationOpts.targets = this.letters.map(letter => letter.DOM.el);
              config.lettersAnimationOpts.complete = () => {
              	if (action === 'hide'){
                  for (let i = 0, len = config.lettersAnimationOpts.targets.length; i <= len-1; ++i) {
                  	config.lettersAnimationOpts.targets[i].style.transform = 'none';
                  }
                }resolve();
              };
              anime(config.lettersAnimationOpts);
            }
						else{
              toggleNow();
            }
          }
          else{
            toggleNow();
          }
        });
      }
    };

    window.Word = Word;
};
	(function( $ ) {
  // "use strict";
  // $(function() {
  //   function animated_contents() {
  //     $(".zt-skill-bar > div ").each(function (i) {
  //       var $this  = $(this),
  //       skills = $this.data('width');
	// 			$this.css({'width' : skills + '%'});
	// 		});
  //   }
	// 	if(jQuery().appear){
  //     $('.zt-skill-bar').appear().on('appear', function() {
  //       animated_contents();
  //     });
  //   }
	// 	else{
  //     animated_contents();
  //   }
  // });

    // 스크롤 이용한 project 보이게 하기 //
	$(function() {
    var figure1=$('.gallery-figure').eq(0).position().top;
    var figure2=$('.gallery-figure').eq(1).position().top;
    var figure3=$('.gallery-figure').eq(2).position().top;
    var figure4=$('.gallery-figure').eq(3).position().top;
    var figure5=$('.gallery-figure').eq(4).position().top;
    var figure6=$('.gallery-figure').eq(5).position().top;
    $('#st-panel-4').scroll(function(){
      var panel4Scroll=$(this).scrollTop();
      // var figure1=Math.abs(panel4Scroll-$('.gallery-figure').eq(0).position().top);
      // var figure2=Math.abs(panel4Scroll-$('.gallery-figure').eq(1).position().top);
      // var figure3=Math.abs(panel4Scroll-$('.gallery-figure').eq(2).position().top);
      // var figure4=Math.abs(panel4Scroll-$('.gallery-figure').eq(3).position().top);
      // var figure5=Math.abs(panel4Scroll-$('.gallery-figure').eq(4).position().top);
      // var figure6=Math.abs(panel4Scroll-$('.gallery-figure').eq(5).position().top);
      // console.log(panel4Scroll, figure1, figure2, figure3, figure4, figure5, figure6);
        if(panel4Scroll > figure1 && panel4Scroll < figure2 ){
          $('#st-panel-4 figure').eq(0).addClass('fade-left')
            console.log('첫번째');
        }else if(panel4Scroll > figure2 && panel4Scroll < figure3 ){
          $('#st-panel-4 figure').eq(1).addClass('fade-right');
            console.log('두번째');
        }else if(panel4Scroll > figure3 && panel4Scroll < figure4 ){
					$('#st-panel-4 figure').eq(2).addClass('fade-left');
						console.log('세번째');
				}else if(panel4Scroll > figure4 && panel4Scroll < figure5 ){
					$('#st-panel-4 figure').eq(3).addClass('fade-right');
						console.log('네번째');
				}else if(panel4Scroll > figure5 && panel4Scroll < figure6){
					$('#st-panel-4 figure').eq(4).addClass('fade-left');
					console.log('다섯번째');
				}else if(panel4Scroll > figure6){
					$('#st-panel-4 figure').eq(5).addClass('fade-right');
					console.log('여섯번째');
				}
      });
				// $('.gallery-figure').addClass('fade-left');
				// data-animation="fade-right"
				// $('.gallery-figure').removeClass('fade-right');
	}).resize();

}(jQuery));
