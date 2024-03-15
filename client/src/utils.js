
const production_mode = 'production'

const mode = production_mode

let base_api = ''

if (mode === production_mode) {
    base_api = ''
} else {
    base_api = 'http://localhost:5000'
}

export {base_api}