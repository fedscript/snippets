
// copie e cole no console do navegador.
// attributes:
// data-ga-category
// data-ga-name
// data-ga-action

var css = document.createElement('style')

css.type = 'text/css'

var styles = `
    [data-ga-category]:after,
    [data-ga-name]:after,
    [data-ga-action]:after { font-size: 10px; position: absolute; z-index: 999999; border-radius: 3px; border: 1px solid red; background-color: #fff; color: #000; opacity: .7; pointer-events: none; }

    [data-ga-category]:hover:after,
    [data-ga-name]:hover:after,
    [data-ga-action]:hover:after { background-color: #fee; opacity: 1; z-index: 9999999; }

    [data-ga-category],
    [data-ga-name] { position: relative;
    }

    [data-ga-name]:hover { box-shadow: inset red 0 0 3px;
    }

    [data-ga-category]:after { top: 0; left: 0;
        content: 'category: ' attr(data-ga-category);
    }
    [data-ga-name]:after { top: 0; left: 0;
        content: 'name: ' attr(data-ga-name);
    }
    [data-ga-action]:after { 
        content: 'action:' attr(data-ga-action);
    }
`

if(css.styleSheet) {
    css.styleSheet.cssText = styles
} else {
    css.appendChild(document.createTextNode(styles))
}

document.getElementsByTagName('head')[0].appendChild(css)


