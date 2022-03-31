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
  $('a[href*=#]').bind('click', function(e) {
      e.preventDefault(); // prevent hard jump, the default behavior

      obj.target = $(this).attr("href"); // Set the target as variable

      // perform animated scrolling by getting top-position of target-element and set it as scroll target
      $('html, body').stop().animate({
          scrollTop: obj.target.offset().top
      }, 600, function() {
          location.hash = obj.target; //attach the hash (#jumptarget) to the pageurl
      });

      return false;
  });
});


$(window).scroll(function() {
  obj.scrollDistance = $(window)?.scrollTop();

  $('.subcategory-items-wrap').each(function(i) {
      if ($(this).position().top <= obj.scrollDistance) {
          $('.menu-list li.active').removeClass('active');
          $('.menu-list li').eq(i).addClass('active');
      }
  });
}).scroll();
}
}
