export interface IWordPressRenderable {
  rendered: string;
}
export interface IAcf {
  quickImage: IImageSizes;
  gallery: any;
  place: any;
  currency: string;
}

export interface IImageSizes {
  sizes: IImageSize
}

export interface IImageSize {
  large: string;
}