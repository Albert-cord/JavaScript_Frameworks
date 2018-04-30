
requirejs.config({
    baseUrl: 'scripts',
})

requirejs(['data/quotes', 'quotes-view'], function (quoteData, quotesView) {
    let groupedQuotes = quoteData.groupByattribution()
    quotesView.render(groupedQuotes)
})
