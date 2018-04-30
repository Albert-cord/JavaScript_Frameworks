
requirejs.config({
    baseUrl: 'scripts',
    paths: {
        'jquery': 'vendor/jquery/jquery-2.1.3.min',
        'jquery-all': 'util/jquery-all',
    }
})

requirejs(['data/quotes', 'quotes-view'], function (quoteData, quotesView) {
    let groupedQuotes = quoteData.groupByattribution()
    quotesView.render(groupedQuotes)
})
