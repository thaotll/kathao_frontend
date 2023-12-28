import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import StellenangebotForm from '../StellenangebotForm.vue'

describe('StellenangebotForm', () => {
  it('renders properly', () => {
    const wrapper = mount(StellenangebotForm, { props: { title: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
