<template>
    <div>
        <view-page>
            <bar-header class="bar-positive">
                <a class="button icon-left ion-chevron-left button-clear ion-ios-arrow-left" onclick="window.history.back()"></a>
                <h1 class="title">Teste</h1>
            </bar-header>
            <content-page>
                <list>
                    <item v-link="{ path: '/teste2' }">Teste 2</item>
                    <item v-link="{ path: '/index2' }">Index 2</item>
                    <item v-link="{ path: '/about' }">About</item>
                    <item>Teste 2</item>
                    <item>Teste 2</item>
                    
                    <item>Teste 2</item>
                </list>
            </content-page>
        </view-page>        
    </div>
</template>

