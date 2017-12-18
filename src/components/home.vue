<template>
    <div>
        <view-page class="has-navbar">
            <bar-header class="bar-header bar-positive">
                <h1 class="title">Home :)</h1>
            </bar-header>
            <content-page>
                <list>
                    <item class="item-icon-right" v-link="{ path: '/product' }">
                        Produtos
                    </item>
                    <item class="item-icon-right" v-link="{ path: '/profile' }">
                        Perfil 
                        <i class="icon ion-ios-arrow-right"></i>
                    </item>
                    <item class="item-icon-right" v-link="{ path: '/about' }">
                        About 
                        <i class="icon ion-ios-arrow-right"></i>
                    </item>
                </list>
            </content-page>
        </view-page>        
    </div>
</template>
