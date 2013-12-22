/*
 * kzhrk-pjax
 * http://kzhrk.com/
 *
 * Copyright (c) 2013 Kobayashi Kazuhiro
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  /*
   * grunt.initConfig
   */
  grunt.initConfig({
    dir : {
      stylus: 'src/sample/styl',
      css   : 'src/sample/css'
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: 'src/sample',
          livereload: 35729
        }
      },
      slide: {
        options: {
          port: 9002,
          base: 'src/slide',
          livereload: 35729
        }
      }
    },
    watch: {
      html: {
        files: ['src/**/*', 'slide/**/*']
      },
      options: {
        livereload: 35729
      }
    },
    stylus: {
      compile: {
        files: {
          '<%= dir.css %>/top.css': '<%= dir.stylus %>/content/top.styl',
          '<%= dir.css %>/print.css': '<%= dir.stylus %>/print.styl',
          '<%= dir.css %>/base.css': '<%= dir.stylus %>/base.styl'
        },
        options: {
          compress: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-stylus');

  grunt.registerTask('default', ['connect', 'watch']);
};