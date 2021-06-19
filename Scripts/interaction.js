jQuery( document ).ready(function() {
    console.log( "ready!" );
    jQuery.noConflict();
});


function triggerNotificationModal(incomingMessage)
{
    jQuery('#text-message-notification-modal').html(incomingMessage);
    jQuery('#notificationModal').modal({backdrop: 'static',
        keyboard: false});
    // $('#notificationModal').modal('show');

}

function closeNotificationModal()
{
    $('#notificationModal').modal('close');
}

jQuery(".each-image-thumbnail").click(function (event) {
    event.stopPropagation();
    let currentElement=jQuery(this);
    let originalURL=currentElement.find('img').attr('original');
    let replacingElement=document.getElementById('true-current-image');
    replacingElement.src=originalURL;
    console.table(currentElement);
});
