<template>
<VBtn
    :height="props.height as string | number"
    :width="props.width as string | number"
    :class="props.class"
    :to="props.to as string"
    :onClick="onClick"
    :flat="props.flat as boolean"
    :block="props.block as boolean"
    :ripple="props.ripple as boolean"
    :loading="localLoading"
    :disabled="props.disabled || localLoading"
    :size="props.size as BtnSizeVariant"
    :type="props.submit ? 'submit' : undefined"
    :color="props.color as string"
    :variant="props.variant as BtnVariantType"
>
  <span class="btn-text">
    <slot/>
  </span>
</VBtn>
</template>
<script setup lang="ts">
import {BtnSizeVariant, BtnVariantType, ButtonProps} from "@/models/components/ButtonProps";
import {computed, ref} from "vue";
const emit = defineEmits(['click']);
const props = defineProps({
  ...ButtonProps,
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  class: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: 'blue'
  },
  height: {
    type: String || Number,
    default: '40px'
  },
  width: {
    type: String || Number,
    default: ''
  },
})
const tempLoading = ref<boolean>(false);
const localLoading = computed({
  get() {
    return props.loading || tempLoading.value;
  },
  set(newValue: boolean) {
    tempLoading.value = newValue;
  },
});
const onClick = async(event: MouseEvent) => {
  emit('click',event);
  if (props.click) {
    localLoading.value = true;
    try {
      await props.click();
    } finally {
      localLoading.value = false;
    }
  }
};
</script>
<style scoped>
.btn-text {
  letter-spacing: 0;
  text-transform: none;
}
</style>
