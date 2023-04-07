<template>
    <div v-if="allData"  class="flex flex-col items-start gap-y-5 max-h-96	 overflow-scroll w-3/5  max-md:w-80">
        <label class="mb-1 text-[#004242] text-xl font-roboto">Histórico de rações</label>
        <div v-for="obj in allData" :key="obj.id" class="bg-yellow-second w-full rounded flex pl-8 pt-4 pb-4 items-start gap-96  max-md:gap-6">
            <div class="flex flex-col gap-2 items-start">
                <h3 class="text-[#004242] text-xl font-roboto">{{obj.name}}</h3>
                <div class="flex flex-row gap-6">
                    <h3>R${{obj.price}}</h3>
                    <h3>{{obj.quantity}}KG</h3>
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

    export default {
        name:"AppList",
        components:{
            PhTrash
        },
        data (){
            return{
                allData:[
                    {
                        "id": 1,
                        "name": "Whiskas",
                        "price": "32.90",
                        "quantity": "4"
                    },
                    {
                        "id": 2,
                        "name": "Friskies",
                        "price": "32.90",
                        "quantity": "5"
                    },
                    {
                        "id": 3,
                        "name": "Whiskas",
                        "price": "32.90",
                        "quantity": "4"
                    },
                    {
                        "id": 4,
                        "name": "Whiskas",
                        "price": "32.90",
                        "quantity": "4"
                    }, {
                        "id": 5 ,
                        "name": "Whiskas",
                        "price": "32.90",
                        "quantity": "4"
                    }
                ]
            }
        }
    }
</script>

