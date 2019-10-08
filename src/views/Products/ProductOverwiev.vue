<template>
    <div>
        <h1 v-for="product in products" :key="product.id">{{product.name}}</h1>
    </div>
</template>

<script>
import restApi from '../../api/api'
export default {
    name: 'products',
    mounted(){
        this.fetchProducts();
    },
    data () {
        return {
            products: []
        }
    },
    methods: {
        fetchProducts() {
            restApi.get('items')
                .then((result) => {
                    if (this.products && this.products.length > 0){
                        this.products = this.products.filter(a => result.data.some(an => an.id === a.id));
                    } else{
                        this.products = result.data
                    }
                })
        }
    }
}
</script>