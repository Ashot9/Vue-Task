<template>
  <div class="flex justify-center mt-10">
      <div  v-show="step === 1">
        <FormStepOne @clicked-step-one="goToStepTwo" />
      </div>
      <div v-show="step === 2">
        <FormStepTwo @back-to-step-one="back()" @clicked-step-two="goToStepThree" />
      </div>
      <div v-show="step === 3">
        <FormStepThree :user="user" @back-to-step-two="back()" @clickedStepThree="saveData"/>
      </div>
  </div>

</template>

<script>
import FormStepOne from "@/components/form-steps/FormStepOne";
import FormStepTwo from "@/components/form-steps/FormStepTwo";
import FormStepThree from "@/components/form-steps/FormStepThree";
export default {
  name: 'App',
  components: {
    FormStepOne,
    FormStepTwo,
    FormStepThree
  },
  data() {
    return {
      user: {},
      step: 1,
    }
  },
  computed: {

  },
  methods: {
    next() {
      this.step++
    },
    back() {
      this.step--
    },
    goToStepTwo(dataStepOne) {
      this.user = {
        ...dataStepOne
      }
      this.next();
    },

    goToStepThree(dataStepTwo) {
      this.user.middleName = dataStepTwo
      this.next();
    },
    saveData(dataStepThree) {
      this.user.birthDay = dataStepThree
    }
  }
}
</script>
