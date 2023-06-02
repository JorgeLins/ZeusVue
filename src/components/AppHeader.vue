<template>
  <header
    class="h-15 flex items-center justify-start gap-3 bg-yellow-first p-4 pl-20 max-md:pl-9"
  >
    <PhLightning size="36" color="#004242" weight="fill" />
    <h2 class="h-min font-body text-xl font-bold text-[#004242]">Zeus</h2>
  </header>
</template>

<script>
import { PhLightning } from "@phosphor-icons/vue";
export default {
  name: "AppHeader",
  components: {
    PhLightning,
  },
};
</script>
