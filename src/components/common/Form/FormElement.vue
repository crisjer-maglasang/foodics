<template>
  <div :class="formElementWrapperClasses">
    <div :class="elementWrapperClasses">
      <component :is="elementComponent" v-bind="$props" />
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import FormInput from "./FormInput.vue";
import FormSelect from "./FormSelect.vue";

export default defineComponent({
  name: "FormElement",
  props: {
    id: String,
    name: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      required: true,
    },
    value: [
      String,
      Number,
      Boolean,
      Array,
      Object,
      Date,
      File,
      Blob,
      undefined,
    ],
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
    options: {
      type: Array,
      default: () => [],
    },
    required: {
      type: Boolean,
      default: false,
    },
    selectAction: {
      type: Function,
      default: () => {},
    },
    formElementWrapperClasses: {
      type: String,
      default: "",
    },
    elementWrapperClasses: {
      type: String,
      default: "mt-0.5 block rounded-md shadow-sm",
    },
  },
  setup(props) {
    const elementComponent = computed(() => {
      const componentMap = {
        text: FormInput,
        select: FormSelect,
      };
      return componentMap[props.type];
    });

    return {
      elementComponent,
    };
  },
});
</script>
