import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Hei from './Hei'

test('Hei', () => {
  const wrapper = mount(Hei)
  console.log(wrapper.text())
  expect(wrapper.text()).toContain('Hei')
})
