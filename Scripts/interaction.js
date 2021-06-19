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
