<template>
    <div class="flex flex-col items-center pt-4 w-80 h-80 bg-yellow-second rounded-xl gap-8">
        <label class="font-roboto text-xl">Adicione aqui a ração do seu pet</label>
        <form class="flex flex-col items-center w-11/12	 gap-4" method="post">
            <div class="flex flex-col items-start w-full">
                <label class="font-roboto">Nome da ração</label>
                <input class="w-full rounded pl-2" required type="string" name="name" id="name" placeholder="Digite aqui o nome da ração">
            </div>
            <div class="flex flex-col items-start w-full">
                <label class="font-roboto">Preço (R$)</label>
                <input class="w-full rounded pl-2" required type="number" name="price" id="price" placeholder="Digite aqui o preço da ração">
            </div>
            <div class="flex flex-col items-start w-full">
                <label class="font-roboto">Quantidade (KG)</label>
                <input class="w-full rounded pl-2" required type="number" name="quantity" id="quantity" placeholder="Digite aqui a quantidade da ração">
            </div>
            <div class="flex flex-col items-end w-full">
                <button class="flex justify-center gap-1 items-center bg-[#1F243C] text-[#fff] rounded-sm w-20">Enviar
                    <PhCaretRight size="18" color="#e0e0e0" weight="bold" />
                </button>
            </div>
        </form>
    </div>
</template>

<script>

import { PhCaretRight } from "@phosphor-icons/vue";
    export default {
        name: 'AppForms',
        components:{
            PhCaretRight,
        }
    }
</script>
