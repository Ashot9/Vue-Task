import {mount} from "@vue/test-utils";
import FormStepTwo from "@/components/form-steps/FormStepTwo";


describe('Test From Step Two Component', () => {
    const wrapper = mount(FormStepTwo)
    it('Testing Middle Name Label', () => {
        expect(wrapper.text()).toContain('MiddleName')
    })
    it('Testing Field Name optional ', () => {
        expect(wrapper.text()).toContain('optional')
    })
    it('Testing Next Button Label', () => {
        expect(wrapper.text()).toContain('Next')
    })
    it('Testing val 2', async () => {
        const middleName = 'Middle Name'
        await wrapper.find('#MiddleName').setValue(middleName)
        await wrapper.find('#next').trigger('click')
        expect(wrapper.emitted('clickedStepTwo')[0][0]).toStrictEqual(middleName)
    })
})
