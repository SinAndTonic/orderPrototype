import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import Reveal from 'reveal.js';
import moment from 'moment';
import 'reveal.js/js/reveal.js';


import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  //Reveal.initialize();
});

Template.hello.helpers({
  counter() {
    return moment(Date()).format('dddd');
  },
  slider(){
	return Slides.find();
  }
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    Reveal.initialize();
  }
});

Template.slide.helpers({
	getOne(){
		return Slides.findOne({}).url;
	}
});

Template.myForm.events({
  'change .myFileInput': function(event, template) {
    var files = event.target.files;
    for (var i = 0, ln = files.length; i < ln; i++) {
      Images.insert(files[i], function (err, fileObj) {
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      });
    }
  }
});

Template.imageView.helpers({
  images: function () {
    return Images.find(); // Where Images is an FS.Collection instance
  }
});