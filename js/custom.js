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
  // Hide the pop-up and overlay
  popup.style.display = "none";
  overlay.style.display = "none";
});

var chritsmas = "December  25, 2024 00:00:00"
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
                          <div class="profile-pic">
                              <img src='images/profile-img.jpeg' alt="Profile Picture">
                          </div>
                          <div class="greeting-bubble">
                              <strong id='typewriter-text'></strong>
                          </div>
                      </div>
                      <div class="celebration-image">
                          <img src='images/tree.png' alt="Christmas Tree" style="max-width: 100%; height: auto;">
                      </div>
                  </div>
              </div>
          `;
                
                // Step 4: Fade in the new content
                messageSection.classList.remove('hidden');
                messageSection.classList.add('visible');

                // Step 5: Typewriter effect
                const textElement = document.getElementById('typewriter-text');
                const text = "圣诞快乐！虽然这个圣诞没有陪在你身边，但是我期待以后和你一起渡过的每个圣诞以及每个节日，想在每一个重要的日子里都给你一份用心的礼物，想和你在一起久一点再久一点， 我爱你呀！";
                
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
            }, 500);
          }
        });

        $('.countdown.callback').countdown({
          date: +(new Date) + 10000,
          render: function(data) {
            $(this.el).text(this.leadingZeros(data.sec, 2) + " sec");
          },
          onEnd: function() {
            $(this.el).addClass('ended');
          }
        }).on("click", function() {
          $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
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
	 $.backstretch([
      "images/img1.jpg"
    , "images/img2.jpg"
    , "images/img3.jpg"
    , "images/img4.jpg"
    , "images/img5/jpg"
  ], {duration: 3000, fade: 1250});
  
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