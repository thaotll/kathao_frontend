import { describe, it, expect, vi } from 'vitest';
import { mount, flushPromises } from '@vue/test-utils';
import EditJob from '@/components/EditComponent.vue'; // Pfad anpassen

describe('EditJob', () => {
    it('renders form fields correctly', () => {
        const mockJob = {
            id: 17,
            jobTitle: 'Softwareentwickler (m/w/d)',
            companyTitle: 'Tech Innovations Gmb',
            location: 'Berlin',
            description: 'Wir suchen einen Softwareentwickler (m/w/d) für unser Team',
            deadline: '2023-12-31',
            startDate: '2023-01-01',
        };

        const wrapper = mount(EditJob, {
            props: {
                jobId: mockJob.id,
                job: mockJob,
            }
        });

        const jobTitleInput = wrapper.find('input[type="text"]').element as HTMLInputElement;
        const descriptionTextarea = wrapper.find('textarea').element as HTMLTextAreaElement;

        expect(jobTitleInput.value).toBe(mockJob.jobTitle);
        expect(descriptionTextarea.value).toBe(mockJob.description);
    });

    it('emits save event with updated job data on form submission', async () => {
        vi.spyOn(global, 'fetch').mockResolvedValueOnce(new Response(JSON.stringify({}), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        }));

        const mockJob = { id: 17,
            jobTitle: 'Softwareentwickler (m/w/d)',
            companyTitle: 'Tech Innovations Gmb',
            location: 'Berlin',
            description: 'Wir suchen einen Softwareentwickler (m/w/d) für unser Team',
            deadline: '2023-12-31',
            startDate: '2023-01-01',
        };
        const wrapper = mount(EditJob, { props: { jobId: mockJob.id, job: mockJob } });

        const input = wrapper.find('input[type="text"]');
        input.setValue('Geänderter Jobtitel');
        await wrapper.find('form').trigger('submit');
        await flushPromises();

        expect(fetch).toHaveBeenCalled();
        expect(wrapper.emitted()).toHaveProperty('save');
    });
});
