const ul = document.querySelector('ol.ui-search-layout.ui-search-layout--stack.shops__layout')
const array_li = ul.getElementsByTagName('li')

const products = Array.from(array_li).map(li => {
    if (li.children[0].style.cssText === 'display: none !important;') return undefined

    const div_start = li.querySelector('div.ui-search-result__image.shops__picturesStyles')
    const image = div_start.getElementsByTagName('img')[0].src

    const div_next = div_start.nextElementSibling

    const content_header = div_next.querySelector('div.ui-search-item__group.ui-search-item__group--title.shops__items-group')

    const title = content_header.querySelector('h2').textContent

    const content_body = div_next.querySelector('div.ui-search-result__content-columns.shops__content-columns')
    
    const price = content_body.querySelector('span.andes-visually-hidden').textContent
    const status = content_body.querySelector('p.ui-search-item__shipping.ui-search-item__shipping--free.shops__item-shipping-free').textContent === 'Envío gratis' ? true : false

    return {
        title,
        image,
        price,
        status
    }
}).filter(product => product)