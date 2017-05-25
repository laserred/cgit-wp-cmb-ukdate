CMB.addCallbackForInit( function() {

	jQuery('body').on('focus', '.cgit_uk_datepicker', function () {
		jQuery(this).datepicker({ dateFormat: 'dd/mm/yy' });
	});

	jQuery('body').on('focus', '.cmb_timepicker', function () {
		jQuery(this).timePicker({
			startTime: "00:00",
			endTime: "23:30",
			show24Hours: false,
			separator: ':',
			step: 30
		});
	});

});
