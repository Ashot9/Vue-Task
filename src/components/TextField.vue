<template>
  <div>
      <div ref="textField">
        <label class="block mb-3" :for="label">{{ label }} {{required ? '*':''}} <span class="text-sm" v-if="optional">{{optional}}</span></label>
        <input v-model="localValue"
               v-bind="$attrs"
               class="p-2 w-80"
               :type="type"
               :id="label"
               :placeholder="placeholder" required>
        <div  class="mt-1 h-4">
          <span  v-if="!localValue && showError" class="text-red-600">The {{ label.toLowerCase() }} field is required</span>
        </div>
      </div>
  </div>
</template>

<script>


export default {
  name: "TextField",
  props:{
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    optional:{
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    required: {
      type: Boolean,
      default: false
    },
    showError : {
      type:Boolean,
      default:false
    }

  },
  data() {
    return {
      localValue: this.value,
    }
  },
  watch:{
    value(newText) {
      this.localValue = newText
    },
    localValue(newText){
        this.$emit('input', newText)
      }
  },

}
</script>
