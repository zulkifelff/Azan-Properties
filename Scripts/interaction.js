let searchBarClosed=true;
let minLength=2;
let characterTyped='';
let characterTypedLength=0;
jQuery( document ).ready(function() {
    jQuery.noConflict();
    console.log( "ready!" );
    new WOW().init();
});

let log = document.getElementById('searchbar-field');
document.addEventListener('keyup', logKey);

function searchQuery(characterTyped) {

}

function logKey(e) {
    characterTyped=log.value;
    characterTypedLength=(characterTyped.length);
    if (characterTyped < minLength) {
    } else {
        let resultSet = searchQuery(characterTyped);
    }
}


function triggerNotificationModal(incomingMessage)
{
    jQuery('#text-message-notification-modal').html(incomingMessage);
    jQuery('#notificationModal').modal({backdrop: 'static',
        keyboard: false});
    // jQuery('#notificationModal').modal('show');

}

function closeNotificationModal()
{
    jQuery('#notificationModal').modal('close');

}

function searchBarChange()
{

}

function toggleSearchBar()
{
    console.log('Function clicked');
    if(searchBarClosed)
    {
        //Opening Searchbar and Closing Social Media Shit
        jQuery("#social-media-link-section").hide("fast");
        jQuery("#search-query-section").show("slow");
        searchBarClosed=false;
    }
    else
    {
        //Opening Social Media and Closing Searchbar Shit
        jQuery("#search-query-section").hide("fast");
        jQuery("#social-media-link-section").show("slow");
        searchBarClosed=true;

    }

}

jQuery(".each-image-thumbnail").click(function (event) {
    event.stopPropagation();
    let currentElement=jQuery(this);
    let originalURL=currentElement.find('img').attr('original');
    let replacingElement=document.getElementById('true-current-image');
    replacingElement.src=originalURL;
    console.table(currentElement);
});
