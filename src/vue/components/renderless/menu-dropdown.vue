<script>
import { ref } from "vue";

export default {
  setup(props, { slots }) {
    const open = ref(false);
    const show = () => (open.value = true);
    const hide = () => (open.value = false);

    return () =>
      slots.default({
        open: open.value,
        show,
        hide,
      });
  },
};
</script>
