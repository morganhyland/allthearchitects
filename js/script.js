
$(document).ready ( function() {

    var _times = $(".__time__item").text();
    var _time = _times.split(".")[0];

    // $(".__time__item").text(timeSince(Date.parse(_time)) + " ago.");
    $(".__time__item").text("in " + timeSince(Date.parse(_time)) + "");

    $(".__form__item").focus();
    // $(".__form__item").select();
    if( /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
      // $(".__link__instagram").attr("href","instagram://user?username=allthearchitects");
      // $(".__link__facebook").attr("href","fb://profile/1364924453549098");

      $(".__link__instagram" ).click(function(){
        var now = new Date().valueOf();
        setTimeout(function () {
          if (new Date().valueOf() - now > 100) return;
          window.location = "https://instagram.com/allthearchitects";
        }, 100);
        window.location = "instagram://user?username=allthearchitects";
      });
      $(".__link__facebook" ).click(function(){
        var now = new Date().valueOf();
        setTimeout(function () {
          if (new Date().valueOf() - now > 100) return;
          window.location = "https://facebook.com/allthearchitects";
          }, 25);
        window.location = "fb://profile/1364924453549098";
      });
    }

  $(".__screenshot__wrapper").click( function(){
    var _thisRowsCountriesLinks = $(this).closest(".__row__container").find(".__link__container");
    var _thisCountryIndex = $(this).closest(".__country__container").index();
    if (_checkSize() == "mobile")
        _toggleClass(_thisRowsCountriesLinks.slice(_thisCountryIndex, _thisCountryIndex + 1), "dn", "db")
    else if (_checkSize() == "tablet") {
      if ( _thisCountryIndex <= 1)
        _toggleClass(_thisRowsCountriesLinks.slice(0,2), "dn-m", "db-m")
      else
        _toggleClass(_thisRowsCountriesLinks.slice(2,4), "dn-m", "db-m")
    }
    else
      _toggleClass(_thisRowsCountriesLinks, "dn-l", "db-l")

  }); // click screenshot
  $(".__menu__toggle").click( function(){

    var _thisMenuItems = $(this).closest(".__row__container").find(".__menu__item");
    var _swap = [_thisMenuItems, $(this), ]
    _toggleClass(_thisMenuItems,"dn", "db");
    _toggleClass($(this),"dn", "db");
    if( $(this).hasClass("__menu__footer") == true )
      $(window).scrollTop(9999);


  }); // click menu toggle
}); // document ready

function _checkSize(){
  var mobileTest = $(".mobile-test").css("text-align");
  switch (mobileTest){
    case "left":
      return "mobile";
      break;
    case "center":
      return "tablet";
      break;
    case "right":
      return "desktop";
      break;
  }
}

function _toggleClass ( _itemApply, _classDefault, _classToggle) {

  if ( _itemApply.hasClass(_classDefault) ){
    _itemApply.each( function(){
      $(this).removeClass(_classDefault);
      $(this).addClass(_classToggle);
      var _position = $(this).parent().offset().top;
      $(window).scrollTop(_position);
    });
  }
  else if ( _itemApply.hasClass(_classToggle) ){
    _itemApply.each( function(){
      $(this).removeClass(_classToggle);
      $(this).addClass(_classDefault);
      var _position = $(this).parent().offset().top;
      $(window).scrollTop(_position);
    });
  }
}

function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);
    seconds = seconds * (-1)
    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}
