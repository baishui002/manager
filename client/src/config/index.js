import dev_config from './dev';
import test_config from './test';
import prod_config from './prod';

let config = {}

if (process.env.NODE_ENV === 'production') {
    if (process.env.VUE_APP_FLAG === 'prod') {
        //production 生产环境
        config = {
            appid: prod_config.appid,
            url: prod_config.url
        }
 
    } else {
        //test 测试环境
        config = {
            appid: test_config.appid,
            url: test_config.url
        }
 
    }
} else {
    //dev 开发环境
    config = {
        appid: dev_config.appid,
        url: dev_config.url
    }

}

export default config