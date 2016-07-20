module.exports={
    'serverport': 8080,
    'server':{
        port:9000
    },
    'demoserver':{
        port:9300
    },
    'style': {
        'watch':'develop/module/**/*.scss',
        'src': 'scss/*.scss',
        'dest': 'webapp/css',
        'suffix':'.css'
    },
    'script': {
        'watch':'develop/module/**/*.js',
        'src': 'js/*.js',
        'dest': 'webapp/js',
        'suffix':'.js'
    },
    'font':{
        'src':'develop/common/lib/startbootstrap-sb-admin/fonts/*',
        'dest':'webapp/fonts'
    },
    'view': {
        'watch':['develop/index.html','develop/module/**/*.html'],   
        'index':{
            'src':'develop/index.html',
            'dest':'webapp'
        },
        'module':{
                'src': 'view/*.html',
                'dest': 'webapp/view',}
    },
   'moduleInfo':[
        {'src':'develop/module/index/','dist':'index'},
        {'src':'develop/module/login/','dist':'login'},
        {'src':'develop/module/header/','dist':'header'},
    ],
    'lib':{
        'script':{
            'src':[
                'develop/common/lib/angular/angular.js',
                'develop/common/lib/angular-ui-router/release/angular-ui-router.js',
                'develop/common/lib/oclazyload/dist/ocLazyLoad.js',
                'develop/common/lib/startbootstrap-sb-admin/js/jquery.js',
                'develop/common/lib/startbootstrap-sb-admin/js/bootstrap.js',
            ],
            'dest': 'webapp/js',
            'dist':'lib.js'
        },
        'style':{
            'src':[
                'develop/common/lib/startbootstrap-sb-admin/css/bootstrap.css',
                'develop/common/lib/startbootstrap-sb-admin/css/sb-admin.css',
                'develop/common/lib/startbootstrap-sb-admin/css/plugins/morris.css',
                'develop/common/lib/startbootstrap-sb-admin/font-awesome/css/font-awesome.css'
            ],
            'dest':'webapp/css',
            'dist':'lib.css'
        }
    },
    'appResource':{
        'script':{
            'src':[
                'develop/common/js/app.js',
                'develop/common/js/routers.js'
                ],
            'dest':'webapp/js',
            'dist':'app.js'
        }
    },
    'clean':{
        'src':'webapp'
    }
    
};