<template>
  <div>
    <v-card class="" elevation="0" outlined>
      <v-card-title class="text2--text">
        <span class="text-h4">Table</span>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          outlined
          color="text2"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          dense
        ></v-text-field>
      </v-card-title>
      <v-card-text>
        <v-data-table :headers="headers" :items="data" :search="search"></v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        {
          text: 'Username',
          align: 'start',
          sortable: true,
          value: 'username',
        },
        {
          text: 'Email',
          align: 'start',
          sortable: true,
          value: 'email',
        },
      ],
      search: '',
      data: [],
    }
  },
  created() {
    const options = {
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'get',
    }
    this.axios(options).then((res) => {
      this.data = res.data
    })
  },
}
</script>

<style lang="scss" scoped></style>
