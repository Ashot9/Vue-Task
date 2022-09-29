<template>
  <div class="m-1">
    <button class="py-2 px-5 rounded-md border cursor-pointer duration-300"
            :class="buttonTheme"
            :id="name.toLowerCase()"
            :type="type"
            :disabled="disabled">{{ name }}</button>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    name: {
      type: String,
      default: 'Button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'button'
    },
    otherClasses: {
      type: String,
      default:''
    },
  },
  data() {
    return {
      buttonThemes: {
        primary: 'bg-white border-blue-600 text-blue-600  hover:bg-blue-600 hover:border-blue-600 hover:text-white ',
        success: 'bg-white border-green-600 text-green-600  hover:bg-green-600 hover:border-green-600 hover:text-white ',
        gray: 'bg-white border-gray-600 text-gray-600  hover:bg-gray-600 hover:border-gray-600 hover:text-white '
      }
    }
  },
  computed: {
    buttonTheme(){
      return this.buttonThemes[this.theme]
    }
  }
}
</script>

<style scoped>

</style>