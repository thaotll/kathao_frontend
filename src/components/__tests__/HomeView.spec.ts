import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import HomeView from '@/views/HomeView.vue';
import SearchBar from "../SearchBar.vue";
import NavBar from "../NavBar.vue";
import ContactSection from "../ContactSection.vue";

describe('HomeView', () => {
    it('renders correctly', () => {
        const wrapper = mount(HomeView, {
            global: {
                stubs: {
                    RouterLink: true,
                    NavBar,
                    SearchBar,
                    ContactSection,
                },
            },
        });

        expect(wrapper.findComponent(NavBar).exists()).toBe(true);
        expect(wrapper.findComponent(SearchBar).exists()).toBe(true);
        expect(wrapper.findComponent(ContactSection).exists()).toBe(true);
    });
});

