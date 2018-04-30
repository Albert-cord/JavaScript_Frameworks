define(['jquery-all', 'undrln', 'quote-state'],
function ($, _, quoteState) {
    let view = {
        onSearchChanged: function (event) {
            let e = event
            let item = e.target.value
            quoteState.search(item)
            let i = 0
        }
    }
    view.$el = $('#filter')

    view.$el.on('keyup', '[name="search"]', view.onSearchChanged)

    return view
})
