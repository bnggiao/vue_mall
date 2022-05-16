const pxtovw = require('postcss-px-to-viewport');
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network'
            }
        }
    },
    css:{
        loaderOptions:{
            sass:{
                //给sass-loader传递选项
            },
            css:{
                //给css-loader传递选项
            },
            postcss:{
                //给postcss-loader传递选项
                plugins:[
                    new pxtovw({
                        viewportWidth: 375,
                        viewportHeight: 667,
                        unitPrecision: 5,
                        viewportUnit: 'vw',
                        selectorBlackList: ['tab-bar', 'tab-tab-item', 'ignore', 'content', 'detail-scroll', 'GoodsListItem'],
                        minPixelValue: 1,
                        mediaQuery: false,
                        exclude: [/TabBar/, /NavBar/, /TabControl/, /CartBottomBar/, /CheckButton/, /BackTop/]
                    })
                ]
            }
        }
    }
}
