<template>
	<div>
		<view-page class="has-navbar">
            <bar-header class="bar-header bar-positive">
                <a class="button icon-left ion-chevron-left button-clear ion-ios-arrow-left" onclick="window.history.back()"></a>
                <h1 class="title">Thiago Sobrinhos</h1>            
            </bar-header>
			<content-page>
				<item>Produtos</item>
				<div class="list-products">
					<a class="list-products-item" v-link="{ path: '/profile' }" v-for="produto in produtos" >
						<img class="list-products-item-image" :src="produto.image">
						<div class="list-products-item-loja">{{produto.loja}}	</div>
						<div class="list-products-item-name">{{produto.nome}}</div>
						<div class="list-products-item-price">R$ {{produto.preco}}</div>
					</a>
				</div>	

			</content-page>
		</view-page>
	</div>
</template>

<script>
export default {

    data() {
        return {
        	produtos_: [
        		{
	        		loja: 'Leader',
	        		produto: 'Camiseta Tig Austrália terste',
	        		preco: '39,90',
	        		image: 'http://lorempixel.com/output/food-h-c-216-290-8.jpg'        			
        		},

        	]
        }
    },

    computed: {
    	produtos: function(){
    		var p = [];
    		for (var i = 0; i < 30; i++) {
    			p.push({
	        		loja: 'Leader',
	        		produto: 'Camiseta Tig Austrália terste',
	        		preco: '39,90',
	        		image: 'https://placeimg.com/220/293/any?t=1501210442466'        			
        		})
    		}

    		return p;
    	}
    },
    detached: function(){
        alert();
    }

}

</script>




<style>
	
.list-products{
	overflow: hidden;
	border-right: 1px solid #eee;
}
.list-products-item{
	width: 50%;
	position: relative;
	display: block;
	float: left;
	border: 1px solid #eee;
	border-left-width: 2px;
	border-bottom-width: 4px;
	background: #fff;
}
.list-products-item-image{
	width: 100%;
	display: block;
}
.list-products-item-loja{
    max-width: 50%;
    padding: 3px;
    margin-top: -20px;
    overflow: hidden;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #ffffff;
    background-color: red;
    position: absolute;
    bottom: 45px;
}
.list-products-item-name{
    padding: 5px 5px 3px 5px;
    overflow: hidden;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #696969;
}
.list-products-item-price{
    padding: 5px 5px 3px 5px;
    font-weight: bold;
    color: #000;   
}
@media screen and (min-width: 500px) {
	.list-products-item{
		width: 33.3333%;
	}
}

/* ------------------------------ */

.detail-tt{
    padding: 10px;
    font-size: 16px;
    font-weight: bolder;
    color: #000;
    border-bottom: 1px solid #dcdcdc;
    background-color: #efefef;
}

/* ------------------------------ */
.detail-price-box{
    overflow: hidden;
    padding: 10px;
    color: #884ade ;
    /*border-bottom: 1px solid #dcdcdc;*/
    background: #fff;
}
.detail-por{
    font-size: 13px
}
.detail-price-saler{
    font-size: 18px;
    font-weight: bold;
}
.detail-price-num{
    float: right;
    color: green;
    font-size: 18px;
    font-weight: bold;
}

.properties-box{
    color: #000000;
    border-bottom: 1px solid#dcdcdc;
    background-color: #efefef;
    padding: 10px;
    overflow: hidden;
}


</style>