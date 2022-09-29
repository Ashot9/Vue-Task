import {mount} from "@vue/test-utils";
import FormStepThree from "@/components/form-steps/FormStepThree";

describe('Test From Step Three Component', () => {
    const wrapper = mount(FormStepThree,{
        propsData: {
            user: {}
        }
    })
    it('Testing Date Of Bird Label', () => {
        expect(wrapper.text()).toContain('DateOfBird')
    })
    it('Testing Save Button ', () => {
        expect(wrapper.text()).toContain('Save')
    })
    it('Testing Button element ', () => {
        expect(wrapper.text()).toContain('Save')
    })
    it('Testing Next Button Label', () => {
        expect(wrapper.text()).toContain('Save')
    })
    it('Testing Next Button without filling the inputs ', async () => {
        await wrapper.find('#finalSubmit').trigger('click')
        expect(wrapper.text()).toContain('required')
    })
    it('Testing step 3', async () => {
        const dateOfBirthDay = "2022-08-31"
        await wrapper.find('#DateOfBird').setValue(dateOfBirthDay)
        await wrapper.find('#save').trigger('click')
        expect(wrapper.emitted('clickedStepThree')[0][0]).toStrictEqual(dateOfBirthDay)
    })
})
