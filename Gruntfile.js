module.exports = function(grunt) {
         grunt.initConfig({

             less: {
                 development: {
                     options: {
                         paths: ["style/css"]
                     },
                     files: {"assets/style/css/main.css": "assets/style/less/main.less"}
                 },
                 // production: {
                 //     options: {
                 //         paths: ["assets/css"],
                 //         cleancss: true
                 //     },
                 //     files: {"assets/style/css/main.css": "assets/style/less/main.less"}
                 // }
             }
         });
         grunt.loadNpmTasks('grunt-contrib-less');
         grunt.registerTask('default', ['less']);
     };