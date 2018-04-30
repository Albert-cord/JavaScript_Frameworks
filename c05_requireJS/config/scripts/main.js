

function _main() {
    requirejs.config({
        baseUrl: 'scripts',
    })

    requirejs(['quotes-view'], function (quotesView) {
        quotesView.addQuote('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

        quotesView.addQuote('Nunc non purus faucibus justo tristique porta.');

    })
}

_main()
