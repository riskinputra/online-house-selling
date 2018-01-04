
<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field
      label="Username"
      v-model="formUser.username"
      :rules="usernameRules"
      :counter="20"
      required
    ></v-text-field>
    <v-text-field
      label="E-mail"
      v-model="formUser.email"
      :rules="emailRules"
      required
    ></v-text-field>
    <v-text-field
      label="Password"
      type="password"
      v-model="formUser.password"
      :rules="passwordRules"
      required
    ></v-text-field>

    <v-btn
      @click="addUser(formUser)"
      :disabled="!valid"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        valid: true,
        formUser: {
          password: '',
          username: '',
          email: ''
        },
        passwordRules: [
          (v) => !!v || 'Password is required'
        ],
        usernameRules: [
          (v) => !!v || 'Username is required',
          (v) => v && v.length <= 20 || 'Username must be less than 10 characters'
        ],
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ]
      }
    },
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('http://localhost:3000/signup', {
            username: this.username,
            email: this.email,
            password: this.password
          })
          .then(result => {
            console.log(result)
            location.reload()
            // localStorage.setItem('userId', result.data.data._id)
          })
        }
      },
      clear () {
        this.$refs.form.reset()
      },
      ...mapActions([
        'addUser'
      ])
    }
  }
</script>