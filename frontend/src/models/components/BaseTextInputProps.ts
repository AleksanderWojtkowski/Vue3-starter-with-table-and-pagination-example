import {ComponentObjectPropsOptions, PropType} from '@vue/runtime-core';
import {DensityType} from "@/models/components/DensityTypes";

export type VariantType = "outlined" | "plain" | "solo" | "filled" | "underlined"
type InputType = 'text' | 'number' | 'email' | 'phone' | 'password'

type TextInputPropsType = {
  type: InputType,
  placeholder: string,
  variant: VariantType,
  density: DensityType,
  class: string,
}
export const TextInputProps: ComponentObjectPropsOptions<TextInputPropsType> = {
  type: {
    default: 'text',
    type: String as PropType<InputType>,
  },
  placeholder: {
    default: '',
    type: String,
  },
  variant: {
    type: String as PropType<VariantType>,
    default: 'filled',
  },
  density: {
    type: String as PropType<DensityType>,
    default: "default",
    required: false,
  },
  class: {
    default: undefined,
    type: String,
  },
};
