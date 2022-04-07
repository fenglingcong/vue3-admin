<script>
import { h, KeepAlive } from 'vue';

export default {
  name: 'RouteView',
  render() {
    const { $route: { meta } } = this;
    const inKeep = h(KeepAlive, null, <router-view />);
    const notKeep = (
      <router-view />
    );
    return meta.keepAlive ? inKeep : notKeep;
  },
};
</script>
