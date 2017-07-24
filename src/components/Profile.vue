<script>

import viewPage from './base/viewPage.vue'
import contentPage from './base/content-page.vue'
import {BarHeader} from './base/bar/index.vue'
import {List,Item, ItemInfo} from './list/index.vue'

export default {
    components: {
        viewPage, contentPage, List, Item, ItemInfo, BarHeader
    },
    data() {
        return {
            img_perfil: 'http://isabelafreitas.com.br/wp-content/uploads/2013/06/WBG4BIkr5Wd0C4TbB0sNIVoyXX1-IttO21n8fEGdQQM.jpg',
            tel: '(21) 5555-6666',
            cel: '(21) 9999-6666',
            email: 'thiago122@gmail.com'
        }
    }
}

</script>


<template>
    <div>
        <view-page class="has-navbar">
            <bar-header class="bar-positive profile-bar">
                <a class="button icon-left ion-chevron-left button-clear ion-ios-arrow-left" onclick="window.history.back()"></a>
                <h1 class="title">Thiago Sobrinhos</h1>
            </bar-header>
            <content-page>
                <div class="profile-header">
                    <div class="profile-name"></div>
                    <div class="profile-avatar">
                        <img :src="img_perfil">
                    </div> 
                </div>
                <div class="profile-divider">
                    Informações de Contato
                </div>
                <div style="padding: 0 10px; background: #fff">
                    <item-info>
                        {{tel}}
                    </item-info> 
                    <item-info>
                        {{cel}}
                    </item-info> 
                    <item-info>
                        {{email}}
                    </item-info>      
                </div>
            </content-page>
        </view-page>        
    </div>
</template>

<style lang="scss" scoped>
    .profile-header{
        padding: 20px;
        color: #fff;
        background: #2aade5
    }
    .profile-bar{
        color: #fff;
        background: #2aade5
    }
    .profile-name{
        margin-bottom: 20px;
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        color: #fff;
    }
    .profile-avatar{
        width: 100px;
        height: 100px;
        margin: 0 auto 20px auto;
        overflow: hidden;
        border-radius: 50%;
        background-color: #fff
    }
    .profile-avatar img{
        width: 100%;
    }
    .profile-divider{
        padding: 8px 16px;
        min-height: 30px;
        background-color: #f5f5f5;
        color: #222;
        font-weight: 500;
        font-size: 16px;
    }
</style>