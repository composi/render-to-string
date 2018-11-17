/**
 * @typedef {Object.<string, any> | {}} Props
 * @property {Children} Props.children
 * @typedef {VNode[]} Children
 * @typedef {string | number | Function} Type
 * @typedef {number | string | null} Key
 * @typedef {Object.<string, any>} VNode
 * @property {Type} VNode.type
 * @property {Props} VNode.props
 * @property {Children} VNode.children
 * @property {Element} VNode.element
 * @property {Key} [VNode.key]
 * @property {number} VNode.flag
 */

/**
 * A function to conver a functional component into an HTML string for use on the server. It takes a virtual node describing the component and parses it to create the corresponding HTML markup.
 * @param {VNode} obj
 */
// eslint-disable-next-line no-undef
exports.renderToString = function renderToString(obj) {
  const ELEMENT_NODE = 1
  let open = '<'
  let close = '</'
  let tag = ''
  let kids = ''
  if (obj.flag === ELEMENT_NODE) {
    open += obj.type
    close += obj.type
  }
  if (obj && obj.props) {
    for (let key in obj.props) {
      open += ` ${key}='${obj.props[key]}' `
    }
  }
  if (obj.children.length) {
    obj.children.forEach(kid => {
      if (kid.flag === ELEMENT_NODE) {
        kids += renderToString(kid)
      } else {
        kids += kid.type
      }
    })
  }
  tag = open + `>${kids}${close}>`

  return tag
}
