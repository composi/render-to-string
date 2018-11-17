// @ts-nocheck
import { renderToString } from "../src"
import { h } from '../__supporting-files/h'

test("should be able to convert simple, one-level vnode to html.", function () {
  
  const Title = h(
    'h1',
    {
      class: 'main-title'
    },
    'The Title'
  )
  const result = renderToString(Title)
  expect(result).toBe(`<h1 class='main-title' >The Title</h1>`)
})


test('should be able to convert vnode with children to html', () => {
  const Nav = h(
    'nav',
    {
      id: 'nav'
    },
    [
      h(
        'h1',
        {
          class: 'main-title'
        },
        [
          'The Title'
        ]
      )
    ]
  )
  const result = renderToString(Nav)
  expect(result).toBe(`<nav id='nav' ><h1 class='main-title' >The Title</h1></nav>`)
})

test('should be able to convert vnode with JavaScript array as children into html', () => {
  const fruits = ['Apples', 'Oranges', 'Bananas']
  const List = h(
    'ul',
    {
      class: 'list'
    },
    [
      fruits.map(fruit => h('li', {}, [fruit]))
    ]
  )
  const result = renderToString(List)
  expect(result).toEqual(`<ul class='list' ><li>Apples</li><li>Oranges</li><li>Bananas</li></ul>`)
})

test('Should escape value with single quotes', () => {
  function announce(data) {
    console.log(data)
  }
  const Button = h(
    'button',
    {
      onclick: `announce({value: "A Message"})`
    },
    'Click'
  )
  const result = renderToString(Button)
  // console.log(result)
  expect(result).toEqual(`<button onclick='announce({value: "A Message"})' >Click</button>`)
})




