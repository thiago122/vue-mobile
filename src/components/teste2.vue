<template>
    <div>
        <view-page>
            <bar-header class="bar-energized">
                <a class="button icon-left ion-chevron-left button-clear button-dark ion-ios-arrow-left" onclick="window.history.back()"></a>
                <h1 class="title">Teste 2</h1>
            </bar-header>
            <content-page>
                <list>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    <item v-link="{ path: '/profile' }">Profile</item>
                </list>

            </content-page>
        </view-page>        
    </div>
</template>

<script>

import viewPage from './base/viewPage.vue'
import contentPage from './base/content-page.vue'
import {BarHeader} from './base/bar/index.vue'
import {List,Item} from './list/index.vue'

export default {
    components: {
        viewPage, contentPage, List,Item, BarHeader
    },

    data(){
        return {
            chosenTopics: [],
            topics: ["Opção 01", "opção", "opção", "opção", "opção"]
        }
    }

}

</script>
