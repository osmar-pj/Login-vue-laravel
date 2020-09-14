<template>
    <div class="sidebar-page">
        <section class="sidebar-layout">
             <b-sidebar
                position="fixed"
                mobile="reduce"
                expand-on-hover
                right
                type="is-primary"
                open
                fullheight
            >
                <div class="p-1">
                    <div class="block">
                    <img src="" alt="">
                    </div>
                    <b-menu class="is-custom-mobile">
                        <b-menu-list label="General">
                            <b-menu-item label="Dashboard" icon="link"></b-menu-item>
                        </b-menu-list>
                        <b-menu-list label="Food">
                            <b-menu-item label="Registro platos" icon="link"></b-menu-item>
                        </b-menu-list>
                        <br>
                        <br>
                        <hr>
                        <b-menu-list label="Acciones">
                            <b-menu-item icon="logout" label="Cerrar sesion" @click.prevent="logout"></b-menu-item>
                        </b-menu-list>
                    </b-menu>
                </div>
            </b-sidebar>

            <div class="p-1">
                DASHBOARD
            </div>
        </section>
    </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
      logout() {
          this.$store.commit('logout')
          this.$router.push('/login')
      }
  }
};
</script>

<style lang="scss">
.p-1 {
  padding: 1em;
}
.sidebar-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    // min-height: 100vh;
    .sidebar-layout {
        display: flex;
        flex-direction: row;
        min-height: 100%;
        // min-height: 100vh;
    }
}
@media screen and (max-width: 1023px) {
    .b-sidebar {
        .sidebar-content {
            &.is-mini-mobile {
                &:not(.is-mini-expand),
                &.is-mini-expand:not(:hover) {
                    .menu-list {
                        li {
                            a {
                                span:nth-child(2) {
                                    display: none;
                                }
                            }
                            ul {
                                padding-left: 0;
                                li {
                                    a {
                                        display: inline-block;
                                    }
                                }
                            }
                        }
                    }
                    .menu-label:not(:last-child) {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
@media screen and (min-width: 1024px) {
    .b-sidebar {
        .sidebar-content {
            &.is-mini {
                &:not(.is-mini-expand),
                &.is-mini-expand:not(:hover) {
                    .menu-list {
                        li {
                            a {
                                span:nth-child(2) {
                                    display: none;
                                }
                            }
                            ul {
                                padding-left: 0;
                                li {
                                    a {
                                        display: inline-block;
                                    }
                                }
                            }
                        }
                    }
                    .menu-label:not(:last-child) {
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
</style>