import {ComponentObjectPropsOptions, PropType} from "@vue/runtime-core";
import {DensityType} from "@/models/components/DensityTypes";

export type BtnType = "primary" | "secondary" | "default" | "error" | 'success'
export type BtnDensityType = "default" | "comfortable" | "compact"
export type BtnVariantType = "flat" | "text"
export type BtnSizeVariant = "x-small" | "small" | "default" | "large" | "x-large"

type BtnPropsType = {
  click: () => void,
  block: boolean,
  size: BtnSizeVariant,
  type: BtnType
  to: string,
  href: string,
  submit: boolean,

  stacked: boolean,
  flat: boolean,
  ripple: boolean,
  density: BtnDensityType,
  variant: BtnVariantType,
}
export const ButtonProps: ComponentObjectPropsOptions<BtnPropsType> = {
  click: {
    type: Function as PropType<() => void>,
  },
  type: {
    type: String as PropType<BtnType>,
    default: 'primary',
  },
  to: {
    type: String as PropType<string>,
    required: false,
  },
  href: {
    type: String,
    required: false,
  },
  flat: {
    type: Boolean,
    default: true,
  },
  block: {
    type: Boolean,
    default: false,
  },
  stacked: {
    type: Boolean,
    default: false,
  },
  ripple: {
    type: Boolean,
    default: true,
  },
  density: {
    type: String as PropType<DensityType>,
    default: "default",
    required: false,
  },
  variant: {
    type: String as PropType<BtnVariantType>,
    default: 'flat',
  },
  size: {
    type: String as PropType<BtnSizeVariant>,
    default: "default",
  },
  submit: {
    type: Boolean,
    default: false,
  },
};
