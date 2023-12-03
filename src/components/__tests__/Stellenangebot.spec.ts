import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import StellenangebotForm from '@/components/__tests__/StellenangebotForm.vue'

describe('StellenangebotForm', () => {
  it('renders properly', () => {
    const wrapper = mount(StellenangebotForm, { props: { title: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
