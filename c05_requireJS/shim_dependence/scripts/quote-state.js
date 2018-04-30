define(['data/quotes', 'undrln', 'ventage'],
    function (quoteData, _, Ventage) {
    let state = Ventage.create({
        search: function (searchItem) {
            state.searchItem = searchItem
            state.trigger('quotes:searched')
            let i = 0
        }
    })

    state.searchItem = ''
    state.quotes = quoteData.groupByattribution()

    return state
})
