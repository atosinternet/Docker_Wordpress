/*
 * Grunt Script for Bootstrap Stylus
 * http://gruntjs.com/
 */

'use strict';
module.exports = function(grunt) {

  grunt.initConfig({

  stylus: {
    compile: {
      options: {
        compress: false,
        spawn: false,
        paths: ['source/stylus']
      },
      files: [
        {
          'wp-content/themes/firebox/assets/css/style.css': [
          'prod/app.styl'
          ]
        }
      ]
    }
  },

  watch: {
    stylus: {
      files: [ 'prod/app.styl' ],
      tasks: ['stylus'],
      options: { spawn: false }
      //tasks: ['stylus', 'autoprefixer', 'cssmin']
    }
    ,
    uglify: {
      files: [ 'prod/app.js'],
      tasks: ['uglify'],
      options: { spawn: false }
    }
  },

  clean: {
    dist: ["wp-content/themes/firebox/assets/css/*.css", "wp-content/themes/firebox/assets/css/*.js"]
  },

  autoprefixer: {
    compile: {
      files: {
        'wp-content/themes/firebox/assets/css/style.css': 'wp-content/themes/firebox/assets/css/style.css'
      },
    },
  },

  cssmin: {
    clean: {
      files: [
        {
          'wp-content/themes/firebox/assets/css/style.css': 'wp-content/themes/firebox/assets/css/style.css'
        }
        // ,
        // {
        //   'wp-content/themes/firebox/assets/css/other.css': 'wp-content/themes/firebox/assets/css/other.css'
        // },
        ,
        {
          'wp-content/themes/firebox/assets/css/other.css': [
          'node_modules/bootstrap/dist/css/bootstrap.css',
          'node_modules/wowjs/css/libs/animate.css'
        ]
        }
      ]
    }
  },

  copy: {
    main: {
      files: [
        {expand: true, flatten: true, src: ['node_modules/slick-carousel/slick/fonts/**'], dest: 'wp-content/themes/firebox/assets/css/fonts/', filter: 'isFile'},
        {expand: true, flatten: true, src: ['node_modules/slick-carousel/slick/ajax-loader.gif'], dest: 'wp-content/themes/firebox/assets/css/', filter: 'isFile'},
      ],
    },
  },

  uglify: {
    bower_js_files: {
      files: [
        {
          'wp-content/themes/firebox/assets/js/app.js':'prod/app.js'
        },
        {
          'wp-content/themes/firebox/assets/js/other.js':[
            'prod/other.js',
            'node_modules/jquery/dist/jquery.js',
            'node_modules/popper.js/dist/umd/popper.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
          ]
        }
      ]
    }
  },

  });

  // Load grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['stylus']);
  grunt.registerTask('build', ['stylus', 'autoprefixer', 'cssmin', 'uglify']);
  grunt.registerTask('generate', ['autoprefixer', 'cssmin', 'uglify']);

};