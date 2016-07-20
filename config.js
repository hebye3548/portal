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
        'src':['develop/common/lib/admin-lte/bootstrap/fonts/*','develop/common/lib/Ionicons/fonts/*','develop/common/lib/font-awesome/fonts/*'],
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
                'develop/common/lib/admin-lte/plugins/jQuery/jquery-2.2.3.min.js',
                'develop/common/lib/admin-lte/bootstrap/js/bootstrap.min.js',
                'develop/common/lib/admin-lte/plugins/morris/morris.min.js',
                'develop/common/lib/moment/min/moment.min.js',
                'develop/common/lib/admin-lte/plugins/iCheck/icheck.js',
                'develop/common/lib/admin-lte/plugins/knob/jquery.knob.js',
                'develop/common/lib/admin-lte/plugins/daterangepicker/daterangepicker.js',
                'develop/common/lib/admin-lte/plugins/datepicker/bootstrap-datepicker.js',
                'develop/common/lib/admin-lte/plugins/slimScroll/jquery.slimscroll.min.js',
                'develop/common/lib/admin-lte/plugins/fastclick/fastclick.js',
            ],
            'dest': 'webapp/js',
            'dist':'lib.js'
        },
        'style':{
            'src':[
                'develop/common/lib/font-awesome/css/font-awesome.css',
                'develop/common/lib/Ionicons/css/ionicons.css',
                'develop/common/lib/admin-lte/bootstrap/css/bootstrap.min.css',
                'develop/common/lib/admin-lte/dist/css/AdminLTE.min.css',
                'develop/common/lib/admin-lte/dist/css/skins/_all-skins.min.css',
                'develop/common/lib/admin-lte/plugins/iCheck/square/blue.css',
                'develop/common/lib/admin-lte/plugins/datepicker/datepicker3.css',
                'develop/common/lib/admin-lte/plugins/daterangepicker/daterangepicker.css',
            ],
            'dest':'webapp/css',
            'dist':'lib.css'
        },
        'image':{
            'src':[
                'develop/common/lib/admin-lte/plugins/iCheck/square/blue.png',
            ],
            'dest':'webapp/css',
        }
    },
    'appResource':{
        'script':{
            'src':[
                'develop/common/js/*.js',
                ],
            'dest':'webapp/js',
            'dist':'app.js'
        }
    },
    'clean':{
        'src':'webapp'
    }
    
};