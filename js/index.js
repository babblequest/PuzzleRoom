$(document).ready(
		function() {
			$("#submit").attr("disabled", "disabled");

			$('#myform').bootstrapValidator({
				// To use feedback icons, ensure that you use Bootstrap v3.1.0
				// or later
				feedbackIcons : {
					valid : 'glyphicon glyphicon-ok',
					invalid : 'glyphicon glyphicon-remove',
					validating : 'glyphicon glyphicon-refresh'
				}
			});

			$("#submit").click(function() {

				$(".your-clock").hide();
				$('#success_message').slideDown({
					opacity : "show"
				}, "slow");
				$('#missle').attr("src", "images/destroy.gif");

				$("#submit").hide();
			});

			// Create fields with random string to avoid form caching
			randomString = Math.random().toString(36).replace(/[^a-z]+/g, '')

			// ///////////////////////////////////////
			// ADD FIELDS HERE FOR YOUR PUZZLE ROOM
			// ///////////////////////////////////////
			addField("location", "Location:", "Please provide location",
					/^[ ]*greenland[ ]*$/i, "Wrong Location", randomString);
			addField("speed", "Speed:", "Please provide missle speed",
					/^[ ]*1595[ ]*mph[ ]*$/i, "Wrong speed", randomString);
			addField("code", "Missle Code:", "Please provide code",
					/^[ ]*x[ ]*5[ ]*2[ ]*8[ ]*6[ ]*12[ ]*$/i, "Wrong code",
					randomString);

		});

function addField(fieldName, label, prompt, regex, errorMessage, randomString) {

	randomName = fieldName + randomString; // using element properties

	// grab template from html and clone a new field with custom attributes
	var $template = $('#template');
	var $row = $template.clone().removeAttr('id').insertBefore($template)
			.show();

	$row.find('.control-label').html(label);
	$row.find('input').attr('name', randomName);
	$row.find('input').attr("id", randomName);

	$('#myform').bootstrapValidator('addField', randomName, {
		validators : {
			stringLength : {
				min : 2,
				message : prompt
			},
			notEmpty : {
				message : prompt
			},
			regexp : {
				regexp : regex,
				message : errorMessage
			}
		}
	});
}
