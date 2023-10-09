<template>
    <div>
        <CustomLink 
            v-for="link in links"
            :key="link.to"
            :link="link"
        />
    </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {

    data() {
        return {
            links: [
                { to: 'createToken', name: 'Generación Token' },
                { to: 'cardInformation', name: 'Datos de Tarjetas' },
                
                // { to: 'pokemon-id', name: 'Por ID', id: 151 },
                // { to: 'https://google.com', name: 'Google' },
            ]
        }
    },

    components: {
        CustomLink: defineAsyncComponent(() => import('./CustomLink.vue'))
    }
}
</script>

<style scoped>
div {
    padding: 0 30px;
}

div a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
}

/* a.router-link-exact-active {
    color: #42b983;
} */

</style>