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

		// 2. hover button
		$('.float-btn').mouseenter(function() {
			if(step == 2) {
				console.log('hover button');
				$('.float-btn').toggleClass('active');
				step ++;
			}
	 	});

	 	// 3. activate sidebar
		$('.float-btn__sec').click(function() {
			if(step == 3) {
				console.log('activate sidebar');
				$('main').addClass('is-active');
				$('aside').addClass('is-active');
				$('.float-btn').toggleClass('active');
				$('.float-btn__main').toggleClass('cta disabled');
				$('.float-btn__main i').toggleClass('fa-plus fa-arrow-right');
				step ++;
			}
		});

		// 4. activate next document
		$('.item').click(function() {
			if(step == 4) {
				console.log('activate next document');
				$(this).toggleClass('is-selected');
				$('.float-btn__main').toggleClass('cta disabled');
				step ++;
			}
		});

		// 5. open next document
		$('.float-btn').click(function() {
 		 	if(step == 5) {
			 	console.log('open second document');
 			 	$('main').toggleClass('is-active is-active-2');
 			 	$('aside').toggleClass('is-active');
 			 	$('.float-btn__main').toggleClass('cta disabled');
 			 	$('.float-btn__main i').toggleClass('fa-arrow-right fa-save');
			 	step ++;
		 	}
 	 	});

		// 6. activate save button
	 	$('article').click(function() {
			if(step == 6) {
				console.log('activate save button');
				$('.float-btn__main').toggleClass('cta disabled');
				step ++;
			}
	 	});

		// 7. save successful relationship
		$('.float-btn').click(function() {
 		 	if(step == 7) {
			 	console.log('save successful relationship');
				$('.alert-success').slideDown();
				$('.document-article:last-child b').addClass('is-active');
		 	}
 	 	});

	/**/

	/*
	 * Showing references
	 * /


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

	 /*
 	 * Loading document animation
 	 * /

	 $(window).load(function() {
		 setTimeout(function(){
			$('.document-viewer').show();
			$('.loader-doc').removeClass('loading');
		 }, 3000);
	 });

	 /**/

	 /*
 	 * Loading document animation
 	 * /

	 var step = 1;
	 $('.btn').click(function(e) {
		 e.preventDefault();
		 $('.loader').show();
		 $(this).hide();
		 if(step == 1) {
			 setTimeout(function(){
				 $('.btn').show();
				 $('#row2').show();
				 $('.loader').hide();
				 $('.documents-counter').text('24 of 32 documents for "africa"');
			 }, 3000);
		 } else if (step == 2) {
			 setTimeout(function(){
				 $('#row3').show();
				 $('.loader').hide();
				 $('.documents-counter').text('32 of 32 documents for "africa"');
			 }, 3000);
		 }
		 step ++;
	 });

	 /**/

	 /*
 	 * Loading document animation
 	 * /
	 var step = 1;

	 $('.btn').click(function(e) {
		 e.preventDefault();
		 if(step == 1) {
			 $('.login-password').addClass('has-error');
			 $('.login-password .btn').toggleClass('btn-default btn-danger');
		 } else if (step == 2) {
			 $('.login-password').slideUp();
			 $('.btn-primary').text('Send email with instructions').toggleClass('btn-primary btn-success');
		 } else if (step == 3) {
			 $('.alert-success').slideDown();
		 }
		 step ++;
	 });

	 /**/

	 /*
 	 * Float button workflow
 	 * /

	 $('.float-btn').mouseenter(function(){
		 $('.float-btn').addClass('active');
	 });

	 $('.float-btn').mouseleave(function(){
		 $('.float-btn').removeClass('active');
	 });

	 var step = 1;
	 $('.item, .float-btn__sec').click(function(){
		 if(step == 1) {
			 $('main').addClass('is-active');
			 $('aside').addClass('is-active');

			 $('.item').addClass('is-disabled');
			 $(this).removeClass('is-disabled').addClass('is-active');

			 if ($('.float-btn .fa').hasClass('fa-filter')) {
			 	 $('.float-btn .fa-filter').toggleClass('fa-filter fa-pencil');
				 $('.float-btn__main').addClass('cta');
			 } else if ($('.float-btn .fa').hasClass('fa-pencil')) {
				 $('.float-btn__main').addClass('cta');
			 } else if ($('.float-btn .fa').hasClass('fa-bar-chart')) {
				 $('.float-btn .fa-bar-chart').toggleClass('fa-bar-chart fa-pencil');
				 $('.float-btn__main').addClass('cta');
				 $('.float-btn').removeClass('active');
				 $('.float-btn__sec').hide();
				 $('.float-btn').prepend('<div class="float-btn__sec"><span>Download</span><i class="fa fa-download"></i></div><div class="float-btn__sec"><span>Delete</span><i class="fa fa-trash"></i></div><div class="float-btn__sec"><span>Publish</span><i class="fa fa-eye"></i></div>');
			 }
			 step ++;
		 }
	 });
	 $('.float-btn__main').click(function(){
		 if(step == 2) {
			 $('.float-btn .fa-pencil').toggleClass('fa-pencil fa-save');
			 $('.float-btn__main').addClass('disabled').removeClass('cta');
			 $('.float-btn').removeClass('active');
			 $('.metadata-text').hide();
			 $('.metadata-label').show();
			 step ++;
		 }
	 });

	 $('input').keyup(function(){
		 if(step == 3) {
			 $('.float-btn__main').removeClass('disabled').addClass('cta');
			 $('.float-btn__main span').text('Save');
			 $('.float-btn__sec').hide();
			 step ++;
		 }
	 });


	 $('.fa-close').click(function(){
		 $('main').removeClass('is-active');
		 $('aside').removeClass('is-active');
		 $('.item').removeClass('is-disabled is-active');
		 $('.float-btn__main').removeClass('cta');
		 $('.float-btn__main .fa-save').toggleClass('fa-save fa-filter');
	 });

	 /**/

	 /*
 	 * Collection name databinding
 	 */

	 $('input').keyup(function(){
		 $('h1').text($(this).val());
	 });

	 /**/

});
