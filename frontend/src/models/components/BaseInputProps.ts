import {ComponentObjectPropsOptions, PropType} from "@vue/runtime-core";

export type BaseInputPropsType = {
  label: string,
  id: string,
  required: boolean,
  rules: any[],
}
const BaseInputProps: ComponentObjectPropsOptions<BaseInputPropsType> = {
  label: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: () => `field-${Math.round(Math.random() * 1_000_000)}`,
  },
  required: {
    type: Boolean,
    default: false,
  },
  rules: {
    default: [],
    type: Array as PropType<any[]>,
  },
};
export default BaseInputProps;
