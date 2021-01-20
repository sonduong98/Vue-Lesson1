<template>
<div>
<div v-show="isShow">
        <h1>Bấm vào button phía dưới thì cái này sẽ ẩn đi</h1>
    </div>
    <button @click="isShow= !isShow">Bấm đi</button>
    <div>
        <input v-bind:name="name">
        <h1>{{name}}</h1>
    </div>
    <div :class="{bl: selecteds}" style="margin:100px">
        <input  v-model="listNames[0]">
        <input v-model="listNames[1]">
    </div>
    <div style="margin:100px">
        <p v-for="item in listNames" :key="item">
            {{item}}
        </p>
    </div>
</div>
    
</template>
    
<script>
export default{
    name:'hidediv',
    data(){
        return{
            isShow:true,
            name:'Nguyễn Sơn Dương',
            listNames:[
                'Nguyễn Sơn Dương',
                'Nguyễn Văn Hùng'
            ],
            selecteds:true
        }
        
    }
}
    
</script>
<style>
    .bl{
        display: grid;
    }
</style>