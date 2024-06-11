declare module 'vanta/dist/vanta.birds.min' {
  interface VantaEffectOptions {
    el: null | HTMLElement;
    [key: string]: any;
  }

  interface VantaEffectInstance {
    destroy: () => void;
    options: VantaEffectOptions;
  }

  const BIRDS: (options: VantaEffectOptions) => VantaEffectInstance;

  export default BIRDS;
}
