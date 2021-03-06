Vue.component('button-check', {
  template: html`
    <el-button @click="check" class="botcheck-button u-textUserColorHover u-borderUserColorHover" size="mini" round>
      Botcheck.me
      </el-button>
  `(),
  props: ['screenName'],
  methods: {
    check() {
      this.$store.broadcastAction('SCREEN_NAME_CHECK', this.screenName);
    }
  }
});
