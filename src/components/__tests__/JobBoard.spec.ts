import { describe, expect, it, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import JobBoard from "../JobBoard.vue";

describe('JobBoard', () => {
    it('renders correctly', () => {
        const mockJob = {
            id: 17,
            image: 'example-image.jpg',
            jobTitle: 'Softwareentwickler (m/w/d)',
            company: 'Tech Innovations GmbH',
            location: 'Berlin, Deutschland',
            description: 'Wir suchen einen Softwareentwickler (m/w/d) für unser Team.',
            deadline: '2023-12-31',
            startDate: '2023-01-01',
            companyLogo: 'company-logo.jpg',
            favorite: false,
        };

        const wrapper = mount(JobBoard, {
            props: {
                image: mockJob.image,
                jobId: mockJob.id,
                job: mockJob,
            }
        });

        expect(wrapper.find('.job-board').exists()).toBe(true);
    });

    it('handles click events correctly', async () => {
        const wrapper = mount(JobBoard);
        await wrapper.find('.heart-icon i').trigger('click');
    });

    describe('API Integration', () => {

        it('fetches job details on mount', async () => {
            const jobId = 17;
            const mockResponseData = {
                id: jobId,
                image: 'example-image.jpg',
                jobTitle: 'Softwareentwickler (m/w/d)',
                company: 'Tech Innovations GmbH',
                location: 'Berlin, Deutschland',
                description: 'Wir suchen einen Softwareentwickler (m/w/d) für unser Team.',
                deadline: '2023-12-31',
                startDate: '2023-01-01',
                companyLogo: 'company-logo.jpg',
                favorite: false,
            };

            global.fetch = vi.fn(() =>
                Promise.resolve(new Response(JSON.stringify(mockResponseData), {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }))
            );

            const wrapper = mount(JobBoard, {props: {jobId}});
            expect(fetch).toHaveBeenCalledWith(`http://localhost:8080/stellenangebote/${jobId}`);
        });

    });

});