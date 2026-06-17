$(document).ready(function () {
	//    $("#postReview").on("click", function () {
	//        var commentInput = $("#reviewInput").val();
	//        $.ajax({
	//            type: 'POST',
	//            url: 'csrf/review',
	//            data: JSON.stringify({text: commentInput}),
	//            contentType: "application/json",
	//            dataType: 'json'
	//        }).then(
	//            function () {
	//                getChallenges();
	//                $("#commentInput").val('');
	//            }
	//        )
	//    });

	getChallenges();

	function getChallenges() {
		$("#list").empty();
		$.get('csrf/review', function (result, status) {
			for (var i = 0; i < result.length; i++) {
				var $comment = $('<li>', { class: 'comment' });
				var $pullLeft = $('<div>', { class: 'pull-left' });
				var $avatar = $('<img>', {
					class: 'avatar',
					src: 'images/avatar1.png',
					alt: 'avatar'
				});
				var $commentBody = $('<div>', { class: 'comment-body' });
				var $commentHeading = $('<div>', { class: 'comment-heading' });
				var $user = $('<h4>', { class: 'user' }).text(result[i].user + ' / ' + result[i].stars + ' stars');
				var $time = $('<h5>', { class: 'time' }).text(result[i].dateTime);
				var $text = $('<p>').text(result[i].text);

				$pullLeft.append($avatar);
				$commentHeading.append($user).append($time);
				$commentBody.append($commentHeading).append($text);
				$comment.append($pullLeft).append($commentBody);

				$("#list").append($comment);
			}

		});
	}
})