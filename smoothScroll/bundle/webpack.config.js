const path = require('path');
const BeautifyHtmlWebpackPlugin = require('beautify-html-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
// const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const TerserPlugin = require('terser-webpack-plugin');
const globule = require('globule');

const opts = {
  srcDir: path.join(__dirname, 'src'),
  destDir: path.join(__dirname, 'dist', 'assets'),
};

const htmlPluginConfig = globule
  .find(['html/**/*.html', '!html/**/_*.html'], { cwd: opts.srcDir })
  .map(filename => {
    return new htmlWebpackPlugin({
      filename: `../${filename.slice(5)}`,
      template: `./src/${filename}`,
      scriptLoading: 'blocking',
      inject: 'body',
    });
  });

const froms = {
  polyfill: path.join(
    opts.srcDir,
    'assets',
    'js',
    'polyfill'
  ),
  // moduleA: path.join(opts.srcDir, 'assets', 'ts', 'moduleA.ts'),
  ts: path.join(opts.srcDir, 'assets', 'js', 'index.js'),
  scss: {
    A: path.join(opts.srcDir, 'assets', 'sass', 'style.scss'),
    // B: path.join(opts.srcDir, 'assets', 'sass', 'hoge.scss'),
  },
};

module.exports = {
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
  mode: 'development',

  entry: {
    polyfills: froms.polyfill,
    // moduleA: froms.moduleA,
    main: froms.ts,
    'style.min.css': froms.scss.A,
    // 'hoge.min.css': froms.scss.B,
  },
  output: {
    path: opts.destDir,
    filename: 'js/[name].js',
    // assetModuleFilename: 'img/[name][ext]',
    // assetModuleFilename: 'img/[name][hash][ext]',
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    // modules: false,
                    useBuiltIns: 'usage',
                    corejs: 3,
                  },
                ],
                // '@babel/preset-typescript',
              ],
            },
          },
          // {
          //   loader: 'ts-loader',
          // },
        ],
      },
      {
        test: /\.s?css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader', //cssの読み込み
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('css-declaration-sorter')({
                    order: 'smacss',
                  }),
                  require('autoprefixer')({
                    grid: 'autoplace',
                  }),
                  require('cssnano')({
                    autoprefixer: false,
                    zindex: true,
                  }),
                ],
              },
            },
          },
          'sass-loader', //sassの読み込み
        ],
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg|webp)$/i,
      //   type: 'asset/resource',
      // },
      // {
      //   test: /\.(jpe?g|png|gif|svg|webp)$/i,
      //   loader: ImageMinimizerPlugin.loader, //  squooshによる画像圧縮の設定
      //   enforce: 'pre',
      //   options: {
      //     minimizer: {
      //       implementation: ImageMinimizerPlugin.squooshMinify,
      //       options: {
      //         encodeOptions: {
      //           mozjpeg: {
      //             quality: 75,
      //           },
      //           webp: {
      //             lossless: 1,
      //           },
      //           avif: {
      //             cqLevel: 0,
      //           },
      //         },
      //       },
      //     },
      //   },
      // },
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'html-loader',
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    // 拡張子を配列で指定
    extensions: ['.ts', '.js'],
  },
  devServer: {
    open: true,
    liveReload: true,
    watchFiles: './src',
  },
  plugins: [
    // new htmlWebpackPlugin({
    //   template: './src/index.html',
    //   inject: 'body'
    // }),
    ...htmlPluginConfig,
    new BeautifyHtmlWebpackPlugin({
      indent_size: 2,
      indent_char: ' ',
    }),
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name]',
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
  target: ['web', 'es5'],
};
