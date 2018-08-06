// module.exports = {
//     plugins: {
//         autoprefixer: {
//             browsers: ['last 2 versions']
//         },
//     },
// };

// now it uses the seperate browserslistrc
module.exports = {
    plugins: [
        require('autoprefixer')
    ]
}
