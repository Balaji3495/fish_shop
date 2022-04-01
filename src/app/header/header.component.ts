import { Component, OnInit } from '@angular/core';

import * as $ from "jquery";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  scrollDistance: any;
  target: any;
  use:any;
  elementPosition:any;
  scrollDist:any;
  ngOnInit(): void {
    let obj =this;
    var x = 0;
    $(document).ready(function(event){
      $(window ).scroll(function(){
        $(".website-header-main-container").css( {"margin-top":-window.scrollY});
      });
      $('html, body').scrollLeft(4000)
    });
 




$(document).ready(function() {
  
  // $('a[href*=#]').bind('click', function(e) {
  //   alert("i");
  //     e.preventDefault(); // prevent hard jump, the default behavior

  //     obj.target = $(this).attr("href"); // Set the target as variable

  //     // perform animated scrolling by getting top-position of target-element and set it as scroll target
  //     $('html, body').stop().animate({
  //         scrollTop: obj.target.offset().top
  //     }, 600, function() {
  //         location.hash = obj.target; //attach the hash (#jumptarget) to the pageurl
  //     });

  //     return false;
  // });

  
});


$(window).scroll(function() {
  obj.scrollDistance = $(window)?.scrollTop();

  $('.subcategory-items-wrap').each(function(i) {
    
      if ($(this).position().top <= obj.scrollDistance) {
          $('.menu-list li.active').removeClass('active');
          $('.menu-list li').eq(i+1).addClass('active');
      }
     
  });
  obj.elementPosition = $('.header-search').offset();
  if( obj.scrollDistance> obj.elementPosition.top){
    $('.header-search').css('position','fixed').css('top','0');
} else {
  $('.header-search').css('position','static');
}
}).scroll();
// obj.elementPosition = $('.header-search').offset();

// $(window).scroll(function(){
//   obj.scrollDist = $(window).scrollTop();
//   alert("sad")
//         if( obj.scrollDist> obj.elementPosition.top){
//               $('.header-search').css('position','fixed').css('top','0');
//         } else {
//             $('.header-search').css('position','static');
//         }    
// });
}


}
