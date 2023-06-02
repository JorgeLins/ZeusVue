<template>
  <div
    class="flex h-80 w-80 flex-col items-center gap-8 rounded-xl bg-yellow-second pt-4"
  >
    <label class="font-roboto text-xl text-[#004242]"
      >Adicione aqui a ração do seu pet</label
    >
    <form class="flex w-11/12 flex-col items-center gap-4">
      <div class="flex w-full flex-col items-start">
        <label class="font-roboto text-[#004242]">Nome da ração</label>
        <input
          class="w-full rounded pl-2"
          required
          type="string"
          v-model="formData.title"
          name="title"
          id="title"
          placeholder="Digite aqui o nome da ração"
        />
      </div>
      <div class="flex w-full flex-col items-start">
        <label class="font-roboto text-[#004242]">Preço (R$)</label>
        <input
          class="w-full rounded pl-2"
          required
          type="string"
          v-model="formData.price"
          name="price"
          id="price"
          placeholder="Digite aqui o preço da ração"
        />
      </div>
      <div class="flex w-full flex-col items-start">
        <label class="font-roboto text-[#004242]">Quantidade (KG)</label>
        <input
          class="w-full rounded pl-2"
          required
          type="number"
          v-model="formData.amount"
          name="amount"
          id="amount"
          placeholder="Digite aqui a quantidade da ração"
        />
      </div>
      <div class="flex w-full flex-col items-end">
        <button
          @click="postDataMethod();"
          class="text-md flex h-8 w-20 items-center justify-center gap-1 rounded-sm bg-[#1F243C] text-[#e0e0e0]"
        >
          Enviar
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
  name: "AppForms",
  components: {
    PhCaretRight,
  },
  data() {
    return {
      formData: {
        title: "",
        price: "",
        amount: "",
      },
    };
  },
  methods: {
    showAlert(msg){
       this.$swal(msg);
    },
    reset () {
        this.$refs.form.reset()
      },
    postDataMethod() {
      console.log("entrou");
      axios
        .post("http://localhost:5000/foods", this.formData)
        .then((res) => {
          console.log(res.data);
          this.showAlert("Cadastro Feito");
          this.reset();
        })
        .catch((error) => {
          console.log(error);
          this.showAlert("Erro ao cadastrar a ração");
        });
    },
  },
};
</script>
