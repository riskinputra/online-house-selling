<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field
      label="E-mail"
      v-model="email"
      :rules="emailRules"
      required
    ></v-text-field>
    <v-text-field
      label="Password"
      type="password"
      v-model="password"
      :rules="passwordRules"
      required
    ></v-text-field>
    <v-btn
      @click.native="submit"
      :disabled="!valid"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
</template>

<script>
  import axios from 'axios'
  export default {
    data: () => ({
      valid: true,
      password: '',
      passwordRules: [
        (v) => !!v || 'Password is required'
      ],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }),
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          axios.post('http://35.197.159.250:3001/signin', {
            email: this.email,
            password: this.password
          })
          .then(result => {
            console.log(result.data)
            localStorage.setItem('token', result.data.token)
            location.reload()
          })
          .catch(err => console.log(err))
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>