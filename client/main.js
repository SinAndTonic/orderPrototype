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
  }
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    Reveal.initialize();
  }
});