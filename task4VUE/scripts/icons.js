import SvgIcon from "@jamescoyle/vue-icon";
import { mdiHeart } from "@mdi/js";

export default {
  name: "my-icons-component",
  components: {
    SvgIcon,
  },
  data() {
    return {
      path: mdiHeart,
    };
  },
};
