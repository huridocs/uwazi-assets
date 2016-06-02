$(document).ready(function(){

	/*
	 * Create a new reference, from paragraph to paragraph
	 * /

	 	var step = 1;

	 	// 1. activate add button
	 	$('article').click(function() {
			if(step == 1) {
				console.log('activate add button');
				$('.float-btn__main').toggleClass('cta');
				$('.float-btn__main i').toggleClass('fa-bar-chart fa-plus');
				$('.document-article:first-child b').addClass('is-active');
				step ++;
			}
	 	});

	 	// 2. activate sidebar
		$('.float-btn').click(function() {
			if(step == 2) {
				console.log('activate sidebar');
				$('main').addClass('is-active');
				$('aside').addClass('is-active');
				$('.float-btn__main').toggleClass('cta disabled');
				$('.float-btn__main i').toggleClass('fa-plus fa-arrow-right');
				step ++;
			}
		});

		// 3. activate next document
		$('.item').click(function() {
			if(step == 3) {
				console.log('activate next document');
				$(this).toggleClass('is-selected');
				$('.float-btn__main').toggleClass('cta disabled');
				step ++;
			}
		});

		// 4. open next document
		$('.float-btn').click(function() {
 		 	if(step == 4) {
			 	console.log('open second document');
 			 	$('main').toggleClass('is-active is-active-2');
 			 	$('aside').toggleClass('is-active');
 			 	$('.float-btn__main').toggleClass('cta disabled');
 			 	$('.float-btn__main i').toggleClass('fa-arrow-right fa-save');
			 	step ++;
		 	}
 	 	});

		// 5. activate save button
	 	$('article').click(function() {
			if(step == 5) {
				console.log('activate save button');
				$('.float-btn__main').toggleClass('cta disabled');
				step ++;
			}
	 	});

		// 6. save successful relationship
		$('.float-btn').click(function() {
 		 	if(step == 6) {
			 	console.log('save successful relationship');
				$('.alert-success').slideDown();
				$('.document-article:last-child b').addClass('is-active');
		 	}
 	 	});

	/**/

	/*
	 * Showing references
	 */


	 	 $('.item').mouseenter(function() {
	 		 var idSource = $(this).attr('id');
	 		 var idTarget = '#' + idSource.replace('aside-', '');
	 		 $(this).addClass('relationship-hover');
	 		 $(idTarget).addClass('is-hover');
	 	 });

	 	 $('.item').mouseleave(function() {
	 		 var idSource = $(this).attr('id');
	 		 var idTarget = '#' + idSource.replace('aside-', '');
	 		 $(this).removeClass('relationship-hover');
	 		 $(idTarget).removeClass('is-hover');
	 	 });

	 	 $('.item').click(function() {
	 		 var idSource = $(this).attr('id');
	 		 var idTarget = '#' + idSource.replace('aside-', '');
	 		 $('.item').removeClass('relationship-active');
	 		 $('article a').removeClass('is-active');
	 		 $(this).addClass('relationship-active');
	 		 $(idTarget).addClass('is-active');
	 	 });


	 	 $('article a').mouseenter(function() {
	 		 var idSource = $(this).attr('id');
	 		 var idTarget = '#aside-' + idSource;
	 		 $(this).addClass('is-hover');
	 		 $(idTarget).addClass('relationship-hover');
	 	 });

	 	 $('article a').mouseleave(function() {
	 		 var idSource = $(this).attr('id');
	 		 var idTarget = '#aside-' + idSource;
	 		 $(this).removeClass('is-hover');
	 		 $(idTarget).removeClass('relationship-hover');
	 	 });

	 	 $('article a').click(function(e) {
			 e.preventDefault();
	 		 var idSource = $(this).attr('id');
	 		 var idTarget = '#aside-' + idSource;
			 $('main').addClass('is-active');
			 $('aside').addClass('is-active');
	 		 $('.item').removeClass('relationship-active');
	 		 $('article a').removeClass('is-active');
	 		 $(this).addClass('is-active');
	 		 $(idTarget).addClass('relationship-active');
	 	 });

		 $('.fa-close').click(function() {
			 $('main').toggleClass('is-active');
			 $('aside').toggleClass('is-active');
			 $('.item').removeClass('relationship-active');
	 		 $('article a').removeClass('is-active');
		 });

	 var step = 1;

	 // 1. activate button
	 $('.float-btn').mouseenter(function() {
		 if(step == 1) {
			 console.log('activate button');
			 $(this).addClass('active');
			 step ++;
		 }
	 });

	 // 2. activate sidebar
	 $('.float-btn__sec').click(function() {
		 if(step == 2) {
			 console.log('activate sidebar');
			 $('main').addClass('is-active');
			 $('aside').addClass('is-active');
			 $('.float-btn').removeClass('active');
			 step ++;
		 }
	 });

	 // 3. scroll to relationship
	 $('#aside-rel4').click(function() {
		 if(step == 3) {
			 console.log('scroll to relationship');
			 $('html,body').animate({scrollTop: $('#rel4').offset().top - 560}, 'slow');
			 step ++;
		 }
	 });

	 // 4. scroll to card
	 $('#rel3').click(function() {
		 if(step == 4) {
			 console.log('scroll to card');
			 $('.item-group').animate({scrollTop: 200}, 'slow');
			 step ++;
		 }
	 });

	 /**/

	 /*
 	 * Showing modals on uploads
 	 * /

	 $('body').click(function() {
		 	setTimeout(function(){
		 		$('.item1 .progress-bar').width('100%');
				$('.item1 .label span').text('100% Complete');
			}, 1000);

			setTimeout(function(){
				$('.item1 .progress').fadeOut();
				$('.item1 .label').attr('data-toggle', 'modal').attr('data-target', '#modal-danger').toggleClass('label-info label-danger');
				$('.item1 .label .fa').toggleClass('fa-upload fa-close');
				$('.item1 .label span').text('Invalid file type');
				$('.item1').toggleClass('item4 item1');
			}, 2000);
	 });

	 /**/

});
