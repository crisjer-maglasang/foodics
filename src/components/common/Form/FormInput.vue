<template>
  <div class="flex">
    <input
      :id="id"
      :value="value"
      :type="type"
      :name="name"
      :required="required"
      :placeholder="placeholder"
      :class="inputClasses"
      @input="onChange"
      @blur="blur"
      @keyup="keyup"
      :aria-invalid="ariaInvalid"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormInput",
  props: {
    id: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    ariaInvalid: {
      type: Boolean,
      default: false,
    },
    inputClasses: {
      type: String,
      default: "shadow-sm block w-full sm:text-sm rounded-md",
    },
    onChange: {
      type: Function,
      default: () => {},
    },
    blur: {
      type: Function,
      default: () => {},
    },
    keyup: {
      type: Function,
      default: () => {},
    },
  },
});
</script>
