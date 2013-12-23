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
      stylus: 'styl',
      css   : 'css'
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: '',
          livereload: 35729
        }
      }
    },
    watch: {
      html: {
        files: ['**/*']
      },
      options: {
        livereload: 35729
      }
    },
    stylus: {
      base: {
        cwd: 'styl',
        expand: true,
        src: ['**/*.styl'],
        dest: 'css/',
        ext: '.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-stylus');

  grunt.registerTask('default', ['connect', 'watch']);
};