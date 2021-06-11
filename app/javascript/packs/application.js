// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap'
// require("stylesheets/application.scss")

Rails.start()
Turbolinks.start()
ActiveStorage.start()

// require("jquery");


import "controllers"

global.$ = require('jquery')

// console.log("Hello world!");
// $(function(){
//       $('#btn').click(function(){
//         window.location = '/tags/' + $('#tag_value').val()
//         console.log("Hello world!");
//       })
//     })

// $(':input').bind('keypress keydown keyup change',function(){
//     var word = $(':input[id="keyword"]').val();
//     $('a[id="searchlink"]').attr("href","/home/search?param1=" + word.toString());

// });


/// When you click everywhere in the document
$(document).click(function (event) {

  /// If *navbar-collapse* is not among targets of event
  if (!$(event.target).is('.navbar-collapse *')) {

    /// Collapse every *navbar-collapse*
    $('.navbar-collapse').collapse('hide');

  }
});






