<template>
  <CustomField :required="props.required as boolean" :label="props.label" :id="props.id as string">
    <VTextField
      v-model="model"
      :id="props.id as string"
      :onInput="(event) => emit('input', event)"
      :density="props.density as DensityType"
      :aria-label="props.label"
      :class="props.class"
      :rules="[...defaultRules, ...props.rules,]"
      :placeholder="props.placeholder as string"
      :type="props.type as string"
      :variant="props.variant as VariantType"
      :color="props.color as string"
      hide-details="auto"
    ></VTextField>
  </CustomField>
</template>
<script setup lang="ts">
import {computed, PropType} from "vue";
import BaseInputProps from "@/models/components/BaseInputProps";
import CustomField from "@/components/basic/CustomField.vue";
import {TextInputProps, VariantType} from "@/models/components/BaseTextInputProps";
import {DensityType} from "@/models/components/DensityTypes";
const emit = defineEmits(['update:modelValue','input']);
const props = defineProps({
  modelValue: {
    type: String || Number ||  null as PropType<string | number| null>,
    required: true
  },
  ...BaseInputProps,
  ...TextInputProps,
  color: {
    type: String as PropType<string>,
    default: 'primary'
  },
});

const model = computed<string | number | null | void>({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});
const defaultRules = computed(() => {
  return props.required ? [v => !!v || 'Required field'] : [];
})
</script>

