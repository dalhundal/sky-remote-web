$(function() {
	$('button[data-command]').bind('click',function() {
		var $this = $(this);
		console.log("CLICKED", $this.data('command'));
		$.post('/control',{
			command: $this.data('command'),
			ip: $('#ip').val()
		});
	})
});