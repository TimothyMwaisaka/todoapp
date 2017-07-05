$(document).ready(function () {
    $('#btn').click(function () {
        var inputTask = $('input[name=task]').val();
        $('#task').val('');
        $('.todos').append('<div class="list">' + inputTask + '</div>');
        $('.todos').css({"background-color": "#526dd5;"});
    });
    $(document).on('click', '.list', function () {
        $(this).fadeOut(200);
    });

    $(function () {
        $(".todos").sortable();
        $(".todos").disableSelection();
    });
});