<template>
    <div>
        <section class="hero is-light is-fullheight">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <b-field>
                        <img src="" alt="">
                    </b-field>
                    <div class="columns">
                        <div class="column is-2 is-offset-5">
                            <h1 class="title is-size-2 has-text-primary">MIKUNA</h1>
                            <h2 class="subtitle is-size-7">Bienvenido, las funcionalidades te permitiran tener mejor control sobre los productos que ofreces!</h2>
                        </div>
                    </div>
                    <br>
                    <div class="columns">
                        <div class="column is-4 is-offset-4">
                            <b-field type="is-primary">
                                <b-input type="email"
                                    icon="account"
                                    placeholder="Usuario"
                                    size="is-medium"
                                    v-model="form.email">
                                </b-input>
                            </b-field>
                            <b-field type="is-primary">
                                <b-input type="password"
                                    placeholder="Password"
                                    password-reveal
                                    icon="lock"
                                    size="is-medium"
                                    v-model="form.password">
                                </b-input>
                            </b-field>
                            <br>
                            <br>
                            <b-field>
                                <b-button size="is-medium" type="is-primary" outlined rounded @click.prevent="login">INGRESAR</b-button>
                            </b-field>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <b-loading :is-full-page="true" :active.sync="loading" :can-cancel="true"></b-loading>
    </div>
</template>

<script>
import { login } from '../help/auth'

export default {
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            loading: false
        }
    },
    methods: {
        login() {
            this.$store.dispatch('login')
            login(this.$data.form)
            .then(res => {
                this.$store.commit('loginSuccess', res)
                this.$router.push('/')
            })
            .catch(err => {
                this.$store.commit('loginFailed', err)
            })
        }
    }
}
</script>