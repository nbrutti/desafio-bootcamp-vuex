export const commonsMixin = {
  methods: {
    getAssetImage(imageName: string): NodeRequire {
      return require(`@/assets/images/${imageName}`)
    }
  }
}
