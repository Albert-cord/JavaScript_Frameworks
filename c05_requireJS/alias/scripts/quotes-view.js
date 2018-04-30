define(['util/dom'], function (dom) {
    let quotesElement = dom.querySelector('#quotes')

    function makeElement(attribution, quote) {
        let sectionEl = dom.createElement('section')
        sectionEl.className = 'multiquote'

        var attributionEl = dom.createElement('h2')

        attributionEl.className = 'attribution'

        attributionEl.innerText = attribution

        sectionEl.appendChild(attributionEl)

        quote.forEach(function (quotes) {
            let quoteEl = dom.createElement('blockquote')
            let paragraphEl = null

            quotes.split('\n').forEach(function (paragraph) {
                paragraphEl = dom.createElement('p')

                paragraphEl.innerText = '"' + paragraph.trim() + '"'

                quoteEl.appendChild(paragraphEl)
            })
            quoteEl.className = 'quote'
            sectionEl.appendChild(quoteEl)
            // attributionEl.appendChild(quoteEl)
        })

        return sectionEl
    }

    return {
        render: function (groupedQuotes) {
            for (var attribution in groupedQuotes) {
                if (!groupedQuotes.hasOwnProperty(attribution)) {
                    continue
                }
                let quote = groupedQuotes[attribution]
                let quoteElement = makeElement(attribution, quote)
                quotesElement.appendChild(quoteElement)
            }
        }
    }
})
