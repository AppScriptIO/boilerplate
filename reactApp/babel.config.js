module.exports = {
    "presets": [
      ["@babel/preset-env", { 
        // "useBuiltIns": "usage", 
        // "corejs": { 
        //   "version": "3", 
        //   "proposals": "true", 
        //   "modules": "false"
        // } 
      }],
      ["@babel/preset-react", { 
        // "runtime": "automatic" 
        }]
    ],
    "plugins": [
      "react-hot-loader/babel"
    ]
}
