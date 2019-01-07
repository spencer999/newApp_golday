import Vue from 'vue'
import Router from 'vue-router' 
import home from '@/components/index/Home'

/*一级路由*/
import index from '@/components/index/index'
import aboutGolday from '@/components/aboutGolday/AboutGolday'
import trade from '@/components/trade/Trade'
import market from '@/components/market/Market'
import customer from '@/components/customer/Customer'
import help from '@/components/help/Help'

/*二级路由*/
    /*客戶中心*/
import discount from '@/components/customer/Discount'
import notice from '@/components/customer/Notice'
import school from '@/components/customer/School'
import rate from '@/components/customer/Rate'
import invest from '@/components/customer/Invest'

import detail from '@/components/customer/components/Detail'

    /*交易中心*/
import account from '@/components/trade/Account'
import classify from '@/components/trade/Classify'
import rules from '@/components/trade/Rules'
import download from '@/components/trade/Download'
    /*行情中心*/
import gdReview from '@/components/market/GdReview'
import lastestNew from '@/components/market/LastestNew'
import londonJ from '@/components/market/LondonJ'
import londonY from '@/components/market/LondonY'
import marketRead from '@/components/market/MarketRead'
import product from '@/components/market/Product'
import strategy from '@/components/market/Strategy'
import goldTech from '@/components/market/GoldTech'
import topic from '@/components/market/Topic'
    /*帮助中心*/
import accountQue from '@/components/help/AccountQue'
import deal from '@/components/help/Deal'
import flatForm from '@/components/help/FlatForm'
import other from '@/components/help/Other'
    /*关于金盛*/
import contactUs from '@/components/aboutGolday/ContactUs'
import fundSecurity from '@/components/aboutGolday/FundSecurity'
import gdHonor from '@/components/aboutGolday/GdHonor'
import introduce from '@/components/aboutGolday/Introduce'
import investor from '@/components/aboutGolday/Investor'
import news from '@/components/aboutGolday/News'

/*三级路由*/

import industry from '@/components/customer/components/Industry'
import gold from '@/components/customer/components/Gold'
import siliver from '@/components/customer/components/Siliver'
import investQue from '@/components/customer/components/InvestQue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home', 
            component:home , 
            redirect:'/index',
            children:[
                {
                    path: '/index',
                    name: 'index',
                    component: index
                },
                {
                    path: '/aboutGolday',
                    name: 'aboutGolday',
                    component: aboutGolday,
                    redirect:'/aboutGolday/introduce',
                    children:[
                        {
                            path:'/aboutGolday/contactUs',
                            name:'contactUs',
                            component:contactUs
                        },
                        {
                            path:'/aboutGolday/fundSecurity',
                            name:'fundSecurity',
                            component:fundSecurity
                        }, 
                        {
                            path:'/aboutGolday/gdHonor',
                            name:'gdHonor',
                            component:gdHonor
                        },
                        {
                            path:'/aboutGolday/introduce',
                            name:'introduce',
                            component:introduce
                        },
                        {
                            path:'/aboutGolday/investor',
                            name:'investor',
                            component:investor
                        },
                        {
                            path:'/aboutGolday/news',
                            name:'news',
                            component:news
                        }
                        
                    ]
                },
                {
                    path: '/trade',
                    name: 'trade',
                    component: trade
                },
                {
                    path: '/market',
                    name: 'market',
                    redirect:'/market/londonJ',
                    component: market,
                    children:[
                        {
                            path:'/market/gdReview',
                            name:'gdReview',
                            component:gdReview
                        },
                        {
                            path:'/market/lastestNew',
                            name:'lastestNew',
                            component:lastestNew
                        }, 
                        {
                            path:'/market/londonJ',
                            name:'londonJ',
                            component:londonJ
                        },
                        {
                            path:'/market/londonY',
                            name:'londonY',
                            component:londonY
                        },
                        {
                            path:'/market/marketRead',
                            name:'marketRead',
                            component:marketRead
                        },
                        {
                            path:'/market/product',
                            name:'product',
                            component:product
                        },
                        {
                            path:'/market/strategy',
                            name:'strategy',
                            component:strategy
                        },
                        {
                            path:'/market/topic',
                            name:'topic',
                            component:topic
                        },
                        {
                            path:'/market/goldTech',
                            name:'goldTech',
                            component:goldTech
                        },
                        
                    ]
                },
                {
                    path: '/customer',
                    name: 'customer',
                    component: customer
                },
                {
                    path: '/help',
                    name: 'help',
                    redirect: '/help/accountQue',
                    component: help,
                    children:[
                        {
                            path:'/help/accountQue',
                            name:'accountQue',
                            component:accountQue
                        },
                        {
                            path:'/help/deal',
                            name:'deal',
                            component:deal
                        }, 
                        {
                            path:'/help/flatForm',
                            name:'flatForm',
                            component:flatForm
                        },
                        {
                            path:'/help/other',
                            name:'other',
                            component:other
                        } 
                    ]
                }
            ]
        },
        /*客户中心二级*/
        {
            path: '/customer/discount',
            name: 'discount',
            component: discount
        },
        {
            path: '/customer/notice',
            name: 'notice',
            component: notice
        },
        {
            path: '/customer/school',
            name: 'school',
            redirect:'/school/gold',
            component: school,
            children:[
                {
                    path: '/school/gold',
                    name: 'gold',
                    component: gold
                },
                {
                    path: '/school/siliver',
                    name: 'siliver',
                    component: siliver
                },
                 {
                    path: '/school/investQue',
                    name: 'investQue',
                    component: investQue
                },
                {
                    path: '/school/industry',
                    name: 'industry',
                    component: industry
                },
            ]
        },
        {
            path: '/customer/rate',
            name: 'rate',
            component: rate
        },
        {
            path: '/customer/invest',
            name: 'invest',
            component: invest
        },
        /*交易中心二级*/
        {
            path: '/trade/account',
            name: 'account',
            component: account
        },
        {
            path: '/trade/rules',
            name: 'rules',
            component: rules
        },
        {
            path: '/trade/classify',
            name: 'classify',
            component: classify
        },
        {
            path: '/trade/download',
            name: 'download',
            component: download
        },
        /*详情*/
        {
            path: '/detail',
            name: 'detail',
            component: detail
        },

        {path: "*", redirect: "http://www.golday.biz/app/index.html"}
    ],
    linkActiveClass:'active',
    mode:'hash',
})
