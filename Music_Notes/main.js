/*
 * Auto-generated content from the Brackets New Project extension.
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, window, document */

// Simple jQuery event handler
$(document).ready(function() {
    $('#c').mousedown(function () {
        var cNote = document.getElementById('cAudio');
        cNote.currentTime= 0;
        cNote.play();
    });
     $('#a').mousedown(function () {
        var aNote = document.getElementById('aAudio');
        aNote.currentTime= 0;
        aNote.play();
    });

  $('#b').mousedown(function () {
        var bNote = document.getElementById('bAudio');
        bNote.currentTime= 0;
        bNote.play();
    });
    
    $('#d').mousedown(function () {
        var dNote = document.getElementById('dAudio');
        dNote.currentTime= 0;
        dNote.play();
    });
     $('#e').mousedown(function () {
        var eNote = document.getElementById('eAudio');
        eNote.currentTime= 0;
        eNote.play();
    });
     $('#f').mousedown(function () {
        var fNote = document.getElementById('fAudio');
        fNote.currentTime= 0;
        fNote.play();
    });
     $('#g').mousedown(function () {
        var gNote = document.getElementById('gAudio');
        gNote.currentTime= 0;
        gNote.play();
    });
    
});

