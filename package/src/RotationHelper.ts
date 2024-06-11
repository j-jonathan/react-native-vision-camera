import type { Orientation } from './types/Orientation'

function orientationToDegrees(orientation: Orientation): number {
  switch (orientation) {
    case 'portrait':
      return 0
    case 'landscape-right':
      return 90
    case 'portrait-upside-down':
      return 180
    case 'landscape-left':
      return 270
  }
}

export class RotationHelper {
  /**
   * Gets or sets the current preview orientation.
   */
  previewOrientation: Orientation = 'portrait'
  /**
   * Gets or sets the current output orientation.
   */
  outputOrientation: Orientation = 'portrait'

  /**
   * Gets the current target rotation (in degrees) that needs to be applied
   * to all UI elements so they appear up-right.
   */
  get uiRotation(): number {
    const previewDegrees = orientationToDegrees(this.previewOrientation)
    const outputDegrees = orientationToDegrees(this.outputOrientation)
    return (outputDegrees - previewDegrees) % 360
  }
}
