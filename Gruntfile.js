module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            app: {
                src: 'client/scripts/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            },
            designJS: {
                src: 'client/scripts/design.js',
                dest: 'server/public/assets/scripts/design.min.js'
            },
            developmentJS: {
                src: 'client/scripts/development.js',
                dest: 'server/public/assets/scripts/development.min.js'
            },
            resumeJS: {
                src: 'client/scripts/resume.js',
                dest: 'server/public/assets/scripts/resume.min.js'
            },
            controllers:{
                src: "client/scripts/controllers/controllers.js",
                dest: "server/public/assets/scripts/controllers/controller.min.js"
            }

        },
        copy: {
            styles: {
                expand: true,
                cwd: "client",
                src:
                    ["styles/home.css",
                     "styles/resume.css",
                     "styles/design.css",
                     "styles/development.css"],

                dest: "server/public/assets/"
            },
            html: {
                expand:true,
                cwd:"client",
                src:["views/index.html",
                     "views/resume.html",
                     "views/design.html",
                     "views/development.html"],
                dest: "server/public/assets/"
            },

            angular: {
                expand: true,
                cwd: "node_modules",
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map"
                ],
                dest: "server/public/vendors/"
            },
            angularMaterial: {
                expand: true,
                cwd: "node_modules",
                src: [
                    "angular-animate/angular-animate.min.js",
                    "angular-aria/angular-aria.min.js",
                    "angular-material/angular-material.min.js"
                ],
                dest: "server/public/vendors/"
            },
            angularRoute: {
                expand: true,
                cwd: "node_modules",
                src: [
                    "angular-route/angular-route.min.js",
                    "angular-route/angular-route.min.js.map"
                ],
                dest: "server/public/vendors/"
            },
            bootstrap: {
                expand: true,
                cwd: "node_modules",
                src: [
                    "bootstrap/dist/css/bootstrap.min.css"
                ],
                dest: "server/public/vendors/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['copy', 'uglify']);
};