import { test, expect } from 'vitest'
import Hello from './HelloWorld.vue'
import { mount } from '@vue/test-utils'

// vitest会识别tsx和jsx为ssr环境需要在config.ts里配置transfromNode

test('hello', () => {
  console.log(Hello)
  const wrapper = mount(Hello)
  expect(wrapper.text()).toContain('hello')
})
