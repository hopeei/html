// ----------------------- task 1
$(document)(function () {
    $('h2.head').css('background-color', 'green');
    $('h2.head .inner').css('font-size', '35px');
});

// ----------------------- task 2

$(document)(function () {
    $('a[href^="https://"]').attr('target', '_blank');
});

// ------------------------ task 3

$(document)(function () {
    $('h3').each(function () {
        const nextElement = $(this).next();

        if (nextElement.is('div')) {
            $(this).before(nextElement);
        }
    });
});

// --------------------------- task 4

$(document)(function () {
    const checkboxes = $('input[type="checkbox"]');
    let checkedCount = 0;
    checkboxes.on('change', function () {
        if ($(this).is(':checked')) {
            checkedCount++;

            if (checkedCount === 3) {
                checkboxes.prop('disabled', true);
            }
        }
    });
});