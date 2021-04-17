import { Vue, Component } from 'vue-property-decorator'

@Component
export default class extends Vue {
  public gotoPath (path: string) {
    if (!this.sameRoute(path)) {
      this.$router.push(path)
    } else {
      this.$forceUpdate()
    }
  }

  public sameRoute (nextPath: string) : boolean {
    return this.$route.path === nextPath
  }
}
