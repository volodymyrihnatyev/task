module.exports = function(grunt) {

    // run local server on port 3000
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 3000,
                    hostname: '*',
                    base: 'app'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');

    // define the tasks
    grunt.registerTask('default',[]);
};