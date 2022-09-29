<template>
  <div>
    <div  class="bg-blue-200 py-6 px-10 rounded-xl">
      <div class="mb-2">
        <TextField v-model="dateOfBirthDay" :show-error="showError" label="DateOfBird" type="date" placeholder="Date Of Bird" required />
      </div>
      <div class="flex justify-center mt-2">
        <BaseButton class="mr-3" name="Back" theme="primary"  @click="$emit('backToStepTwo')" />
        <BaseButton name="Save"  id="finalSubmit" :theme="isSuccess" @click="save"/>
      </div>
    </div>
    <div  v-if="showMessage"  class="flex justify-center mt-4">
      <div class="bg-green-200 rounded-xl  left-1/2 w-80 p-5">
        <div class="flex justify-center mb-4">
          <span class="text-2xl">Created</span>
        </div>
        <div>
          <span class="mr-2 inline-block w-28">First Name</span>
          <span>{{user.firstName}}</span>
        </div>
        <div>
          <span class="mr-2 inline-block w-28">Lastname</span>
          <span>{{user.lastName}}</span>
        </div>
        <div>
          <span class="mr-2 inline-block w-28">Middle Name</span>
          <span>{{user.middleName || '-'}}</span>
        </div>
        <div>
          <span class="mr-2 inline-block w-28">Date of Birth</span>
          <span>{{user.birthDay}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextField from "@/components/TextField";
import BaseButton from "@/components/BaseButton";
export default {
  name: "FormStepThree",
  components: {
    TextField,
    BaseButton
  },
  props: {
    user:{
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      dateOfBirthDay: '',
      showError: false,
      showSuccessMessage: false
    }
  },
  computed: {
    isSuccess() {
      return this.dateOfBirthDay ? 'success' : 'gray'
    },
    showMessage() {
        return  Object.keys(this.user).length && this.showSuccessMessage
    }
  },
  methods: {
    save() {
      if(!this.dateOfBirthDay) {
        this.showError = true;
        setTimeout(()=>{
          this.showError = false;
        },2000)
        return;
      }
      this.$emit('clickedStepThree',this.dateOfBirthDay)
      this.showSuccessMessage = true
      setTimeout(() => {
        this.showSuccessMessage = false
      },3000)
    },

  }
}
</script>