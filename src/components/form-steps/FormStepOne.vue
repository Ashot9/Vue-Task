<template>
  <div class="bg-blue-200 py-6 px-10 rounded-xl">
    <div class="mb-2">
      <TextField v-model="firstName" label="Name"  placeholder="Name" required :showError="showError"/>
    </div>
    <div>
      <TextField  v-model="lastName" label="Lastname" placeholder="Lastname" required :showError="showError" />
    </div>
    <div class="flex justify-center mt-2">
      <BaseButton name="Next" theme="primary"  @click="goToStepTwo" />
    </div>
  </div>
</template>

<script>
import TextField from "@/components/TextField";
import BaseButton from "@/components/BaseButton";
export default {
  name: "FormStepOne",
  components: {
    TextField,
    BaseButton
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      showError:false,
    }
  },
  computed: {
    toStepTwo() {
      return !this.firstName || !this.lastName
    },
  },
  methods: {
    goToStepTwo() {
      if(this.toStepTwo) {
        this.showError=true;
        setTimeout(()=>{
          this.showError=false;
        },2000)
        return;
      }
      this.$emit('clickedStepOne',{
        firstName:this.firstName,
        lastName:this.lastName
      })
    },
  }
}
</script>