<template>
    <div>
        <view-page>
            <bar-header class="bar-header bar-positive">
                <h1 class="title">Home :)</h1>
            </bar-header>
            <content-page>
                <list>
                    <item class="item-icon-right" v-link="{ path: '/teste' }">
                        Teste
                    </item>
                    <item class="item-icon-right" v-link="{ path: '/teste' }">
                        Teste <span class="item-note"> vai</span>
                        <i class="icon ion-ios-arrow-right"></i>
                    </item>
                </list>
            </content-page>
        </view-page>        
    </div>
</template>
