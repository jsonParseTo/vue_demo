<template>
  <div class="hello">
    <p @click="changeName">hello {{count}}</p>
    <button @click="sub">Click to sub Store.count</button>
    <table>
        <thead>
            <tr>
                <th>描述</th>
                <th>姓名</th>
                <th>联系方式</th>
                <th>收货地址</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>默认地址</td>
                <td>{{defaultAddress[0].username}}</td>
                <td>{{defaultAddress[0].mobile}}</td>
                <td>{{defaultAddress[0].address}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
      count () {
          return this.$store.state.count
      },
      defaultAddress () {
          return this.$store.getters.isDefaultAddress
      }
  },
  methods: {
    sub () {
      this.$store.commit('decrement');
    },
    changeName () {
      this.$store.commit('changeName');
    }
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
