<template>
    <header class="p-4 pl-20 gap-3 flex justify-start items-center h-15 bg-yellow-first  max-md:pl-9">
        <PhLightning size="36" color="#004242" weight="fill" />
        <h2 class="h-min text-xl font-bold font-body text-[#004242]">Zeus</h2>
    </header>
</template>

<script>

import { PhLightning } from "@phosphor-icons/vue"
    export default {
        name: 'AppHeader',
        components:{
            PhLightning
        }
    }
</script>
