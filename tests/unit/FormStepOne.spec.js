import FormStepOne from "@/components/form-steps/FormStepOne";
import {mount} from "@vue/test-utils";

describe('Test From Step One Component', () => {
  const wrapper = mount(FormStepOne)
  it('Testing Name Label', () => {

    expect(wrapper.text()).toContain('Name')
  })
  it('Testing Lastname Label', () => {
    expect(wrapper.text()).toContain('Lastname')
  })
  it('Testing Next Button Label', () => {
    expect(wrapper.text()).toContain('Next')
  })
  it('Testing Next Button without filling the inputs ', async () => {
    await wrapper.find('button').trigger('click')
    expect(wrapper.text()).toContain('required')
  })

  it('input value', async () => {
    const firstName = 'name@mail.com'
    const lastName = 'Lorem ipsum dolor sit amet'

    await wrapper.find('#Name').setValue(firstName)
    await wrapper.find('#Lastname').setValue(lastName)

    await wrapper.find('#next').trigger('click')

    expect(wrapper.emitted('clickedStepOne')[0][0]).toStrictEqual({
      firstName,
      lastName,
    })
  })
})