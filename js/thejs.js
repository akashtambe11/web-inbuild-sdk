$(document).ready(function () {

    //Append in specific element of merchand website
    $.fn.loadPopup = function (e) {
        var modal = $('<div id="alertModal" class="modal" style="display: block;"><div class="modal-content"><p class="modalTxt">This is Hoopy SDK</p><p class="btnPara"><button class="nextBtn btn btn-primary">Close</button></p></div></div>').attr('id', 'hoopy');
        var element = '#' + e;
        if ($('#hoopy').length < 1) {
            modal.appendTo(element);
        } 
    }

    //To remove hoopy UI
    $(document).off('click', '.nextBtn ').on('click', '.nextBtn ', function () {
        $('#hoopy').remove();
    })

})