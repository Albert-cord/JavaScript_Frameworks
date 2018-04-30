define(['jquery', 'highlight'], function ($) {
    $.fn.addQuotes = function (attribution, text) {
        var $section = $('<section></section>')
                        .addClass('multiquote')
                        .appendTo(this)
        $('<h2/>')
                .addClass('attribution')
                .text(attribution)
                .appendTo($section)
        $.each(text, function (index, paragraph) {
            var $blockquote = $('<blockquote></blockquote>')
                                .addClass('quote')
            $.each(paragraph.text.split('\n'), function (index, quote) {
                $('<p/>').text('"' + quote.trim() + '"')
                        .appendTo($blockquote)
            })
            $section.append($blockquote)
        })
        return $section
    }

    return $

    // return $.noConflict(true)
})
