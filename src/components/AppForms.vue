<template>
    <div class="flex flex-col items-center pt-4 w-80 h-80 bg-yellow-second rounded-xl gap-8">
        <label class="font-roboto text-[#004242] text-xl">Adicione aqui a ração do seu pet</label>
        <form class="flex flex-col items-center w-11/12	 gap-4" method="post" >
            <div class="flex flex-col items-start w-full">
                <label class="font-roboto text-[#004242]">Nome da ração</label>
                <input class="w-full rounded pl-2" required type="string" v-model="formData.name" name="name" id="name"
                    placeholder="Digite aqui o nome da ração">
            </div>
            <div class="flex flex-col items-start w-full">
                <label class="font-roboto text-[#004242]">Preço (R$)</label>
                <input class="w-full rounded pl-2" required type="number" v-model="formData.price"  name="price" id="price"
                    placeholder="Digite aqui o preço da ração">
            </div>
            <div class="flex flex-col items-start w-full">
                <label class="font-roboto text-[#004242]">Quantidade (KG)</label>
                <input class="w-full rounded pl-2" required type="number" v-model="formData.quantity"  name="quantity" id="quantity"
                    placeholder="Digite aqui a quantidade da ração">
            </div>
            <div class="flex flex-col items-end w-full">
                <button @click="postDataMethod();" class="flex justify-center gap-1 items-center bg-[#1F243C] text-[#e0e0e0] rounded-sm w-20 h-8 text-md">Enviar
                    <PhCaretRight size="18" color="#e0e0e0" weight="bold" />
                </button>
            </div>
        </form>
    </div>
</template>

<script>

import { PhCaretRight } from "@phosphor-icons/vue";
import axios from "axios";

export default {
    name: 'AppForms',
    components: {
        PhCaretRight,
    },
    data() {
        return {
            formData: {
                name: "",
                price: "",
                quantity: "",
            },

        }
    },
    methods: {
        postDataMethod() {
            console.log("entrou");
            axios
                .post(" http://localhost:3000/", this.formData)
                .then((res) => {
                    console.log(res.data);
                    this.showAlert("Cadastro Feito")
                    this.reset();
                })
                .catch((error) => {
                    console.log(error);
                    this.showAlert("Erro ao cadastrar a ração");
                });
        },
    }
}
</script>
