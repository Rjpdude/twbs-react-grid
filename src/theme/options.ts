export interface ThemeOptions {
  /**
   * The `margin` and `padding` in pixels for all grid elements.
   *
   * @default 15
   */
  spacing: number
  /**
   * The maximum width in pixels of the small breakpoint container.
   *
   * @default 576
   */
  sm: number
  /**
   * The width in pixels to assign to the small breakpoint container.
   *
   * @default 540
   */
  smWidth: number
  /**
   * The maximum width in pixels of the medium breakpoint container.
   *
   * @default 768
   */
  md: number
  /**
   * The width in pixels to assign to the medium breakpoint container.
   *
   * @default 720
   */
  mdWidth: number
  /**
   * The maximum width in pixels of the large breakpoint container.
   *
   * @default 992
   */
  lg: number
  /**
   * The width in pixels to assign to the large breakpoint container.
   *
   * @default 960
   */
  lgWidth: number
  /**
   * The maximum width in pixels of the extra-large breakpoint container.
   *
   * @default 1200
   */
  xl: number
  /**
   * The width in pixels to assign to the extra-large breakpoint container.
   *
   * @default 1140
   */
  xlWidth: number
}

export function getDefaultTheme(): ThemeOptions {
  return {
    spacing: 15,
    sm: 576,
    smWidth: 540,
    md: 768,
    mdWidth: 720,
    lg: 992,
    lgWidth: 960,
    xl: 1200,
    xlWidth: 1140
  }
}
