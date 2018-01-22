<template>
<div>
    <h1>Home</h1>
    <p>{{count}} --- {{age}} --- {{name}}</p>
    <h1>{{nameToupperCase}}</h1>
    <button @click="increment">click to add Store.count</button>
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta a consectetur libero provident aperiam impedit omnis. Earum aperiam ipsum fugit ipsa. Est quo reiciendis dolore, laudantium repudiandae labore earum ut.</div>
    <table>
        <thead>
            <tr>
                <th>编号</th>
                <th>姓名</th>
                <th>联系方式</th>
                <th>收货地址</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(list, index) in lists" :key="index">
                <td>{{index}}</td>
                <td>{{list.username}}</td>
                <td>{{list.mobile}}</td>
                <td>{{list.address}}</td>
                <td @click="setDefaultAddress(list.id)">Set</td>
            </tr>
            <tr>
                <td>默认地址</td>
                <td>{{isDefaultAddress[0].username}}</td>
                <td>{{isDefaultAddress[0].mobile}}</td>
                <td>{{isDefaultAddress[0].address}}</td>
            </tr>
        </tbody>
    </table>
    <button @click="ls">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste obcaecati dolorum iusto laboriosam? Asperiores itaque aliquid minima voluptatibus nobis cum nam corrupti. Maiores voluptates, accusamus mollitia minus autem voluptas iusto.</button>
</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    name: 'Home',
    computed: { 
        ...mapState ({
            count (state) {
                return state.count
            },
            age (state) {
                return state.age
            },
            name (state) {
                return state.name
            },
            lists (state) {
                return state.lists
            },      
            nameToupperCase (state) {
                return state.name.toUpperCase() + ":lxbb"
            }
        }),
        ...mapGetters ([
            'isDefaultAddress',
            'isReceivingAddress'
        ])
    },
    methods: {
        ls () {
            this.$store.dispatch("lucia").then(() => {
                console.log("async over")
            })
        },
        ...mapMutations ([
            'increment',
            'setDefaultAddress'
        ]),
        ...mapActions ([
            'lucia'
        ])
    }
}
</script>

<style lang="scss" scoped>
table {
    table-layout: fixed;
    text-align: center;
    border-collapse: collapse;
    tr {
        th,
        td {
            &:first-child {
                width: 100px;
            }
            padding: 3px 10px;
            border: solid 1px #ef4e22;
        }
    }
}
</style>
