<template>
    <div>
        <v-row>
            <v-item v-for="tile in tiles" :key="tile.name">
                <Tile v-bind:name="tile.name" v-bind:imgSrc="tile.imgSrc"/>
            </v-item>
        </v-row>
    </div>
</template>

<script>
import Tile from './HomeTile';

export default {
    components:{
        Tile
    },
    data(){
        return{
            tiles: [{
                name : 'Potions',
                imgSrc: 'https://organized31.com/wp-content/uploads/2017/09/Magic-Potions-for-Kids-FB.jpg'
            },
            {   
                name : 'Armor',
                imgSrc: 'https://owips.com/sites/default/files/clipart/drawn-armor/447919/drawn-armor-mage-armor-447919-6820635.jpg'
            },
            {   
                name : 'Weapons',
                imgSrc: 'https://spinewrinkle.com/wp-content/uploads/2017/11/weapons.jpg'
            },
            {   
                name : 'Pets',
                imgSrc: 'http://www.gamingdebugged.com/wp-content/uploads/2014/07/awesome-video-game-pets.jpg'
            },
            {   
                name : 'Mounts',
                imgSrc: 'https://store-images.s-microsoft.com/image/apps.37430.71782003654723417.9156597d-58b4-4226-aa7f-db601d3e802d.a05a78dd-130a-4a35-9006-be2705cdfbac?mode=scale&q=90&h=720&w=1280&background=%23FFFFFF'
            },
            ]
        }
    }
}
</script>