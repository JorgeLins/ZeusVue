<template>
    <div v-if="allData"  class="flex flex-col items-start gap-y-5 max-h-96	 overflow-scroll w-3/5  max-md:w-80">
        <label class="mb-1 text-[#004242] text-xl font-roboto">Histórico de rações</label>
        <div v-for="obj in allData" :key="obj.id" class="bg-yellow-second w-full justify-between	 rounded flex pl-8 pt-4 pb-4 pr-8 items-start gap-96  max-md:gap-6">
            <div class="flex flex-col gap-2 items-start">
                <h3 class="text-[#004242] text-xl font-roboto">{{obj.title}}</h3>
                <div class="flex flex-row gap-6">
                    <h3>R${{obj.price}}</h3>
                    <h3>{{obj.amount}}KG</h3>
                </div>
            </div>
            <div class="flex gap-7 ">
                <h3>25/11/2021</h3>
                <div class="flex mt-4">
                    <button><PhTrash weight="bold" class="text-4xl"/></button>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <label class="mb-1 text-[#004242] text-xl font-roboto">Não existem rações cadastradas!</label>
    </div>
</template>

<script>
import { PhTrash } from "@phosphor-icons/vue"
import axios from "axios";

    export default {
        name:"AppList",
        components:{
            PhTrash
        },
        data (){
            return{
                allData:[]
            }
        },
        mounted() {
      this.getDataMethod()
    },
        methods: {
        getDataMethod() {
            axios
                .get(" http://localhost:5000/foods")
                .then((res) => {
                console.log(res.data);
                this.allData = res.data;
                })
                .catch((error) => {
                console.log(error);
        });
    },
  },
    }
</script>

