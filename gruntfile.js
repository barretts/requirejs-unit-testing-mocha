module.exports = function(grunt) {
  grunt.initConfig({
    mocha: {
      reporter: 'dot',
      timeout: '90000', // in ms
      url: 'http://localhost:8080/test'
    },

    shell: {
      mocha: {
        command: 'node ./node_modules/mocha-phantomjs/bin/mocha-phantomjs ' +
                 '-R <%= mocha.reporter %> ' +
                 '-t <%= mocha.timeout %> ' +
                 '<%= mocha.url %>',
        options: {
          failOnError: true,
          stdout: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('mocha', function() {
    if (grunt.option('reporter')) {
      grunt.config('mocha.reporter', grunt.option('reporter'));
    }

    if (grunt.option('timeout')) {
      grunt.config('mocha.timeout', grunt.option('timeout'));
    }

    if (grunt.option('url')) {
      grunt.config('mocha.url', grunt.option('url'));
    }

    grunt.task.run('shell:mocha');
  });
};