<template>
  <div  class="bg-blue-200 py-6 px-10 rounded-xl">
    <div class="mb-2">
      <TextField  v-model="middleName" label="MiddleName" optional="(optional)" placeholder="Middle Name" />
    </div>
    <div class="flex justify-center mt-2">
      <BaseButton class="mr-3" name="Back" theme="primary"  @click="$emit('backToStepOne')" />
      <BaseButton name="Next"  theme="primary" @click="goToStepThree"/>
    </div>
  </div>
</template>

<script>
import TextField from "@/components/TextField";
import BaseButton from "@/components/BaseButton";
export default {
  name: "FormStepTwo",
  components: {
    TextField,
    BaseButton
  },
  data() {
    return {
      middleName:'',
    }
  },
  methods: {
    goToStepThree() {
      this.$emit('clickedStepTwo',this.middleName)
    }
  }
}
</script>