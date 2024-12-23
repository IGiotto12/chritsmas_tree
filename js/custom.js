// Custom Script
// Developed by: Samson.Onna
// CopyRights : http://webthemez.com

/*
Theme by: WebThemez.com
Note: donate to remove backlink form the site
*/

// Show the pop-up when the page loads
window.addEventListener("load", () => {
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("overlay");
  popup.style.display = "block";
  overlay.style.display = "block";
});

// Play music when the button is clicked
document.getElementById("playMusicButton").addEventListener("click", () => {
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("overlay");
  const music = document.getElementById("bgMusic");
  
  // Add error handling for audio playback
  music.play().catch(function(error) {
    console.log("Audio playback failed:", error);
  });
  
  // Hide the pop-up and overlay after ensuring music starts
  popup.style.display = "none";
  overlay.style.display = "none";
});

var chritsmas = "December  24, 2024 00:00:00"
var testDate = new Date();
testDate.setSeconds(testDate.getSeconds() + 5); 
// CountDown logic
$( function() {
        var endDate = testDate; 
        $('.countdown.styled').countdown({
          date: endDate,
          render: function(data) {
            $(this.el).html(
              "<div>" + this.leadingZeros(data.days, 2) + " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
          },
          onEnd: function () {
            $(this.el).hide();
            
            // Hide the logo
            document.querySelector('.logo').style.display = 'none';
            const messageSection = document.getElementById('messageSection');
            
            // Step 1: Fade out the old content
            messageSection.classList.add('hidden');
            
            // Step 2: Wait for the fade-out transition to complete
            setTimeout(() => {
              // Step 3: Replace the content with chat bubble and image
              messageSection.innerHTML = `
              <div class="message-container">
                  <div class="message-content">
                      <div class="message-row">
                          <div class="greeting-bubble">
                              <strong id='typewriter-text'></strong>
                          </div>
                      </div>
                    <div class="gift-boxes">
                      <div class="gift-box" id="giftBox">
                          <div class="gift-box-lid">🎄</div>
                          <div class="gift-box-content">
                              <img src='images/tree.png' alt="Christmas Tree" class="hidden-tree">
                          </div>
                      </div>
                      <div class="gift-box" id="giftBox1">
                          <div class="gift-box-lid">🎁</div>
                          <div class="gift-box-content">
                              <img src='images/package.jpg' alt="pacakge" class="hidden-package">
                          </div>
                      </div>
                    </div>
                  </div>
              </div>
          `;
                
                // Add gift box click handler
                const giftBox = document.getElementById('giftBox');
                giftBox.addEventListener('click', function() {
                    this.classList.toggle('opened');
                });

                // Add gift box click handler
                const giftBox1 = document.getElementById('giftBox1');
                giftBox1.addEventListener('click', function() {
                    this.classList.toggle('opened');
                });

                // Step 4: Fade in the new content
                messageSection.classList.remove('hidden');
                messageSection.classList.add('visible');

                // Destroy the initial background before starting slideshow
                $.backstretch("destroy", false);
                
                // Initialize backstretch slideshow after countdown
                $.backstretch([
                  "images/img1.jpg",
                  "images/img3.jpg",
                  "images/img4.jpg",
                  "images/img5.jpg",
                  "images/img6.jpg",
                  "images/img7.jpg",
                  "images/img8.jpg",
                  "images/img9.jpg",
                  "images/img10.jpg",
                  "images/img11.jpg",
                  "images/img12.jpg",
                  "images/img13.jpg",
                  "images/img14.jpg",
                  "images/img15.jpg",
                  "images/img16.jpg",
                  "images/img17.jpg",
                  "images/img18.jpg",
                  "images/img19.jpg",
                  "images/img20.jpg",
                  "images/img21.jpg",
                  "images/img22.jpg",
                ], {duration: 2500, fade: 500});

                // Step 5: Typewriter effect
                const textElement = document.getElementById('typewriter-text');
                const text = "圣诞快乐秀琪！我期待以后和你一起渡过的每个圣诞以及其他节日，想在每一个重要的日子里都给你准备一份用心的礼物，想和你在一起久一点再久一点。遇见你是一个美丽的意外，和你的相知是一种无法自拔的缘分，到现在相互的喜欢是我最想守护的东西，和你在一起的日子是我向往的每一天，我深知你很重要但我也更希望你也能知道你自己很重要，从一开始我就不希望你遇到我之后还会觉得孤单，就是像之前跟你说过的一样，有事没事我都在会一直找你玩的。我之前对自己说过，我其中一个人生目标就是找到重要的人，我很希望你能一直在我心里这个位子上，让我的心里有些分量，让我牵挂。有些时候我太喜欢和你在一起的感觉了，让我充满能量，以至于分开的时候我会格外地想你，就像现在这样。我爱你呀，希望你会喜欢我的礼物，更重要的是也喜欢我";
                
                // Pre-render all characters
                [...text].forEach(char => {
                    const span = document.createElement('span');
                    span.className = 'char';
                    span.textContent = char;
                    textElement.appendChild(span);
                });
                
                // Animate characters one by one
                const chars = textElement.querySelectorAll('.char');
                function animateChars(index = 0) {
                    if (index < chars.length) {
                        chars[index].classList.add('fade-in');
                        setTimeout(() => animateChars(index + 1), 250);
                    }
                }
                
                // Start the animation
                animateChars();
            }, 400);
          }
        });
		
		
      });
   
   
var customScripts = {
 
    onePageNav: function () {

        $('#mainNav').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {
              alert(" 恋爱请拨打电话给佳麒同学，\n 关于更多信息请拨打电话给佳麒同学 \n 联系方式：vx、xhs、dy、facetime, 火速联系");
            },
            end: function () {
              //I get fired when the animation is ending
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
						$('.header').removeClass('addBg');
				}
				
            },
            scrollChange: function ($currentListItem) {
                //I get fired when you enter a section and I pass the list item of the section
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
						$('.header').removeClass('addBg');
				}
			}
        });
		
		$("a[href='#top']").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
			$("a[href='#basics']").click(function () {
                $("html, body").animate({ scrollTop: $('#services').offset().top}, "slow"); 
                return false;
            });
    },   
    init: function () {
        customScripts.onePageNav();
    }
}
$('document').ready(function () {
	 // Set single initial background
	 $.backstretch("images/img0.jpg");
	 
	 customScripts.init();
	$('#services .col-md-3, #features, #aboutUs, #clients, #portfolio, #plans, #contactUs .parlex-back').css('opacity','0');
	$( "#menuToggle" ).toggle(function() {
	$(this).find('i').removeClass('fa-bars').addClass('fa-remove');
	 $('#mainNav').animate({"right":"0px"}, "slow");
	}, function() {
	  $('#mainNav').animate({"right":"-200px"}, "slow");
	  $(this).find('i').removeClass('fa-remove').addClass('fa-bars');
	});	
});